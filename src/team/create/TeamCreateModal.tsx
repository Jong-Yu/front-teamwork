import { Modal } from '../../_shared/ui/Modal';
import { useTeamCreateModal } from './hooks/useTeamCreateModal';
import { Header } from './components/Header';
import { ContentsContainer } from './components/ContentsContainer';
import { TeamDesc } from './components/TeamDesc';
import { TeamLogo } from './components/TeamLogo';
import { TeamName } from './components/TeamName';
import { NextButton } from './components/NextButton';
import { PrevButton } from './components/PrevButton';
import { CreateButton } from './components/CreateButton';

export const TeamCreateModal = () => {
  // hook
  const { open, step, name, onClose, onNext, onPrev, onCreate } =
    useTeamCreateModal();

  return (
    <Modal open={open}>
      <Modal.Header>
        <Header title={step === 1 ? '팀 이름' : name} onClose={onClose} />
      </Modal.Header>
      <Modal.Contents>
        <ContentsContainer>
          {step === 1 && <TeamName />}
          {step === 2 && <TeamLogo />}
          {step === 3 && <TeamDesc />}
        </ContentsContainer>
      </Modal.Contents>
      <Modal.Footer>
        {step > 1 && <PrevButton onClick={onPrev} />}
        {step < 3 && <NextButton onClick={onNext} />}
        {step === 3 && <CreateButton onClick={onCreate} />}
      </Modal.Footer>
    </Modal>
  );
};
