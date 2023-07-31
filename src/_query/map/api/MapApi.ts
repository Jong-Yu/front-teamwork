import axios from 'axios';
import { SearchPlaces } from '../model/SearchPlaces';

export async function searchKeyWord(keyword: string) {
  // 검색 결과를 가져옵니다.
  return axios
    .get<SearchPlaces>(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
        },
        withCredentials: false,
      },
    )
    .then(res => res.data);
}
