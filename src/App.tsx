import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import GlobalStyle from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import GlobalStyle from "./style/globalStyle";
import Router from "./Router";


const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
