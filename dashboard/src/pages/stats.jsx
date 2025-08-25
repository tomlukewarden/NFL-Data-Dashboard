  import Header from "../components/header";
  export default function Stats() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="stats-overview">
          <h2 className="dashboard-title">Season Stats Overview</h2>
          <ul className="stats-list">
            <li className="stats-list-item">Total Games: 256</li>
            <li className="stats-list-item">Average Points per Game: 24.5</li>
            <li className="stats-list-item">Total Touchdowns: 1,200</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
