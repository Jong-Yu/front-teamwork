import { Modal } from '../../_shared/ui/Modal/Modal';
import { useTeamCreateModal } from './hooks/useTeamCreateModal';

export const TeamCreateModal = () => {
  // hook
  const { open } = useTeamCreateModal();

  return <Modal open={open}>모달 입니당.</Modal>;
};
