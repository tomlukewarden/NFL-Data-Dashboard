import Header from "../components/header";
export default function Players() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="player-list">
          <h2 className="dashboard-title">All NFL Players</h2>
          <ul className="player-list-items">
            <li className="player-list-item">Player A</li>
            <li className="player-list-item">Player B</li>
            <li className="player-list-item">Player C</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
