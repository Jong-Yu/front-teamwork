import React, { useState, useEffect, useCallback } from 'react';
import { Place } from '../../../_query/map/model/Place';
import { searchKeyWord } from '../../../_query/map/api/MapApi';
import { getCurrentPosition } from '../../util/Window/navigator.util';

const { kakao } = window;

// 카카오맵 API를 이용하여 장소 검색 결과를 지도에 표시하는 컴포넌트
export const Map = () => {
  // 검색어와 검색 결과를 저장하는 상태
  const [keyword, setKeyword] = useState('');

  // 지도와 마커를 저장하는 상태
  const [data, setData] = useState<Place[]>([]);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any>([]);

  // 검색어와 검색 옵션을 이용하여 장소 검색 API를 호출하는 함수
  const searchPlaces = async () => {
    if (keyword === '') return;
    const results = await searchKeyWord(keyword);

    if (results) {
      setData(results.documents);
      displayPlaces(results.documents);
    }
  };

  // 검색 결과를 지도에 표시하는 함수
  const displayPlaces = useCallback(
    (places: Place[]) => {
      // 검색 결과가 없으면 함수를 종료합니다.
      if (places.length === 0) return;

      markers.forEach((marker: any) => {
        marker.setMap(null);
      });

      // 검색 결과를 지도에 표시합니다.
      const bounds = new kakao.maps.LatLngBounds();

      const firstPlace = places[0];

      places.forEach(place => {
        // 마커를 생성하고 지도에 추가합니다.
        const marker = new kakao.maps.Marker({
          map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        marker.setMap(map);
        setMarkers((prev: any) => [...prev, marker]);

        // 인포윈도우를 생성하고 마커와 연결합니다.
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
        });
        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });

        // 검색 결과의 위치를 포함하는 지도 영역을 계산합니다.
        bounds.extend(new kakao.maps.LatLng(place.y, place.x));
      });

      var moveLatLon = new kakao.maps.LatLng(firstPlace.y, firstPlace.x);

      // 검색 결과가 모두 표시되도록 지도의 영역을 조정합니다.
      map.panTo(moveLatLon);
    },
    [map, markers],
  );

  // 검색어가 변경될 때마다 검색을 수행합니다.
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClick = () => {
    searchPlaces();
  };

  // 컴포넌트가 마운트될 때마다 지도를 생성합니다.
  useEffect(() => {
    const { latitude, longitude } = getCurrentPosition();
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);
  }, []);

  return (
    <div>
      {/* 검색어 입력란 */}
      <input type="text" value={keyword} onChange={handleKeywordChange} />
      <button onClick={onClick}>검색</button>
      <div>
        {data.map((place: Place) => {
          return <span>{`${place.place_name} \n`}</span>;
        })}
      </div>
      {/* 지도 */}
      <div id="map" style={{ width: '100%', height: '400px' }} />
    </div>
  );
};
