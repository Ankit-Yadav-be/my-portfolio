import React from "react";

const Kafka = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#020617",
      color: "#e5e7eb",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
    },
    title: {
      fontSize: "42px",
      fontWeight: 700,
      color: "#38bdf8",
    },
    subtitle: {
      fontSize: "18px",
      color: "#94a3b8",
      lineHeight: 1.7,
    },
    card: {
      backgroundColor: "#0f172a",
      padding: "28px",
      borderRadius: "18px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
    },
    h2: {
      fontSize: "26px",
      marginBottom: "12px",
      color: "#f8fafc",
    },
    h3: {
      fontSize: "20px",
      marginTop: "16px",
      marginBottom: "6px",
      color: "#93c5fd",
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "#cbd5f5",
    },
    ul: {
      paddingLeft: "20px",
      marginTop: "10px",
    },
    li: {
      marginBottom: "6px",
      fontSize: "15px",
    },
    code: {
      background: "#020617",
      padding: "12px",
      borderRadius: "10px",
      marginTop: "10px",
      color: "#38bdf8",
      fontSize: "14px",
      overflowX: "auto",
    },
    highlight: {
      color: "#22c55e",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* HEADER */}
        <div>
          <h1 style={styles.title}>Apache Kafka – HLD Master Notes</h1>
          <p style={styles.subtitle}>
            Complete system design notes for mastering Kafka with architecture,
            components, real-world Uber example, scaling, failures, and interview flow.
          </p>
        </div>

        {/* 1. Definition */}
        <div style={styles.card}>
          <h2 style={styles.h2}>1️⃣ What is Apache Kafka?</h2>
          <p style={styles.p}>
            <b>Apache Kafka</b> is a <span style={styles.highlight}>distributed event streaming platform</span>
            used to build real-time, scalable, and fault-tolerant systems.
          </p>
          <p style={styles.p}>
            In simple terms, Kafka can handle <b>millions of events per second</b>
            while ensuring data durability and reliability.
          </p>
        </div>

        {/* 2. Why Kafka */}
        <div style={styles.card}>
          <h2 style={styles.h2}>2️⃣ Why Do We Need Kafka?</h2>
          <p style={styles.p}>
            Traditional microservices communicate synchronously, leading to
            tight coupling, failures, and poor scalability.
          </p>
          <div style={styles.code}>
            Ride Service → Payment Service → Notification Service
          </div>
          <p style={styles.p}>
            Kafka introduces <b>asynchronous, decoupled communication</b>.
          </p>
          <div style={styles.code}>
            Ride Service → Kafka → Payment / Driver / Notification
          </div>
        </div>

        {/* 3. Architecture */}
        <div style={styles.card}>
          <h2 style={styles.h2}>3️⃣ Kafka High-Level Architecture</h2>
          <div style={styles.code}>
            Producers → Kafka Cluster → Consumers
          </div>
          <ul style={styles.ul}>
            <li style={styles.li}>Kafka Cluster contains Brokers</li>
            <li style={styles.li}>Topics are split into Partitions</li>
            <li style={styles.li}>Replication ensures fault tolerance</li>
          </ul>
        </div>

        {/* 4. Components */}
        <div style={styles.card}>
          <h2 style={styles.h2}>4️⃣ Core Components & Roles</h2>

          <h3 style={styles.h3}>Producer</h3>
          <p style={styles.p}>Publishes events to Kafka topics.</p>

          <h3 style={styles.h3}>Topic</h3>
          <p style={styles.p}>Logical channel for events (e.g. ride-requested).</p>

          <h3 style={styles.h3}>Partition</h3>
          <p style={styles.p}>
            Enables scalability and ordering (ordering guaranteed per partition).
          </p>

          <h3 style={styles.h3}>Broker</h3>
          <p style={styles.p}>Kafka server that stores and serves messages.</p>

          <h3 style={styles.h3}>Consumer Group</h3>
          <p style={styles.p}>
            Enables parallel consumption and fault tolerance.
          </p>

          <h3 style={styles.h3}>Offset</h3>
          <p style={styles.p}>
            Tracks message position for reliable processing.
          </p>
        </div>

        {/* 5. Message Flow */}
        <div style={styles.card}>
          <h2 style={styles.h2}>5️⃣ Kafka Message Flow</h2>
          <ol style={styles.ul}>
            <li style={styles.li}>Producer sends event</li>
            <li style={styles.li}>Kafka writes to partition</li>
            <li style={styles.li}>Replicas sync</li>
            <li style={styles.li}>Consumer polls message</li>
            <li style={styles.li}>Offset committed</li>
          </ol>
        </div>

        {/* 6. Uber Example */}
        <div style={styles.card}>
          <h2 style={styles.h2}>6️⃣ Uber Ride Booking – Real World Flow</h2>

          <p style={styles.p}><b>Step 1:</b> User requests ride → Kafka (ride-requested)</p>
          <p style={styles.p}><b>Step 2:</b> Driver service assigns driver</p>
          <p style={styles.p}><b>Step 3:</b> Ride started event</p>
          <p style={styles.p}><b>Step 4:</b> Payment processed asynchronously</p>
          <p style={styles.p}><b>Step 5:</b> Notifications sent</p>

          <p style={styles.p}>
            ✔ No service talks directly  
            ✔ Kafka acts as backbone
          </p>
        </div>

        {/* 7. Failure Handling */}
        <div style={styles.card}>
          <h2 style={styles.h2}>7️⃣ Failure Handling</h2>
          <p style={styles.p}>
            If Payment Service goes down, Kafka retains events and resumes
            processing once service recovers.
          </p>
        </div>

        {/* 8. Delivery Guarantees */}
        <div style={styles.card}>
          <h2 style={styles.h2}>8️⃣ Delivery Guarantees</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>At Most Once</li>
            <li style={styles.li}>At Least Once (Uber uses this)</li>
            <li style={styles.li}>Exactly Once</li>
          </ul>
        </div>

        {/* 9. Replication */}
        <div style={styles.card}>
          <h2 style={styles.h2}>9️⃣ Replication & Fault Tolerance</h2>
          <p style={styles.p}>
            Each partition has a leader and replicas. On broker failure,
            replicas take over automatically.
          </p>
        </div>

        {/* 10. CAP */}
        <div style={styles.card}>
          <h2 style={styles.h2}>🔟 Kafka & CAP Theorem</h2>
          <p style={styles.p}>
            Kafka is a <b>CP system</b> — consistency and partition tolerance
            are prioritized over availability.
          </p>
        </div>

        {/* 11. Scaling */}
        <div style={styles.card}>
          <h2 style={styles.h2}>1️⃣1️⃣ Kafka Scaling Strategy</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Increase partitions</li>
            <li style={styles.li}>Add consumers</li>
            <li style={styles.li}>Add brokers</li>
          </ul>
        </div>

        {/* 12. Interview Summary */}
        <div style={styles.card}>
          <h2 style={styles.h2}>🔚 Interview Ready Summary</h2>
          <p style={styles.p}>
            Kafka enables event-driven, scalable, and fault-tolerant systems by
            decoupling producers and consumers using topics, partitions, and
            consumer groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kafka;
