import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const SystemDesign = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#1e1e2f",
      padding: "40px 20px",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      color: "#ffffff",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    title: {
      fontSize: "48px",
      fontWeight: 700,
      marginBottom: "12px",
      color: "#f0f0f0",
    },
    subtitle: {
      fontSize: "18px",
      color: "#a1a1b5",
      maxWidth: "720px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#2c2c3e",
      borderRadius: "20px",
      padding: "32px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      cursor: "pointer",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "16px",
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "12px",
      color: "#f0f0f0",
    },
    cardText: {
      fontSize: "16px",
      color: "#c0c0d0",
      lineHeight: 1.6,
      marginBottom: "24px",
    },
    buttonBlue: {
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
    },
    buttonGreen: {
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#16a34a",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          A structured roadmap to master High Level Design (HLD) and Low Level
          Design (LLD) with a Java-first, interview-oriented approach.
        </p>
      </div>

      {/* Cards */}
      <div style={styles.grid}>
        {/* HLD Card */}
        <MotionDiv
          style={styles.card}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaProjectDiagram style={{ ...styles.icon, color: "#2563eb" }} />
          <div style={styles.cardTitle}>High Level Design (HLD)</div>
          <div style={styles.cardText}>
            Focuses on system architecture, scalability, load balancers,
            databases, caching, queues, and real-world distributed system
            decisions.
          </div>
          <button
            style={styles.buttonBlue}
            onClick={() => navigate("/system-design/hld")}
          >
            Go to HLD
          </button>
        </MotionDiv>

        {/* LLD Card */}
        <MotionDiv
          style={styles.card}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaCogs style={{ ...styles.icon, color: "#16a34a" }} />
          <div style={styles.cardTitle}>Low Level Design (LLD)</div>
          <div style={styles.cardText}>
            Covers class design, object relationships, SOLID principles, and
            design patterns with clean Java-based implementations.
          </div>
          <button
            style={styles.buttonGreen}
            onClick={() => navigate("/system-design/lld")}
          >
            Go to LLD
          </button>
        </MotionDiv>
      </div>
    </div>
  );
};

export default SystemDesign;