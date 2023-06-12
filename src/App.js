import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { RootStyle } from "./styles/RootStyles";

import { AppProvider } from "./hooks/AppContext";

import { MainContainer } from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import ModuleChanger from "./containers/ModuleChanger/ModuleChanger";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <RootStyle />
      <AppProvider>
        <MainContainer>
          <Header />
          <ModuleChanger />
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
