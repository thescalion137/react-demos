import logo from "./logo.svg";
import "./App.css";
import Navigation from "./routes";

import { createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme();
  return (
    <div theme={theme}>

      <Navigation />
    </div>
  );
}

export default App;
