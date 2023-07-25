import { useLogout_Mutate } from '../../../../_query/auth/authQuery';
import { useGoPush } from '../../../_shared/hooks/History/History.hooks';

export const useLogout = () => {
  // hooks
  const { mutateAsync: logout } = useLogout_Mutate();
  const goPush = useGoPush();

  const onClickLogout = async () => {
    await logout();

    goPush('/main');
  };

  return {
    onClickLogout,
  };
};
