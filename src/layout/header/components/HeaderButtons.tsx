import { useHeaderButtons } from '../hooks/useHeaderButtons';
import { Login } from './Login';
import { Logout } from './Logout';

export const HeaderButtons = () => {
  // hooks
  const { isValied } = useHeaderButtons();

  return <div>{isValied ? <Logout /> : <Login />}</div>;
};
