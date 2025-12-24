import React from "react";
import { useNavigate } from "react-router-dom";

const Lld = () => {
  const navigate = useNavigate();

  /**
   * 🔑 LLD DAILY LEARNING INDEX
   * Only MAIN TOPICS here
   * Detailed explanation lives on separate pages
   */
  const lldTopics = [
    {
      date: "2025-12-14",
      title: "OOPs Concepts (Foundation of LLD)",
      shortNote:
        "Learned core OOPs concepts that form the base of Low Level Design and clean class-level architecture.",
      subTopics: [
        "Classes & Objects",
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "SOLID Principles",
      ],
      status: "Completed",
      route: "/system-design/lld/oops",
    },
    {
      date: "2025-12-15",
      title: "UML Diagrams (LLD Basics)",
      shortNote:
        "Understood how UML diagrams help in visualizing low level design using class and sequence diagrams.",
      subTopics: [
        "What is UML",
        "Class Diagram",
        "Sequence Diagram",
        "Associations (IS-A / HAS-A)",
      ],
      status: "Completed",
      route: "/system-design/lld/uml",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#1e1e2f",
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
      color: "#a1a1b5",
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
      backgroundColor: "#2c2c3e",
      borderRadius: "18px",
      padding: "28px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    },
    meta: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#a1a1b5",
      marginBottom: "12px",
    },
    status: {
      color: "#22c55e",
      fontWeight: 600,
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#f0f0f0",
      cursor: "pointer",
    },
    description: {
      fontSize: "16px",
      color: "#c0c0d0",
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
      backgroundColor: "#00ffcc",
      color: "#0f172a",
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
        <h1 style={styles.title}>Low Level Design (LLD)</h1>
        <p style={styles.subtitle}>
          Daily learning log for Low Level Design. Each topic links to detailed
          notes with diagrams, explanations, and Java-based implementation.
        </p>
      </div>

      {/* Topic Cards */}
      <div style={styles.container}>
        {lldTopics.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.meta}>
              <span>{item.date}</span>
              <span style={styles.status}>{item.status}</span>
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

export default Lld;
