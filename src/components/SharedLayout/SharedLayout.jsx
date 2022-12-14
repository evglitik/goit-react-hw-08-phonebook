import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'Box';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loader))))))))))</div>}>
        <Box p={4} as="main" mt={5}>
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
};

export default SharedLayout;
