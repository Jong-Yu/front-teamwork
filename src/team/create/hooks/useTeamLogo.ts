import { useAtom } from 'jotai';
import { logoAtom, logoErrorAtom } from '../TeamCreateModal.atom';
import { useEffect, useRef } from 'react';

export function useTeamLogo() {
  // ref
  const ref = useRef<HTMLInputElement>(null);

  // atom
  const [logo, setLogo] = useAtom(logoAtom);
  const [error, setError] = useAtom(logoErrorAtom);

  // handlers
  const onChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(e.target.value);
    if (error) setError(false);
  };

  useEffect(() => {
    if (error) {
      ref.current?.focus();
    }
  }, [error]);

  return {
    ref,
    logo,
    error,
    onChangeLogo,
  };
}
