import { useGoPush } from '../../../_shared/hooks/History/History.hooks';

export function useTeamEmpty() {
  // hooks
  const goPush = useGoPush();

  // handlers
  const onClickCreateButton = () => {
    goPush('/team/create');
  };

  return {
    onClickCreateButton,
  };
}
