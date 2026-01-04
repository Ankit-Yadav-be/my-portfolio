import React from "react";

const ScalingOneMillionUsers = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#020617",
      color: "#e5e7eb",
      padding: "24px",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },
    container: {
      maxWidth: "950px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
    },
    header: {
      marginBottom: "10px",
    },
    title: {
      fontSize: "40px",
      fontWeight: 700,
      color: "#f8fafc",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "17px",
      color: "#94a3b8",
      lineHeight: 1.6,
    },
    card: {
      backgroundColor: "#0f172a",
      borderRadius: "18px",
      padding: "26px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
    },
    h2: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#38bdf8",
      marginBottom: "12px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#facc15",
      marginTop: "14px",
      marginBottom: "6px",
    },
    text: {
      fontSize: "15.5px",
      lineHeight: 1.75,
      color: "#cbd5f5",
    },
    list: {
      paddingLeft: "18px",
      marginTop: "8px",
      lineHeight: 1.7,
    },
    highlight: {
      backgroundColor: "#020617",
      borderLeft: "4px solid #22c55e",
      padding: "12px 16px",
      marginTop: "12px",
      borderRadius: "8px",
      color: "#bbf7d0",
      fontSize: "14.5px",
    },
    warning: {
      color: "#f87171",
      fontWeight: 600,
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            Scaling a System from Zero to One Million Users
          </h1>
          <p style={styles.subtitle}>
            A step-by-step High Level Design journey explaining how real-world
            systems evolve as traffic, data, and complexity grow.
          </p>
        </div>

        {/* 1. Single Server */}
        <div style={styles.card}>
          <h2 style={styles.h2}>1️⃣ Single Server Architecture</h2>
          <p style={styles.text}>
            Initially, the entire application runs on a single server that
            handles business logic, database operations, and client requests.
          </p>

          <h3 style={styles.h3}>📦 Example</h3>
          <p style={styles.text}>
            Early-stage startup MVP or college project where backend, APIs, and
            database are deployed together.
          </p>

          <h3 style={styles.h3}>❌ Limitations</h3>
          <ul style={styles.list}>
            <li>Single point of failure</li>
            <li>No scalability</li>
            <li>Resource contention between app & DB</li>
          </ul>

          <div style={styles.highlight}>
            Interview Insight: Start simple. Never design for scale you don’t
            need yet.
          </div>
        </div>

        {/* 2. App & DB Separation */}
        <div style={styles.card}>
          <h2 style={styles.h2}>2️⃣ Application Server & Database Separation</h2>
          <p style={styles.text}>
            The first scaling step is separating the application server from the
            database server to allow independent growth.
          </p>

          <h3 style={styles.h3}>💡 Why?</h3>
          <ul style={styles.list}>
            <li>Database needs more memory & disk I/O</li>
            <li>App needs more CPU & network</li>
          </ul>

          <div style={styles.highlight}>
            Interview Line: “Separating app and DB removes the first major
            bottleneck.”
          </div>
        </div>

        {/* 3. Load Balancer */}
        <div style={styles.card}>
          <h2 style={styles.h2}>3️⃣ Load Balancer & Multiple App Servers</h2>
          <p style={styles.text}>
            As traffic increases, multiple application servers are introduced
            behind a load balancer.
          </p>

          <h3 style={styles.h3}>⚙️ Key Points</h3>
          <ul style={styles.list}>
            <li>Traffic distribution (Round Robin, Least Connection)</li>
            <li>Fault tolerance</li>
            <li>Stateless application servers</li>
          </ul>

          <div style={styles.highlight}>
            Interview Insight: Stateless services are mandatory for horizontal
            scaling.
          </div>
        </div>

        {/* 4. DB Replication */}
        <div style={styles.card}>
          <h2 style={styles.h2}>4️⃣ Database Replication (Master–Slave)</h2>
          <p style={styles.text}>
            Read-heavy systems replicate the database to handle massive read
            traffic.
          </p>

          <h3 style={styles.h3}>🧠 How it works</h3>
          <ul style={styles.list}>
            <li>Master DB → Writes</li>
            <li>Slave DBs → Reads</li>
          </ul>

          <div style={styles.highlight}>
            Interview Insight: Most systems are read-heavy → replication is
            essential.
          </div>
        </div>

        {/* 5. Caching */}
        <div style={styles.card}>
          <h2 style={styles.h2}>5️⃣ Caching Layer</h2>
          <p style={styles.text}>
            Cache stores frequently accessed data in memory to reduce database
            load.
          </p>

          <h3 style={styles.h3}>📦 Examples</h3>
          <ul style={styles.list}>
            <li>User profiles</li>
            <li>Product catalog</li>
            <li>Trending posts</li>
          </ul>

          <div style={styles.highlight}>
            Interview Line: Cache improves performance by orders of magnitude.
          </div>
        </div>

        {/* 6. CDN */}
        <div style={styles.card}>
          <h2 style={styles.h2}>6️⃣ Content Delivery Network (CDN)</h2>
          <p style={styles.text}>
            CDN serves static content from servers geographically close to users.
          </p>

          <h3 style={styles.h3}>🌍 Use Cases</h3>
          <ul style={styles.list}>
            <li>Images, videos, JS, CSS</li>
            <li>Global user base</li>
          </ul>

          <div style={styles.highlight}>
            Interview Insight: CDN is non-negotiable for global scale.
          </div>
        </div>

        {/* 7. Multi DC */}
        <div style={styles.card}>
          <h2 style={styles.h2}>7️⃣ Multiple Data Centers</h2>
          <p style={styles.text}>
            Multiple data centers improve availability, latency, and disaster
            recovery.
          </p>

          <h3 style={styles.h3}>⚠️ Challenges</h3>
          <ul style={styles.list}>
            <li>Data consistency</li>
            <li>Network partitions</li>
          </ul>
        </div>

        {/* 8. Message Queue */}
        <div style={styles.card}>
          <h2 style={styles.h2}>8️⃣ Messaging Queues (Async Processing)</h2>
          <p style={styles.text}>
            Message queues decouple services and handle traffic spikes
            gracefully.
          </p>

          <h3 style={styles.h3}>📦 Examples</h3>
          <ul style={styles.list}>
            <li>Email notifications</li>
            <li>Order processing</li>
            <li>Analytics events</li>
          </ul>

          <div style={styles.highlight}>
            Interview Line: Queues turn synchronous bottlenecks into async flows.
          </div>
        </div>

        {/* 9. Sharding */}
        <div style={styles.card}>
          <h2 style={styles.h2}>9️⃣ Database Sharding</h2>
          <p style={styles.text}>
            Sharding splits data across multiple databases to handle massive
            scale.
          </p>

          <h3 style={styles.h3}>🔹 Types</h3>
          <ul style={styles.list}>
            <li>Horizontal Sharding (rows)</li>
            <li>Vertical Sharding (columns)</li>
          </ul>

          <p style={styles.warning}>
            Sharding is the last and most complex scaling step.
          </p>
        </div>

        {/* Summary */}
        <div style={styles.card}>
          <h2 style={styles.h2}>🔚 Final Interview Summary</h2>
          <p style={styles.text}>
            We start with a simple system and progressively introduce load
            balancers, replication, caching, CDN, queues, and sharding as
            bottlenecks appear. Each step solves a specific problem while
            introducing trade-offs.
          </p>

          <div style={styles.highlight}>
            Golden Rule: Scale only when needed, and always explain WHY.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalingOneMillionUsers;
