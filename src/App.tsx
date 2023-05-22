import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./components/Login";
import Signup from "./components/Signup/index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Signup />
    </QueryClientProvider>
  );
}

export default App;
