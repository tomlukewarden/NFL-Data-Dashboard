  import Header from "../components/header";
  export default function Teams() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="team-list">
          <h2 className="dashboard-title">All NFL Teams</h2>
          <ul className="team-list-items">
            <li className="team-list-item">Team A</li>
            <li className="team-list-item">Team B</li>
            <li className="team-list-item">Team C</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
