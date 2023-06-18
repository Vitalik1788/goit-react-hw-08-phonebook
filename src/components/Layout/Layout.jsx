import { Suspense } from 'react';
import { HeaderList, LinkStyle, RegContainer } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Spiner from 'components/Spinner/Spinner';
import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
     <AppBar />
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
