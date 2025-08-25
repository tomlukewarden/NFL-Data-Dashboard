export default function ChatDash() {
  return (
    <div className="container py-4 bg-dark text-light min-vh-100">
      <header className="d-flex flex-column align-items-center mb-4">
        <h1 className="display-4 fw-bold text-info mb-3">NFL Prediction Chatbot</h1>
      </header>

      <main className="bg-secondary rounded shadow-sm p-4">
        <div className="chat-interface">
          <h2 className="h3 mb-3 text-light">Talk to the Bot</h2>
          <div className="chat-window">
            {/* Chat messages will appear here */}
          </div>
          <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Ask a question..." />
            <button className="btn btn-info">Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}
