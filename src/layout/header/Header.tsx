import { Logo } from './components/Logo';
import { DeskTop } from './components/DeskTop';
import { Mobile } from './components/Mobile';
import { useResponsive } from '../../_shared/hooks/Responsive/Responsive.hooks';
import { Container } from '../../_shared/ui/Container/Container';

export const Header = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <nav className="navbar">
      <Container>
        <div className="container--inner navbar__container--inner">
          {/* 공통으로 나와야 하는 로고는 따로 빼서 선언 */}
          <Logo />
          {/* 모바일일 경우 모바일 Header */}
          {isMobile && <Mobile />}
          {/* 데스크탑일 경우 데스크탑 Header */}
          {isDesktop && <DeskTop />}
        </div>
      </Container>
    </nav>
  );
};
