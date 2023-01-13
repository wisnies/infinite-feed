import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { RouteViews } from './components/RouteViews/RouteViews';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { UiContextProvider } from './context/uiContext';

import { queryClient } from './libs/client';

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UiContextProvider>
        <Router>
          <ScrollToTop />
          <ScrollToTopBtn />
          <Header />
          <RouteViews />
          <Footer />
        </Router>
        {process.env.RQ_DEVTOOLS === 'open' && (
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        )}
      </UiContextProvider>
    </QueryClientProvider>
  );
};
