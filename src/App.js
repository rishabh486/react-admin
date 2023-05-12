import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import DashBoard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import SidebarC from "./scenes/global/Sidebar";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoice from "./scenes/invoice";
// import Team from "./scenes/team";
// import Bar from "./scenes/bar";
// import Sidebar from "./scenes/global/Sidebar";
// import Sidebar from "./scenes/global/Sidebar";
// import Sidebar from "./scenes/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarC />
          <main className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<DashBoard />} />
              {/* <Route path="/team" element ={<Team/>}/>
              <Route path="/bar" element ={<Bar/>}/>
              <Route path="/contacts" element ={<Contacts/>}/>
              <Route path="/invoice" element ={<Invoice/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
