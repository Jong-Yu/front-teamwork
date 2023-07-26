import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const AppLayout = () => {
  return (
    <div className="app_layout">
      <Header />
      <main
        css={{
          paddingTop: '60px',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};