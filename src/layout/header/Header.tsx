import { Logo } from './components/Logo';
import { DeskTop } from './components/DeskTop';
import { Mobile } from './components/Mobile';
import { useResponsive } from '../../shared/hooks/Responsive/Responsive.hooks';

export const Header = () => {
  const { isMobile, isDesktop } = useResponsive();

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
