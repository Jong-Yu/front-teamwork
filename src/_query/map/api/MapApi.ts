import { getAxios } from '../../../_shared/util/Axios/axios.util';
import { SearchPlaces } from '../model/SearchPlaces';

export function searchKeyWord(keyword: string) {
  const { get, axiosReturn } = getAxios();

  // 검색 결과를 가져옵니다.
  return get<SearchPlaces>(
    `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
    {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      },
    },
  ).then(axiosReturn);
}
