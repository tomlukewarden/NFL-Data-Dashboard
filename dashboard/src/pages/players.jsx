import Header from "../components/header";
import "../styles/players.css";
export default function Players() {
    // Example player data
    const players = [
      {
        name: "Patrick Mahomes",
        position: "QB",
      team: "Chiefs",
      avatar: "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png"
    },
    {
      name: "Josh Allen",
      position: "QB",
      team: "Bills",
      avatar: "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png"
    },
    {
      name: "Derrick Henry",
      position: "RB",
      team: "Titans",
      avatar: "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png"
    }
  ];

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <h2 className="dashboard-title">NFL Players</h2>
        <div className="player-cards">
          {players.map(player => (
            <div className="player-card" key={player.name}>
              <img src={player.avatar} alt={player.name + ' avatar'} className="player-avatar" />
              <div className="player-info">
                <h3 className="player-name">{player.name}</h3>
                <p className="player-meta">{player.position} - {player.team}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
