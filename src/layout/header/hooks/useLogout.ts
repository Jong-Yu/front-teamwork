import { useLogout_Mutate } from '../../../_query/auth/authQuery';
import { useGoPush } from '../../../_shared/hooks/History/History.hooks';
import { setAccessToken } from '../../../_shared/util/Storage/localstorage';

export const useLogout = () => {
  // hooks
  const { mutateAsync: logout } = useLogout_Mutate();
  const goPush = useGoPush();

  const onClickLogout = async () => {
    await logout();
    setAccessToken('');

    goPush('/main');
  };

  return {
    onClickLogout,
  };
};
