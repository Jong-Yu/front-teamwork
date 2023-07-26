import { getKakao } from '../../_shared/util/KaKao/kakao.util';

export const Test = () => {
  const onClick = () => {
    getKakao();
  };

  return (
    <button id="kakaotalk-sharing-btn" onClick={onClick}>
      Test
    </button>
  );
};
