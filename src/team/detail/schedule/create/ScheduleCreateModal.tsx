import { Button } from '../../../../_shared/ui/Button/Button';
import { Modal } from '../../../../_shared/ui/Modal';
import { useScheduleCreateModal } from './hooks/useScheduleCreateModal';

export const ScheduleCreateModal = () => {
  // hook
  const { open, step, onClose, onNext, onPrev } = useScheduleCreateModal();

  return (
    <Modal open={open}>
      <Modal.Header onClose={onClose} />
      <Modal.Contents></Modal.Contents>
      <Modal.Footer>
        {step > 1 && <Button onClick={onPrev}>이전</Button>}
        {step < 3 && (
          <Button primary onClick={onNext}>
            다음
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
