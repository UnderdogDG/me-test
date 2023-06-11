import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { RootStyle } from "./styles/RootStyles";

import { AppProvider } from "./hooks/AppContext";

import { MainContainer } from "./containers/MainContainer/MainContainer";
import NavContainer from "./containers/NavContainer/NavContainer";
import SelectorBar from "./components/SelectorBar/SelectorBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <RootStyle />
      <AppProvider>
        <MainContainer>
          <Header />
          <NavContainer>
            <SelectorBar />
            <SearchBar />
          </NavContainer>
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
