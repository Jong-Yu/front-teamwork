import { useAtom } from 'jotai';
import { openAtom } from '../TeamCreateModal.atom';

export function useTeamCreateModal() {
  // atom
  const [open, setOpen] = useAtom(openAtom);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  return {
    open,
    onOpen,
    onClose,
  };
}
