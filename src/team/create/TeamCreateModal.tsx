import { Modal } from '../../_shared/ui/Modal';
import { Header } from './components/Header';
import { NextButton } from './components/NextButton';
import { SubTitle } from './components/SubTitle';
import { useTeamCreateModal } from './hooks/useTeamCreateModal';

export const TeamCreateModal = () => {
  // hook
  const { open, onClose } = useTeamCreateModal();

  return (
    <Modal open={open}>
      <Modal.Header>
        <Header title="팀 이름" onClose={onClose} />
      </Modal.Header>
      <Modal.Contents>
        <SubTitle subTitle={`팀 이름을 \n입력해 주세요.`} />
      </Modal.Contents>
      <Modal.Footer>
        <NextButton />
      </Modal.Footer>
    </Modal>
  );
};
