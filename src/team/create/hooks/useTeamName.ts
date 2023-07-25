import { useAtom } from 'jotai';
import { nameAtom, nameErrorAtom } from '../TeamCreateModal.atom';
import { useEffect, useRef } from 'react';

export function useTeamName() {
  // ref
  const ref = useRef<HTMLInputElement>(null);

  // atom
  const [name, setName] = useAtom(nameAtom);
  const [error, setError] = useAtom(nameErrorAtom);

  // handlers
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error) setError(false);
  };

  useEffect(() => {
    if (error) {
      ref.current?.focus();
    }
  }, [error]);

  return {
    ref,
    name,
    error,
    onChangeName,
  };
}
