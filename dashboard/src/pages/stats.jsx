import Header from "../components/header";  
import "../styles/stats.css";
  export default function Stats() {
    // Example comprehensive NFL stats
    const stats = [
      { label: "Total Games", value: "256" },
      { label: "Average Points per Game", value: "24.5" },
      { label: "Total Touchdowns", value: "1,200" },
      { label: "MVP", value: "Patrick Mahomes" },
      { label: "Passing Yards Leader", value: "Josh Allen - 4,800 yards" },
      { label: "Rushing Yards Leader", value: "Derrick Henry - 2,000 yards" },
      { label: "Receiving Yards Leader", value: "Justin Jefferson - 1,800 yards" },
      { label: "League Standings", value: "1. Chiefs, 2. Eagles, 3. 49ers, 4. Bills" },
      { label: "Super Bowl Winner", value: "Kansas City Chiefs" },
      { label: "Playoff Teams", value: "Chiefs, Eagles, 49ers, Bills, Bengals, Cowboys, Ravens, Dolphins" },
    ];

    return (
      <div className="dashboard-container">
        <Header />
        <main className="dashboard-main">
          <div className="stats-overview">
            <h2 className="dashboard-title">Comprehensive NFL Season Stats</h2>
            <ul className="stats-list">
              {stats.map((stat, idx) => (
                <li className="stats-list-item" key={idx}>
                  <span className="stats-label">{stat.label}:</span> <span className="stats-value">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    );
  }
