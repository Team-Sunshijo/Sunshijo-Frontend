import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PerformancePage from "./pages/PerformancePage";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <PerformancePage/>
    </QueryClientProvider>
  );
}

export default App;
