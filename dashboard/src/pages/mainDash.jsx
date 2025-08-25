import Header from "../components/header";
export default function MainDash() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
        <Header />

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
