export default function Teams() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-info mb-3">NFL Teams</h1>
      </header>

      <main className="bg-secondary rounded shadow-sm p-4">
        <div className="team-list">
          <h2 className="h3 mb-3 text-light">All NFL Teams</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item bg-dark text-light">Team A</li>
            <li className="list-group-item bg-dark text-light">Team B</li>
            <li className="list-group-item bg-dark text-light">Team C</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
