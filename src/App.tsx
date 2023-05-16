import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./components/Login";
import Signup from "./components/Signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}

export default App;
