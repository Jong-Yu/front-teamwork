import { useMediaQuery } from 'react-responsive';
import { Logo } from './components/Logo';
import { DeskTop } from './components/DeskTop';
import { Mobile } from './components/Mobile';

export const Header = () => {
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:639px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width:640px)',
  });

  return (
    <nav className="header nav">
      <div className="inner_container">
        <Logo />
        {isMobile && <Mobile />}
        {isDesktop && <DeskTop />}
      </div>
    </nav>
  );
};
