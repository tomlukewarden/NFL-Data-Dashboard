import "../styles/chat.css";
import Header from "../components/header";
export default function ChatDash() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-main">
        <div className="chat-interface">
          <div className="chat-window">
            {/* Chat messages will appear here */}
          </div>
          <div className="chat-input-group">
            <input type="text" className="chat-input" placeholder="Ask a question..." />
            <button className="chat-send-btn">Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}
