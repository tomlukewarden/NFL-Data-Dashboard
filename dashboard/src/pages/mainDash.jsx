 import React from "react"; 
  import Header from "../components/header";
  import '../styles/mainDash.css';
  export default function MainDash() {

  const funFacts = [
    "The NFL was founded in 1920 as the American Professional Football Association.",
    "The Green Bay Packers are the only non-profit, community-owned major league professional sports team in the US.",
    "Tom Brady has won more Super Bowls than any other player in NFL history.",
    "The longest field goal in NFL history is 66 yards, kicked by Justin Tucker in 2021.",
    "The Dallas Cowboys are the most valuable sports team in the world."
  ];

  const randomStats = [
    "Most points scored in a single game: 72 (Washington, 1966)",
    "Most career passing yards: 89,214 (Tom Brady)",
    "Most career rushing yards: 18,355 (Emmitt Smith)",
    "Most career receiving yards: 22,895 (Jerry Rice)",
    "Most consecutive games won: 21 (New England Patriots)"
  ];

  const [factIdx, setFactIdx] = React.useState(0);
  const [statIdx, setStatIdx] = React.useState(0);

  function refreshInfo() {
    setFactIdx(Math.floor(Math.random() * funFacts.length));
    setStatIdx(Math.floor(Math.random() * randomStats.length));
  }

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="front-info">
          <h2 className="dashboard-title">Welcome to the NFL Data Dashboard</h2>
          <div className="interactive-info">
            <div className="info-block">
              <h3 className="info-heading">NFL Fun Fact</h3>
              <p className="info-text">{funFacts[factIdx]}</p>
            </div>
            <div className="info-block">
              <h3 className="info-heading">Random NFL Stat</h3>
              <p className="info-text">{randomStats[statIdx]}</p>
            </div>
            <button className="refresh-btn" onClick={refreshInfo}>Show Me Something New</button>
          </div>
        </div>
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
