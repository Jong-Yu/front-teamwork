import { useAuthPage } from './hooks/useAuthPage';

export const AuthPage = () => {
  // hooks
  const { onClickLoginKakao, onClickLogOut } = useAuthPage();

  return (
    <div>
      <h1>AuthPage</h1>

      <button onClick={onClickLoginKakao}>KaKao Login</button>
      <button onClick={onClickLogOut}>KaKao Logout</button>
    </div>
  );
};
