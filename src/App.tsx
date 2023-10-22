import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from 'src/components/layout/Layout';
import ProgressBar from '@badrap/bar-of-progress';
import { QueryClientProvider, QueryClient } from 'react-query';

//pages
import Home from './pages/home/Home';
import PropertyDetails from './pages/details/PropertyDetails';
import Search from './pages/search/Search';
import AboutUs from './pages/aboutUs/AboutUs';
import NotFound from './pages/404/NotFound';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100
});

const queryClient = new QueryClient();

function App() {

  const location = useLocation();

  useEffect(() => {
    progress.start();

    setTimeout(() => {
      progress.finish();
    }, 1000);
  }, [location])

  return (<>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
          <Route path='/search' element={<Search />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/page-not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to={'/page-not-found'} replace />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </>)
}

export default App;
