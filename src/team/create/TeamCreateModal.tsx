import styled from '@emotion/styled';
import { Modal } from '../../_shared/ui/Modal';
import { useTeamCreateModal } from './hooks/useTeamCreateModal';
import { ContentsContainer } from './components/ContentsContainer';
import { TeamDesc } from './components/TeamDesc';
import { TeamLogo } from './components/TeamLogo';
import { TeamName } from './components/TeamName';
import { CreateButton } from './components/CreateButton';
import { Button } from '../../_shared/ui/Button/Button';

const Title = styled.span({
  fontSize: '1.2rem',
  fontWeight: 500,
});

export const TeamCreateModal = () => {
  // hook
  const { open, step, name, onClose, onNext, onPrev, onCreate } =
    useTeamCreateModal();

  return (
    <Modal open={open}>
      <Modal.Header onClose={onClose}>
        <Title>{step === 1 ? '팀 이름' : name}</Title>;
      </Modal.Header>
      <Modal.Contents>
        <ContentsContainer>
          {step === 1 && <TeamName />}
          {step === 2 && <TeamLogo />}
          {step === 3 && <TeamDesc />}
        </ContentsContainer>
      </Modal.Contents>
      <Modal.Footer>
        {step > 1 && <Button onClick={onPrev} />}
        {step < 3 && <Button primary onClick={onNext} />}
        {step === 3 && <CreateButton onClick={onCreate} />}
      </Modal.Footer>
    </Modal>
  );
};
