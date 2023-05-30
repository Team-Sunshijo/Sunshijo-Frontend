import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PlanWriting from "./components/planWriting";
import GlobalStyle from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <PlanWriting />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
