import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MainContainer } from "./styles/common.styled";
import GlobalStyle from "./styles/global.styled";

function App() {
  const theme = {
    theme: "#FFBF23",
    primaryBg: "white",
    secondaryBg: "#F6F5F5",
    primaryText: "#000000",
    secondaryText: "#919191",
    pink: "#FFD7EF",
    red: "#FE393C",
    blue: "#91BFE8",
    green: "#0CCA8F",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
         <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/test" element={<Home />} />

            {/* <Route path="*" element={<Error/>}/> */}
          </Routes>
        </BrowserRouter>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
