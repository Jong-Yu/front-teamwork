import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './AppRoutes';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
