import { useTeamCreateModal } from '../../create/hooks/useTeamCreateModal';

export function useFixedCreateButton() {
  // atom
  const { onOpen } = useTeamCreateModal();

  // handler
  const onClickCreateButton = () => {
    onOpen();
  };

  return {
    onClickCreateButton,
  };
}
