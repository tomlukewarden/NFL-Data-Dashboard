
export default function MainDash() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-primary mb-3">NFL Data Dashboard</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded shadow-sm w-100">
          <ul className="navbar-nav mx-auto flex-row gap-3">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Teams</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Players</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Stats</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Prediction Chatbot</a></li>
          </ul>
        </nav>
      </header>

      <main className="bg-white rounded shadow-sm p-4">
        <h2 className="h3 mb-3">Welcome to the NFL Data Dashboard</h2>
        <p className="lead">Here you can find all the latest NFL data and statistics.</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">Use the navigation above to explore different sections.</li>
          <li className="list-group-item">Get insights, compare teams, and analyze player performance.</li>
          <li className="list-group-item">Stay updated with the latest NFL news and trends.</li>
          <li className="list-group-item">Join the conversation in our Prediction Chatbot!</li>
        </ul>
      </main>
    </div>
  );
}
