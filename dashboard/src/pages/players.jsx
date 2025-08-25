import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "../styles/players.css";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/json/players.json")
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <h2 className="dashboard-title">NFL Players</h2>
        <div className="player-cards">
          {players.filter(player => {
            const isRetired = player.Status && player.Status.toLowerCase() === "retired";
            const hasTeam = player["Current Team"] && player["Current Team"].trim() !== "";
            return !isRetired && hasTeam;
          })
            .map(player => (
              <div className="player-card" key={player.Name}>
                <img
                  src={player.avatar || "https://via.placeholder.com/80"}
                  alt={player.Name + " avatar"}
                  className="player-avatar"
                />
                <div className="player-info">
                  <h3 className="player-name">{player.Name}</h3>
                  <p className="player-meta"><strong>Current Team:</strong> {player["Current Team"] || "N/A"}</p>
                  <p className="player-meta"><strong>College:</strong> {player.College || "N/A"}</p>
                  <p className="player-meta"><strong>Birth Place:</strong> {player["Birth Place"] || "N/A"}</p>
                  <p className="player-meta"><strong>Number:</strong> {player.Number || "N/A"}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
