import { Outlet } from 'react-router-dom';
import { useGoPush } from '../shared/hooks/history/History.hooks';

export const UserPage = () => {
  // hooks
  const goPush = useGoPush();

  const onClickUserList = () => {
    goPush('/user/list');
  };

  const onClickUserCreate = () => {
    goPush('/user/create');
  };

  return (
    <>
      <button onClick={onClickUserCreate}>유저 생성</button>
      <button onClick={onClickUserList}>유저 목록</button>

      <Outlet />
    </>
  );
};
