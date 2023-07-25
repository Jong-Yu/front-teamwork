import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { openAtom, resetAtom } from '../ScheduleCreateModal.atom';

export function useScheduleCreateModal() {
  // state
  const [step, setStep] = useState<number>(1);

  // atom
  const [open, setOpen] = useAtom(openAtom);

  const reset = useSetAtom(resetAtom);

  // query

  const onClose = () => {
    reset();
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onNext = () => {
    setStep(prev => prev + 1);
  };

  const onPrev = () => {
    setStep(prev => prev - 1);
  };

  return {
    open,
    step,
    onOpen,
    onClose,
    onNext,
    onPrev,
  };
}
