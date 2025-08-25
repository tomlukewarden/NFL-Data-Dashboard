import Header from "../components/header";
export default function Players() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
      <Header />
      <main className="bg-secondary rounded shadow-sm p-4">
        <div className="player-list">
          <h2 className="h3 mb-3 text-light">Top NFL Players</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item bg-dark text-light">Player 1 - Team A</li>
            <li className="list-group-item bg-dark text-light">Player 2 - Team B</li>
            <li className="list-group-item bg-dark text-light">Player 3 - Team C</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
