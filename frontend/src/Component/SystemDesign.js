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
      background:
        "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", // gradient dark background
      padding: "60px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#ffffff",
    },
    header: {
      textAlign: "center",
      marginBottom: "80px",
      position: "relative",
    },
    title: {
      fontSize: "56px",
      fontWeight: 800,
      marginBottom: "16px",
      background:
        "linear-gradient(90deg, #00ffff, #ff00ff, #ffcc00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "18px",
      color: "#b0b0d0",
      maxWidth: "720px",
      margin: "0 auto",
      lineHeight: 1.8,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "50px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      background: "rgba(30,30,50,0.85)",
      borderRadius: "25px",
      padding: "36px",
      boxShadow: "0 15px 35px rgba(0,255,255,0.2)",
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "all 0.3s ease-in-out",
      position: "relative",
      overflow: "hidden",
    },
    cardOverlay: {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background: "linear-gradient(60deg, #00ffff, #ff00ff, #ffcc00, #00ffff)",
      opacity: 0.15,
      transform: "rotate(25deg)",
      pointerEvents: "none",
    },
    icon: {
      fontSize: "50px",
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "26px",
      fontWeight: 700,
      marginBottom: "14px",
      color: "#ffffff",
    },
    cardText: {
      fontSize: "16px",
      color: "#c0c0d0",
      lineHeight: 1.7,
      marginBottom: "28px",
    },
    button: {
      padding: "12px 28px",
      borderRadius: "12px",
      border: "none",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    },
    buttonBlue: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
    },
    buttonGreen: {
      backgroundColor: "#16a34a",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          Structured roadmap to master High Level Design (HLD) and Low Level
          Design (LLD) with a Java-first, interview-oriented approach.
        </p>
      </div>

      {/* Cards */}
      <div style={styles.grid}>
        {/* HLD Card */}
        <MotionDiv
          style={styles.card}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(0,255,255,0.5)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div style={styles.cardOverlay}></div>
          <FaProjectDiagram style={{ ...styles.icon, color: "#00ffff" }} />
          <div style={styles.cardTitle}>High Level Design (HLD)</div>
          <div style={styles.cardText}>
            Focus on system architecture, scalability, load balancers,
            databases, caching, queues, and real-world distributed system
            decisions.
          </div>
          <button
            style={{ ...styles.button, ...styles.buttonBlue }}
            onClick={() => navigate("/system-design/hld")}
          >
            Go to HLD
          </button>
        </MotionDiv>

        {/* LLD Card */}
        <MotionDiv
          style={styles.card}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(0,255,0,0.5)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div style={styles.cardOverlay}></div>
          <FaCogs style={{ ...styles.icon, color: "#00ff99" }} />
          <div style={styles.cardTitle}>Low Level Design (LLD)</div>
          <div style={styles.cardText}>
            Covers class design, object relationships, SOLID principles, and
            design patterns with clean Java-based implementations.
          </div>
          <button
            style={{ ...styles.button, ...styles.buttonGreen }}
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
