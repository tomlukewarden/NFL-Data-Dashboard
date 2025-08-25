import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">NFL Data Dashboard</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a className="header-nav-link" href="/">Home</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="/teams">Teams</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="/players">Players</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="/stats">Stats</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="/chat">Prediction Chatbot</a></li>
        </ul>
      </nav>
    </header>
  );
}
