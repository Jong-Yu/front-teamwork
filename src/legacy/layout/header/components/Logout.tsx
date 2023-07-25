import { useLogout } from '../hooks/useLogout';

export const Logout = () => {
  // hooks
  const { onClickLogout } = useLogout();

  return <button onClick={onClickLogout}>logout</button>;
};
