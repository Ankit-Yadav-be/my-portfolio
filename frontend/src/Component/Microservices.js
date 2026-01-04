import React from "react";

const Microservices = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#020617",
      color: "#e5e7eb",
      padding: "24px",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "28px",
    },
    header: {
      marginBottom: "10px",
    },
    title: {
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "8px",
      color: "#f8fafc",
    },
    subtitle: {
      fontSize: "16px",
      color: "#94a3b8",
      lineHeight: 1.6,
    },
    card: {
      backgroundColor: "#0f172a",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "12px",
      color: "#38bdf8",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 600,
      marginTop: "18px",
      marginBottom: "8px",
      color: "#facc15",
    },
    h4: {
      fontSize: "15px",
      fontWeight: 600,
      marginTop: "12px",
      marginBottom: "6px",
      color: "#a5b4fc",
    },
    text: {
      fontSize: "15px",
      lineHeight: 1.7,
      color: "#cbd5f5",
    },
    list: {
      paddingLeft: "18px",
      marginTop: "8px",
      color: "#e5e7eb",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#1e293b",
      padding: "6px 12px",
      borderRadius: "999px",
      fontSize: "13px",
      marginTop: "10px",
      color: "#22c55e",
      fontWeight: 600,
    },
    warning: {
      color: "#f87171",
      fontWeight: 600,
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            Microservices Architecture & Decomposition Patterns
          </h1>
          <p style={styles.subtitle}>
            High Level Design notes covering architecture decisions,
            decomposition strategies, and distributed transaction handling.
          </p>
        </div>

        {/* Monolithic */}
        <div style={styles.card}>
          <h2 style={styles.h2}>1️⃣ Monolithic Architecture</h2>
          <p style={styles.text}>
            A monolithic architecture bundles all business functionalities into
            a single deployable application.
          </p>

          <h4 style={styles.h4}>📦 Example</h4>
          <p style={styles.text}>
            An e-commerce system where <b>login, product, order, inventory, payment</b>
            exist in one codebase and deployment.
          </p>

          <h4 style={styles.h4}>❌ Problems</h4>
          <ul style={styles.list}>
            <li><b>Tightly Coupled:</b> Small change → full redeploy</li>
            <li><b>Hard to Scale:</b> Entire app must scale</li>
            <li><b>Slow Development:</b> Heavy testing & large codebase</li>
            <li><b>High Risk:</b> One bug can break everything</li>
          </ul>
        </div>

        {/* Microservices */}
        <div style={styles.card}>
          <h2 style={styles.h2}>2️⃣ Microservices Architecture</h2>
          <p style={styles.text}>
            Microservices split a large system into small, independent services
            that communicate over APIs or events.
          </p>

          <h4 style={styles.h4}>📦 Example</h4>
          <ul style={styles.list}>
            <li>Auth Service</li>
            <li>Product Service</li>
            <li>Order Service</li>
            <li>Payment Service</li>
            <li>Inventory Service</li>
          </ul>

          <h4 style={styles.h4}>✅ Advantages</h4>
          <ul style={styles.list}>
            <li>Independent deployment</li>
            <li>Service-level scaling</li>
            <li>Fault isolation</li>
            <li>Tech stack flexibility</li>
          </ul>

          <h4 style={styles.h4}>⚠️ Challenges</h4>
          <ul style={styles.list}>
            <li>Network latency</li>
            <li>Complex monitoring & debugging</li>
            <li>Distributed transactions</li>
          </ul>
        </div>

        {/* Decomposition */}
        <div style={styles.card}>
          <h2 style={styles.h2}>3️⃣ Decomposition Pattern</h2>
          <p style={styles.text}>
            Decomposition decides <b>how to split</b> a monolith into meaningful
            microservices.
          </p>

          <h3 style={styles.h3}>🔹 By Business Capability</h3>
          <p style={styles.text}>
            Services align with business functions rather than technical layers.
          </p>
          <ul style={styles.list}>
            <li>Order Management</li>
            <li>Customer Management</li>
            <li>Payment Management</li>
          </ul>

          <h3 style={styles.h3}>🔹 By Subdomain (DDD)</h3>
          <p style={styles.text}>
            Large domains are divided into smaller independent subdomains.
          </p>
          <ul style={styles.list}>
            <li>Payment → Forward, Refund</li>
            <li>Order → Create, Track</li>
          </ul>
        </div>

        {/* Saga */}
        <div style={styles.card}>
          <h2 style={styles.h2}>4️⃣ Saga Pattern</h2>
          <p style={styles.text}>
            Saga pattern manages distributed transactions by breaking them into
            local transactions with compensating actions.
          </p>

          <h4 style={styles.h4}>🧩 Example: Order Placement</h4>
          <ol style={styles.list}>
            <li>Create Order</li>
            <li>Reserve Inventory</li>
            <li>Process Payment</li>
          </ol>

          <p style={styles.text}><b>Failure Handling:</b></p>
          <ul style={styles.list}>
            <li>Cancel order</li>
            <li>Release inventory</li>
          </ul>

          <h4 style={styles.h4}>Saga Types</h4>
          <ul style={styles.list}>
            <li><b>Choreography:</b> Event-driven, no central controller</li>
            <li><b>Orchestration:</b> Central Saga Orchestrator</li>
          </ul>
        </div>

        {/* When to Use */}
        <div style={styles.card}>
          <h2 style={styles.h2}>5️⃣ When to Use Microservices?</h2>
          <ul style={styles.list}>
            <li>Large-scale systems</li>
            <li>Independent teams</li>
            <li>High scalability needs</li>
            <li>Frequent releases</li>
          </ul>

          <p style={styles.warning}>
            🚨 Avoid microservices for small or simple applications.
          </p>

          <span style={styles.badge}>HLD Interview Favorite Topic</span>
        </div>
      </div>
    </div>
  );
};

export default Microservices;
