import { useState } from "react";
import {
  Home,
  MessageCircle,
  User,
  Plus,
  Search,
  MapPin,
  Clock3,
  Newspaper,
  Smile,
} from "lucide-react";
import "./styles.css";

type Tab = "feed" | "messages" | "profile";

const reactions = ["❤️", "😂", "😮", "😢", "😡", "🖕"];

export default function App() {
  const [tab, setTab] = useState<Tab>("feed");
  const [showComposer, setShowComposer] = useState(false);
  const [reaction, setReaction] = useState<string | null>(null);

  const hour = new Date().getHours();

  const greeting =
    hour >= 5 && hour < 12
      ? "Bom dia"
      : hour >= 12 && hour < 18
        ? "Boa tarde"
        : "Boa noite";

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="brand">CHOCCO</div>
          <div className="location">
            <MapPin size={14} />
            São Miguel das Matas
          </div>
        </div>

        <button className="drop-button">
          <Search size={20} />
        </button>
      </header>

      {tab === "feed" && (
        <main className="content">
          <section className="day-card">
            <div className="day-info">
              <Clock3 size={18} />
              <strong>{greeting}</strong>
            </div>

            <span className="temperature">24°</span>
          </section>

          <section className="news-card">
            <div className="news-title">
              <Newspaper size={18} />
              <span>Principais notícias</span>
            </div>

            <h2>O mundo agora</h2>
            <p>
              Notícias importantes do momento, apresentadas de forma simples
              para você acompanhar rapidamente.
            </p>
          </section>

          <section className="request-card">
            <MessageCircle size={18} />
            <div>
              <strong>Novas solicitações</strong>
              <span>Você não possui novas solicitações.</span>
            </div>
          </section>

          <article className="post">
            <div className="post-header">
              <div className="avatar">C</div>

              <div>
                <strong>@chocco</strong>
                <span>São Miguel das Matas</span>
              </div>
            </div>

            <p className="post-text">
              Bem-vindo ao CHOCCO. Uma rede social feita para conversar,
              compartilhar e reagir.
            </p>

            <div className="reaction-row">
              {reactions.map((emoji) => (
                <button
                  key={emoji}
                  className={reaction === emoji ? "reaction active" : "reaction"}
                  onClick={() => setReaction(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </article>
        </main>
      )}

      {tab === "messages" && (
        <main className="content empty-page">
          <MessageCircle size={42} />
          <h2>Mensagens</h2>
          <p>
            Suas conversas aparecerão aqui depois que uma solicitação for
            aceita.
          </p>
        </main>
      )}

      {tab === "profile" && (
        <main className="content profile-page">
          <div className="profile-avatar">K</div>
          <h2>@kaique</h2>
          <span>São Miguel das Matas</span>

          <div className="bio">
            Sua bio aparecerá aqui.
          </div>
        </main>
      )}

      {showComposer && (
        <div className="composer-overlay">
          <div className="composer">
            <button
              className="close-button"
              onClick={() => setShowComposer(false)}
            >
              ×
            </button>

            <h2>Nova publicação</h2>

            <textarea placeholder="O que está acontecendo?" />

            <button
              className="publish-button"
              onClick={() => setShowComposer(false)}
            >
              Publicar
            </button>
          </div>
        </div>
      )}

      <button
        className="new-post drop-button"
        onClick={() => setShowComposer(true)}
      >
        <Plus size={24} />
      </button>

      <nav className="bottom-nav">
        <button
          className={tab === "feed" ? "nav-item active" : "nav-item"}
          onClick={() => setTab("feed")}
        >
          <Home size={21} />
          <span>Início</span>
        </button>

        <button
          className={tab === "messages" ? "nav-item active" : "nav-item"}
          onClick={() => setTab("messages")}
        >
          <MessageCircle size={21} />
          <span>Mensagens</span>
        </button>

        <button
          className={tab === "profile" ? "nav-item active" : "nav-item"}
          onClick={() => setTab("profile")}
        >
          <User size={21} />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
}