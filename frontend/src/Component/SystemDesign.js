import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const SystemDesign = () => {
  const navigate = useNavigate();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      color: "#fff",
      overflowX: "hidden",
    },
    header: {
      textAlign: "center",
      padding: "120px 20px 60px",
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
      fontSize: "1.5rem",
      color: "#b0b0d0",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    section: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "80px 20px",
      position: "relative",
    },
    sectionContent: {
      maxWidth: "500px",
      padding: "20px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "25px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    },
    sectionTitle: {
      fontSize: "3rem",
      fontWeight: 800,
      marginBottom: "20px",
      background: "linear-gradient(90deg, #00ffff, #ff00ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    sectionText: {
      fontSize: "1.2rem",
      color: "#d0d0d0",
      lineHeight: 1.8,
      marginBottom: "40px",
    },
    button: {
      padding: "14px 36px",
      borderRadius: "50px",
      border: "none",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      background: "linear-gradient(90deg, #00ffff, #ff00ff)",
      color: "#fff",
      boxShadow: "0 10px 30px rgba(0,255,255,0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 15px 35px rgba(0,255,255,0.5)",
    },
    svgShape: {
      position: "absolute",
      width: "200px",
      height: "200px",
      opacity: 0.1,
      top: "-50px",
      right: "50px",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>System Design</h1>
        <p style={styles.subtitle}>
          Master High Level Design (HLD) and Low Level Design (LLD) with a
          structured, Java-first, interview-oriented roadmap.
        </p>
      </header>

      {/* HLD Section */}
      <MotionDiv
        style={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <svg
          style={styles.svgShape}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#00ffff" />
        </svg>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>High Level Design (HLD)</h2>
          <p style={styles.sectionText}>
            Focuses on system architecture, scalability, load balancers,
            databases, caching, queues, and real-world distributed system
            decisions. Learn to design scalable systems like top tech
            companies.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={() => navigate("/system-design/hld")}
          >
            Explore HLD
          </button>
        </div>
      </MotionDiv>

      {/* LLD Section */}
      <MotionDiv
        style={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <svg
          style={{ ...styles.svgShape, top: "auto", bottom: "-50px", left: "50px" }}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="#ff00ff" />
        </svg>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Low Level Design (LLD)</h2>
          <p style={styles.sectionText}>
            Covers class design, object relationships, SOLID principles, and
            design patterns with clean Java-based implementations. Build robust
            and maintainable code.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={() => navigate("/system-design/lld")}
          >
            Explore LLD
          </button>
        </div>
      </MotionDiv>
    </div>
  );
};

export default SystemDesign;
