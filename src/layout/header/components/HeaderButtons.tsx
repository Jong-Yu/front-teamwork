import { isLogin } from '../../../_shared/util/Storage/localstorage';
import { Login } from './Login';
import { Logout } from './Logout';

export const HeaderButtons = () => {
  return <div>{isLogin() ? <Logout /> : <Login />}</div>;
};
