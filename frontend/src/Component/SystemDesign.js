import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const SystemDesign = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 1024;

  return (
    <div style={styles.page}>
      <div style={styles.background} />

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          A structured roadmap to master High Level Design and Low Level Design
          for real-world systems and interviews.
        </p>
      </header>

      {/* Layout */}
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          height: isMobile ? "auto" : "520px",
        }}
      >
        {/* HLD */}
        <MotionDiv
          initial={{ opacity: 0, y: isMobile ? 40 : 0, x: isMobile ? 0 : -80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            ...styles.panel,
            ...(isMobile ? styles.mobilePanel : styles.hld),
            textAlign: "left",
          }}
          onClick={() => navigate("/system-design/hld")}
        >
          <h2 style={styles.panelTitle}>High Level Design</h2>
          <p style={styles.panelText}>
            Learn how to design scalable distributed systems. Focus on
            architecture, databases, caching, queues, load balancing and
            real-world tradeoffs used by top tech companies.
          </p>
          <span style={styles.cta}>Explore HLD →</span>
        </MotionDiv>

        {/* LLD */}
        <MotionDiv
          initial={{ opacity: 0, y: isMobile ? 40 : 0, x: isMobile ? 0 : 80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            ...styles.panel,
            ...(isMobile ? styles.mobilePanel : styles.lld),
            textAlign: isMobile ? "left" : "right",
          }}
          onClick={() => navigate("/system-design/lld")}
        >
          <h2 style={styles.panelTitle}>Low Level Design</h2>
          <p style={styles.panelText}>
            Master class design, object relationships, SOLID principles and
            design patterns with clean Java-based implementations.
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
    background: "#0b0f1a",
    color: "#fff",
    fontFamily: "'Inter', system-ui, sans-serif",
    position: "relative",
    overflowX: "hidden",
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
    padding: "80px 20px 50px",
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },

  subtitle: {
    marginTop: "20px",
    fontSize: "1.1rem",
    maxWidth: "720px",
    marginInline: "auto",
    color: "#a1a1aa",
    lineHeight: 1.7,
  },

  container: {
    display: "flex",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 80px",
    position: "relative",
    zIndex: 1,
  },

  panel: {
    flex: 1,
    padding: "60px 50px",
    backdropFilter: "blur(16px)",
    cursor: "pointer",
    transition: "all 0.35s ease",
    borderRadius: "24px",
  },

  hld: {
    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    background: "rgba(56,189,248,0.12)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  lld: {
    clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
    background: "rgba(168,85,247,0.12)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  mobilePanel: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  panelTitle: {
    fontSize: "2.3rem",
    fontWeight: 800,
    marginBottom: "20px",
  },

  panelText: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "#d4d4d8",
    maxWidth: "520px",
  },

  cta: {
    display: "inline-block",
    marginTop: "32px",
    fontSize: "0.95rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "#38bdf8",
  },
};

export default SystemDesign;
