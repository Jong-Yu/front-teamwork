import { useScheduleCreateModal } from './useScheduleCreateModal';

export function useFixedCreateButton() {
  // hooks
  const { onOpen } = useScheduleCreateModal();

  return {
    onOpen,
  };
}
