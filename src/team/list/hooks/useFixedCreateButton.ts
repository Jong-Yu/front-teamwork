import { useSetAtom } from 'jotai';
import { openAtom } from '../../create/TeamCreateModal.atom';

export function useFixedCreateButton() {
  // atom
  const setOpen = useSetAtom(openAtom);

  // handler
  const onClickCreateButton = () => {
    setOpen(true);
  };

  return {
    onClickCreateButton,
  };
}
