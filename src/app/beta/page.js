import { ChatBotGemini } from "../_components/chatbot-gemini";
import styles from "./page.module.css";

export default function Beta() {
  return (
    <main className={styles.contact}>
      <p className="page-heading">Beta</p>
      <div className={`${styles.card} metal-card`}>
        <div className={styles.logo}></div>
        <div className="text-shadow">
          <h1>This page is set up for testing purposes.</h1>
        </div>
      </div>

      <ChatBotGemini />
    </main>
  );
}
