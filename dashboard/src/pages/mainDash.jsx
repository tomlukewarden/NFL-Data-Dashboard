  import Header from "../components/header";
  export default function MainDash() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="news">
          <h2 className="dashboard-title">Latest NFL News</h2>
          <ul className="news-list">
            <li className="news-item">Team A signs new quarterback</li>
            <li className="news-item">Player B breaks rushing record</li>
            <li className="news-item">Coach C comments on upcoming season</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
