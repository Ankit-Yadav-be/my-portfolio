import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const SystemDesign = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* Background */}
      <div style={styles.background} />

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          A structured roadmap to master High Level Design and Low Level Design
          for real-world systems and interviews.
        </p>
      </header>

      {/* Diagonal Container */}
      <div style={styles.diagonalContainer}>
        {/* HLD */}
        <MotionDiv
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ ...styles.panel, ...styles.hld }}
          onClick={() => navigate("/system-design/hld")}
        >
          <h2 style={styles.panelTitle}>High Level Design</h2>
          <p style={styles.panelText}>
            Design scalable distributed systems. Learn architecture decisions,
            databases, caching, queues, load balancing, consistency models and
            real-world tradeoffs used by top tech companies.
          </p>

          <span style={styles.cta}>Explore HLD →</span>
        </MotionDiv>

        {/* LLD */}
        <MotionDiv
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ ...styles.panel, ...styles.lld }}
          onClick={() => navigate("/system-design/lld")}
        >
          <h2 style={styles.panelTitle}>Low Level Design</h2>
          <p style={styles.panelText}>
            Master class design, object relationships, SOLID principles and
            design patterns with clean, interview-ready Java implementations.
          </p>

          <span style={styles.cta}>Explore LLD →</span>
        </MotionDiv>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    fontFamily: "'Inter', system-ui, sans-serif",
    background: "#0b0f1a",
    color: "#fff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 40%), radial-gradient(circle at bottom, rgba(168,85,247,0.15), transparent 40%)",
    zIndex: 0,
  },

  header: {
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "60px",
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontSize: "4.5rem",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },

  subtitle: {
    marginTop: "20px",
    fontSize: "1.2rem",
    maxWidth: "720px",
    marginInline: "auto",
    color: "#a1a1aa",
    lineHeight: 1.7,
  },

  diagonalContainer: {
    position: "relative",
    height: "520px",
    maxWidth: "1200px",
    margin: "0 auto",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    zIndex: 1,
  },

  panel: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "60%",
    padding: "80px 60px",
    backdropFilter: "blur(16px)",
    cursor: "pointer",
    transition: "all 0.4s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  hld: {
    left: 0,
    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    background: "rgba(56,189,248,0.12)",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },

  lld: {
    right: 0,
    clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
    background: "rgba(168,85,247,0.12)",
    borderLeft: "1px solid rgba(255,255,255,0.1)",
    textAlign: "right",
  },

  panelTitle: {
    fontSize: "2.8rem",
    fontWeight: 800,
    marginBottom: "24px",
  },

  panelText: {
    fontSize: "1.15rem",
    lineHeight: 1.8,
    color: "#d4d4d8",
    maxWidth: "420px",
  },

  cta: {
    marginTop: "40px",
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "#38bdf8",
  },
};

export default SystemDesign;
