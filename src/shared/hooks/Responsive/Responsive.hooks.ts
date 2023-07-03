import { useMediaQuery } from 'react-responsive';

export function useResponsive() {
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:639px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width:640px)',
  });

  return {
    isMobile,
    isDesktop,
  };
}
