import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Performance from "./components/performanceAssessment";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import GlobalStyle from "./style/globalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
     <Performance/>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
