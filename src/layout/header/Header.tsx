import { useMediaQuery } from 'react-responsive';
import { Logo } from './components/Logo';

export const Header = () => {
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:639px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width:640px) and (max-width:1023px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return (
    <nav className="header nav">
      <div className="inner_container">
        <Logo />

        {isMobile && <>모바일 Header</>}
        {isTablet && <>테블릿 Header</>}
        {isDesktop && <>데스크탑 Header</>}
      </div>
    </nav>
  );
};
