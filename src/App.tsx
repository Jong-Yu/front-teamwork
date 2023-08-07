import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppRoutes } from './AppRoutes';
import { initApp } from './App.util';

const client = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  initApp();

  return (
    <QueryClientProvider client={client}>
      <div id="header" />
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
