import { useTeamCreateModal } from '../../create/hooks/useTeamCreateModal';

export function useTeamEmpty() {
  // hooks
  const { onOpen } = useTeamCreateModal();

  // handlers
  const onClickCreateButton = () => {
    onOpen();
  };

  return {
    onClickCreateButton,
  };
}
