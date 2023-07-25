import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  descAtom,
  descErrorAtom,
  logoAtom,
  logoErrorAtom,
  nameAtom,
  nameErrorAtom,
  openAtom,
  resetAtom,
} from '../TeamCreateModal.atom';
import { useState } from 'react';
import { useTeamCreate_Mutate } from '../../../_query/team/TeamQuerys';

export function useTeamCreateModal() {
  // state
  const [step, setStep] = useState<number>(1);

  // atom
  const [open, setOpen] = useAtom(openAtom);
  const name = useAtomValue(nameAtom);
  const logo = useAtomValue(logoAtom);
  const desc = useAtomValue(descAtom);

  const setNameError = useSetAtom(nameErrorAtom);
  const setLogoError = useSetAtom(logoErrorAtom);
  const setDescError = useSetAtom(descErrorAtom);

  const reset = useSetAtom(resetAtom);

  // query
  const { mutateAsync: createTeam } = useTeamCreate_Mutate();

  const onClose = () => {
    reset();
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onNext = () => {
    if (step === 1 && name === '') {
      setNameError(true);
      return;
    }

    if (step === 2 && logo === '') {
      setLogoError(true);
      return;
    }

    if (step === 3 && desc === '') {
      setDescError(true);
      return;
    }

    setStep(prev => prev + 1);
  };

  const onPrev = () => {
    setStep(prev => prev - 1);
  };

  const onCreate = async () => {
    await createTeam({
      name,
      logo,
      desc,
    });
  };

  return {
    open,
    step,
    name,
    onOpen,
    onClose,
    onNext,
    onPrev,
    onCreate,
  };
}
