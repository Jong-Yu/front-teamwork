import { useScheduleCreateModal } from './useScheduleCreateModal';

export function useScheduleEmpty() {
  // hooks
  const { onOpen } = useScheduleCreateModal();

  // handlers
  const onClickCreateButton = () => {
    onOpen();
  };

  return {
    onClickCreateButton,
  };
}
