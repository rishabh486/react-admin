import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import DashBoard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import SidebarC from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Pie from "./scenes/pie";
// import Invoice from "./scenes/invoice";
// import Team from "./scenes/team";
import Line from "./scenes/line";
// import Sidebar from "./scenes/global/Sidebar";
// import Sidebar from "./scenes/global/Sidebar";
// import Sidebar from "./scenes/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarC isSideBar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />

              <Route path="/contacts" element={<Contacts />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
