import { logout } from '../../_query/auth/api/AuthApi';
import { useGoPush } from '../../_shared/hooks/History/History.hooks';
import { getKakao } from '../../_shared/util/KaKao/kakao.util';

export const Test = () => {
  //
  const goPush = useGoPush();

  const onClick = () => {
    getKakao();
  };

  const onClickLogout = () => {
    logout().then(() => goPush('/auth/login'));
  };

  return (
    <>
      <button id="kakaotalk-sharing-btn" onClick={onClick}>
        공유하기 테스트
      </button>

      <button onClick={onClickLogout}>임시 로그아웃</button>
    </>
  );
};
