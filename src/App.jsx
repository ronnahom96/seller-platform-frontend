import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
