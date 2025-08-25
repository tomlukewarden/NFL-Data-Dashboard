import Header from "../components/header";
import "../styles/teams.css";
export default function Teams() {
    const teams = [
      {
        name: "Team A",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/NFL_logos.svg", // placeholder
        standing: 1
      },
      {
        name: "Team B",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/NFL_logos.svg",
        standing: 2
      },
      {
        name: "Team C",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/NFL_logos.svg",
        standing: 3
      }
    ];

    return (
      <div className="dashboard-container">
        <Header />
        <main className="dashboard-main">
          <h2 className="dashboard-title">NFL League Standings</h2>
          <div className="team-cards">
            {teams.map(team => (
              <div className="team-card" key={team.name}>
                <img src={team.logo} alt={team.name + ' logo'} className="team-logo" />
                <div className="team-info">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-standing">Standing: {team.standing}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
}
