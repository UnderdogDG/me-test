import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { RootStyle } from "./styles/RootStyles";

import { AppProvider } from "./hooks/AppContext";

import { MainContainer } from "./containers/MainContainer/MainContainer";
import NavContainer from "./containers/NavContainer/NavContainer";
import SelectorBar from "./components/SelectorBar/Selector";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <RootStyle />
      <AppProvider>
        <MainContainer>
          <NavContainer>
            <SelectorBar />
          </NavContainer>
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
