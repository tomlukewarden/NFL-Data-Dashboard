
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDash from "./src/pages/mainDash";
import Teams from "./src/pages/teams";
import Players from "./src/pages/players";
import Stats from "./src/pages/stats";
import ChatDash from "./src/pages/chatDash";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDash />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/chat" element={<ChatDash />} />
      </Routes>
    </Router>
  );
}

export default App;
