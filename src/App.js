import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";


function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1440,
      
      },
    },
    palette: {
    
      secondary: {
        main: '#f44336',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
