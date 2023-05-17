import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./components/login";
import Signup from "./components/signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Signup />
    </QueryClientProvider>
  );
}

export default App;
