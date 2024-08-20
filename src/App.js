import './App.css';
import OrdersTable from './OrdersTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>      
      <OrdersTable />
    </QueryClientProvider>
  );
}

export default App;
