import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import { Header, Main } from './Layout.styled';
import { Circles } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense
            fallback={
              <Circles
                height="80"
                width="80"
                color="#b8860b"
                ariaLabel="circles-loading"
                wrapperStyle={{
                  justifyContent: 'center',
                }}
                wrapperClass=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
