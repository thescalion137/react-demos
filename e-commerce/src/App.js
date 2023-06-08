import axios from "axios";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import RootNavigator from "./Components/navigation";
import store from "./Components/redux/store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
