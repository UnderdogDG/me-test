import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { RootStyle } from "./styles/RootStyles";

import { AppProvider } from "./hooks/AppContext";

import { MainContainer } from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <RootStyle />
      <AppProvider>
        <MainContainer>
          
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
