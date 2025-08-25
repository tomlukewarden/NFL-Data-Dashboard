export default function Stats() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-info mb-3">NFL Stats</h1>
      </header>

      <main className="bg-secondary rounded shadow-sm p-4">
        <div className="stats-overview">
          <h2 className="h3 mb-3 text-light">Season Stats Overview</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item bg-dark text-light">Total Games: 256</li>
            <li className="list-group-item bg-dark text-light">Average Points per Game: 24.5</li>
            <li className="list-group-item bg-dark text-light">Total Touchdowns: 1,200</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
