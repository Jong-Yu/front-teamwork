import { useAtom } from 'jotai';
import { descAtom, descErrorAtom } from '../TeamCreateModal.atom';
import { useEffect, useRef } from 'react';

export function useTeamDesc() {
  // ref
  const ref = useRef<HTMLTextAreaElement>(null);

  // atom
  const [desc, setDesc] = useAtom(descAtom);
  const [error, setError] = useAtom(descErrorAtom);

  // handler
  const onChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
    if (error) setError(false);
  };

  useEffect(() => {}, [error]);

  return {
    ref,
    desc,
    error,
    onChangeDesc,
  };
}
