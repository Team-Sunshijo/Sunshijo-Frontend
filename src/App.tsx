import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Performance from "./components/performanCreate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <Performance/>
    </QueryClientProvider>
  );
}

export default App;
