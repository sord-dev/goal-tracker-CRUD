import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Tracker/components/NavBar";
import Tracker from "./Pages/Tracker/Tracker";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Tracker />

      <Outlet />
    </div>
  );
}

export default App;
