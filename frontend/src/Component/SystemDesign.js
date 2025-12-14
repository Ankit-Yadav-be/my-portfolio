import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const SystemDesign = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
    },
  };

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "radial-gradient(circle at top left, #0f0c29, #302b63)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "80px",
    },
    title: {
      fontSize: "5rem",
      fontWeight: 900,
      background: "linear-gradient(90deg, #00ffff, #ff00ff, #ffcc00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#b0b0d0",
      maxWidth: "700px",
      lineHeight: 1.8,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "60px",
      width: "100%",
      maxWidth: "1100px",
    },
    card: {
      position: "relative",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "25px",
      padding: "36px",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer",
      perspective: "1000px",
      overflow: "hidden",
    },
    cardInner: {
      position: "relative",
      transformStyle: "preserve-3d",
    },
    icon: {
      fontSize: "48px",
      marginBottom: "20px",
      color: "#00ffff",
    },
    cardTitle: {
      fontSize: "1.8rem",
      fontWeight: 700,
      marginBottom: "12px",
    },
    cardText: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#c0c0d0",
      marginBottom: "24px",
      minHeight: "100px",
    },
    button: {
      padding: "12px 28px",
      borderRadius: "12px",
      border: "none",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      background: "linear-gradient(90deg, #00ffff, #ff00ff)",
      color: "#fff",
      boxShadow: "0 10px 25px rgba(0,255,255,0.2)",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 15px 30px rgba(0,255,255,0.3)",
    },
  };

  const Card = ({ icon, title, text, onClick }) => (
    <MotionDiv
      style={styles.card}
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
    >
      <div style={styles.cardInner}>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <div style={styles.cardTitle}>{title}</div>
        <div style={styles.cardText}>{text}</div>
        <motion.button
          style={styles.button}
          whileHover={styles.buttonHover}
          onClick={onClick}
        >
          Explore
        </motion.button>
      </div>
    </MotionDiv>
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          Structured roadmap to master High Level Design (HLD) and Low Level
          Design (LLD) with a Java-first, interview-oriented approach.
        </p>
      </header>

      <div style={styles.grid}>
        <Card
          icon={<FaProjectDiagram style={{ ...styles.icon, color: "#00ffff" }} />}
          title="High Level Design (HLD)"
          text="Focus on system architecture, scalability, load balancers, databases, caching, queues, and real-world distributed system decisions."
          onClick={() => navigate("/system-design/hld")}
        />
        <Card
          icon={<FaCogs style={{ ...styles.icon, color: "#ff00ff" }} />}
          title="Low Level Design (LLD)"
          text="Covers class design, object relationships, SOLID principles, and design patterns with clean Java-based implementations."
          onClick={() => navigate("/system-design/lld")}
        />
      </div>
    </div>
  );
};

export default SystemDesign;
