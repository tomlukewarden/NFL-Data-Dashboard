 export default function MainDash() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-info mb-3">NFL Data Dashboard</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded shadow-sm w-100">
          <ul className="navbar-nav mx-auto flex-row gap-3">
            <li className="nav-item"><a className="nav-link active text-info" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="#">Teams</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="#">Players</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="#">Stats</a></li>
            <li className="nav-item"><a className="nav-link text-info" href="#">Prediction Chatbot</a></li>
          </ul>
        </nav>
      </header>

      <main className="bg-secondary rounded shadow-sm p-4">
       <div className="news">
         <h2 className="h3 mb-3 text-light">Latest NFL News</h2>
         <ul className="list-group list-group-flush mb-3">
           <li className="list-group-item bg-dark text-light">Team A signs new quarterback</li>
           <li className="list-group-item bg-dark text-light">Player B breaks rushing record</li>
           <li className="list-group-item bg-dark text-light">Coach C comments on upcoming season</li>
         </ul>
       </div>
      </main>
    </div>
  );
}
