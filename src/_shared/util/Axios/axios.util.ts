import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken, setAccessToken } from '../Storage/localstorage';
import { refresh } from '../../../_query/auth/api/AuthApi';

// 파라미터를 시리얼라이즈하는 헬퍼 함수
function paramsSerializer(paramObj: Record<string, any>) {
  const params = new URLSearchParams();
  for (const key in paramObj) {
    if (paramObj[key] !== undefined) {
      params.append(key, paramObj[key]);
    }
  }
  return params.toString();
}

export function getAxios() {
  const access_token = getAccessToken();

  // 공통 헤더 설정
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  axios.defaults.paramsSerializer = paramsSerializer;

  // HTTP GET 요청을 처리하는 함수
  const get = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R | undefined> => {
    try {
      return axios.get(url, config);
    } catch {
      return Promise.resolve<R | undefined>(undefined);
    }
  };

  // HTTP POST 요청을 처리하는 함수
  const post = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R | undefined> => {
    try {
      return axios.post(url, data, config);
    } catch {
      return Promise.resolve(undefined);
    }
  };

  // HTTP PUT 요청을 처리하는 함수
  const put = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R | undefined> => {
    try {
      return axios.put(url, data, config);
    } catch {
      return Promise.resolve(undefined);
    }
  };

  // HTTP PATCH 요청을 처리하는 함수
  const patch = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R | undefined> => {
    try {
      return axios.patch(url, data, config);
    } catch {
      return Promise.resolve(undefined);
    }
  };

  // HTTP DELETE 요청을 처리하는 함수
  const axiosDelete = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R | undefined> => {
    try {
      return axios.delete(url, config);
    } catch {
      return Promise.resolve(undefined);
    }
  };

  // 응답을 처리하는 함수
  const axiosReturn = <T>(response: AxiosResponse<T> | undefined) => {
    if (
      response === null ||
      response === undefined ||
      response.data === null ||
      (response.data as unknown) === ''
    ) {
      return undefined;
    }
    return response.data;
  };

  return {
    get,
    post,
    put,
    patch,
    delete: axiosDelete,
    axiosReturn,
  };
}

export function initAxios() {
  // 토큰 만료 에러인지 확인하는 함수
  function isTokenExpiredError(errorResponse?: AxiosResponse): boolean {
    if (!errorResponse) return false;
    return (
      errorResponse &&
      errorResponse.status === 401 &&
      errorResponse.data.message === 'access token expired'
    );
  }

  // 리프레시 토큰 만료 에러인지 확인하는 함수
  function isRefreshTokenExpiredError(errorResponse?: AxiosResponse): boolean {
    if (!errorResponse) return false;
    return (
      errorResponse &&
      errorResponse.status === 401 &&
      (errorResponse.data.message === 'refresh token expired' ||
        errorResponse.data.message === 'none refresh token')
    );
  }

  // JWT 토큰 갱신 요청이 진행중인지 확인하는 변수
  let isAlreadyFetchingAccessToken = false;

  // JWT 갱신이 완료된 후 재시도할 요청들의 목록
  let subscribers: Array<(token: string) => void> = [];

  // 토큰을 재설정하고 원래의 요청을 재시도하는 함수
  async function resetTokenAndReattemptRequest(error: AxiosError) {
    try {
      const { response: errorResponse } = error;
      if (!errorResponse) return Promise.reject(error);
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;

        const accessToken = await refresh();

        isAlreadyFetchingAccessToken = false;
        setAccessToken(accessToken);
        onAccessTokenFetched(accessToken);
      }
      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber(access_token => {
          errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
          resolve(axios(errorResponse.config));
        });
      });
      return retryOriginalRequest;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  // 토큰 갱신이 성공하면 대기 중인 요청들을 재시도하고 대기열을 비우는 함수
  function onAccessTokenFetched(access_token: string) {
    subscribers.forEach(callback => callback(access_token));
    subscribers = [];
  }

  // 대기 중인 요청들의 목록에 새 요청을 추가하는 함수
  function addSubscriber(callback: (token: string) => void) {
    subscribers.push(callback);
  }

  // 응답과 에러를 처리하는 인터셉터 설정
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      const errorResponse = error.response;
      if (isTokenExpiredError(errorResponse)) {
        return resetTokenAndReattemptRequest(error);
      }

      if (isRefreshTokenExpiredError(errorResponse)) {
        window.location.href = '/auth/login';
      }

      return Promise.reject(error);
    },
  );
}
