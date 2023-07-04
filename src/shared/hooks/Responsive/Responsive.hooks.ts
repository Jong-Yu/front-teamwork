import { useMediaQuery } from 'react-responsive';

const MOBILE_WIDTH = 640;
// const DESKTOP_WIDTH = 1024;

const MOBILE_MEIDA_QUERY = `(min-width:0px) and (max-width:${MOBILE_WIDTH}px)`;
const DESKTOP_MEIDA_QUERY = `(min-width:${MOBILE_WIDTH}px)`;

export const MOBILE_MEDIA = `@media ${MOBILE_MEIDA_QUERY}`;
export const DESKTOP_MEDIA = `@media ${DESKTOP_MEIDA_QUERY}`;

export function useResponsive() {
  const isMobile = useMediaQuery({
    query: MOBILE_MEIDA_QUERY,
  });

  const isDesktop = useMediaQuery({
    query: DESKTOP_MEIDA_QUERY,
  });

  return {
    isMobile,
    isDesktop,
  };
}
