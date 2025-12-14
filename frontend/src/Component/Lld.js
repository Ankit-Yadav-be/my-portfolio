import React from "react";

const Lld = () => {
  /**
   * 🔑 LLD LEARNING DATA
   * Add new topics here daily (OOPs, Design Patterns, Case Studies)
   * UI will automatically scale
   */
  const lldTopics = [
    {
      date: "2025-12-14",
      title: "Java OOPs – Foundation for LLD",
      description:
        "Deep dive into Object-Oriented Programming concepts and how they form the base of Low Level Design.",
      topics: [
        "Classes & Objects",
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "SOLID Principles",
      ],
      status: "Completed",
      link: "/system-design/lld/oops",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#f8fafc",
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
      color: "#64748b",
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
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "28px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    meta: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "14px",
      color: "#64748b",
    },
    status: {
      fontWeight: 600,
      color: "#16a34a",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      color: "#475569",
      lineHeight: 1.6,
      marginBottom: "14px",
    },
    topicList: {
      paddingLeft: "18px",
      marginBottom: "16px",
    },
    topicItem: {
      fontSize: "15px",
      marginBottom: "6px",
    },
    link: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#2563eb",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Low Level Design (LLD)</h1>
        <p style={styles.subtitle}>
          This section documents my Low Level Design journey. It focuses on
          class-level design, object relationships, SOLID principles, and
          Java-based implementation thinking.
        </p>
      </div>

      {/* LLD Learning Cards */}
      <div style={styles.container}>
        {lldTopics.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.meta}>
              <span>{item.date}</span>
              <span style={styles.status}>{item.status}</span>
            </div>

            <div style={styles.cardTitle}>{item.title}</div>
            <div style={styles.description}>{item.description}</div>

            <ul style={styles.topicList}>
              {item.topics.map((topic, i) => (
                <li key={i} style={styles.topicItem}>
                  {topic}
                </li>
              ))}
            </ul>

            <a href={item.link} style={styles.link}>
              View detailed notes →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lld;
