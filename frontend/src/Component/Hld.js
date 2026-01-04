import React from "react";
import { useNavigate } from "react-router-dom";

const Hld = () => {
  const navigate = useNavigate();

  /**
   * 🔑 HLD DAILY LEARNING INDEX
   * Only MAIN HLD TOPICS here
   * Detailed explanations live on separate pages
   */
  const hldTopics = [
    {
      date: "2026-01-04",
      title: "Network Protocols (Foundation of HLD)",
      shortNote:
        "Studied how distributed systems communicate over networks, including application-layer models and transport-layer protocols.",
      subTopics: [
        "Client–Server vs Peer-to-Peer Model",
        "HTTP, FTP, SMTP, IMAP, POP",
        "WebSockets (Bidirectional Communication)",
        "WebRTC (Real-Time P2P Communication)",
        "TCP vs UDP (Transport Layer)",
      ],
      status: "Completed",
      route: "/system-design/hld/network-protocols",
    },
    {
      date: "2026-01-05",
      title: "CAP Theorem (Distributed Systems Core)",
      shortNote:
        "Learned trade-offs between Consistency, Availability, and Partition Tolerance with real-world system examples.",
      subTopics: [
        "Consistency vs Availability",
        "Partition Tolerance",
        "CP vs AP vs CA Systems",
        "Eventual Consistency",
        "Real-world Database Examples",
      ],
      status: "Completed",
      route: "/system-design/hld/cap-theorem",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#0f172a",
      color: "#ffffff",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },
    header: {
      maxWidth: "900px",
      margin: "0 auto 50px",
    },
    title: {
      fontSize: "42px",
      fontWeight: 700,
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#94a3b8",
      lineHeight: 1.6,
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    card: {
      backgroundColor: "#1e293b",
      borderRadius: "18px",
      padding: "28px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
    },
    meta: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#94a3b8",
      marginBottom: "12px",
    },
    statusCompleted: {
      color: "#22c55e",
      fontWeight: 600,
    },
    statusPlanned: {
      color: "#facc15",
      fontWeight: 600,
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#f8fafc",
      cursor: "pointer",
    },
    description: {
      fontSize: "16px",
      color: "#cbd5f5",
      lineHeight: 1.6,
      marginBottom: "14px",
    },
    topicList: {
      paddingLeft: "18px",
      marginBottom: "18px",
    },
    topicItem: {
      fontSize: "15px",
      marginBottom: "6px",
      color: "#e5e7eb",
    },
    button: {
      backgroundColor: "#38bdf8",
      color: "#020617",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>High Level Design (HLD)</h1>
        <p style={styles.subtitle}>
          Structured learning log for High Level Design. Each topic focuses on
          architecture decisions, trade-offs, and real-world system design.
        </p>
      </div>

      {/* Topic Cards */}
      <div style={styles.container}>
        {hldTopics.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.meta}>
              <span>{item.date}</span>
              <span
                style={
                  item.status === "Completed"
                    ? styles.statusCompleted
                    : styles.statusPlanned
                }
              >
                {item.status}
              </span>
            </div>

            <div
              style={styles.cardTitle}
              onClick={() => navigate(item.route)}
            >
              {item.title}
            </div>

            <div style={styles.description}>{item.shortNote}</div>

            <ul style={styles.topicList}>
              {item.subTopics.map((topic, i) => (
                <li key={i} style={styles.topicItem}>
                  {topic}
                </li>
              ))}
            </ul>

            <button
              style={styles.button}
              onClick={() => navigate(item.route)}
            >
              View detailed notes →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hld;
