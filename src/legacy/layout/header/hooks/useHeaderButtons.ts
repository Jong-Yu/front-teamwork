import { useEffect, useState } from 'react';
import { useIsValid_Mutate } from '../../../_query/auth/authQuery';

export function useHeaderButtons() {
  // state
  const [isValied, setIsValied] = useState<boolean>(false);

  // hooks
  const { mutateAsync: findIsValied } = useIsValid_Mutate();

  useEffect(() => {
    getIsValied();
  }, []);

  // function
  const getIsValied = async () => {
    const valied = await findIsValied();

    setIsValied(valied);
  };

  return {
    isValied,
  };
}
