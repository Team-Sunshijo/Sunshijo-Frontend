import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./components/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}

export default App;
