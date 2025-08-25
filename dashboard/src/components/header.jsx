export default function Header() {
  return (
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-info mb-3">NFL Data Dashboard</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded shadow-sm w-100">
          <ul className="navbar-nav mx-auto flex-row gap-3">
            <li className="nav-item"><a className="nav-link active text-info" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="/teams">Teams</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="/players">Players</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="/stats">Stats</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="/chat">Prediction Chatbot</a></li>
          </ul>
        </nav>
      </header>
  );
}
