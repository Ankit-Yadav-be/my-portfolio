import React from "react";

const CapTheorem = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "50px 20px",
      backgroundColor: "#020617",
      color: "#e5e7eb",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    title: {
      fontSize: "42px",
      fontWeight: 700,
      marginBottom: "10px",
      color: "#f8fafc",
    },
    subtitle: {
      fontSize: "18px",
      color: "#94a3b8",
      marginBottom: "40px",
      lineHeight: 1.6,
    },
    section: {
      marginBottom: "50px",
    },
    sectionTitle: {
      fontSize: "26px",
      fontWeight: 600,
      marginBottom: "14px",
      color: "#38bdf8",
    },
    text: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#cbd5f5",
      marginBottom: "14px",
    },
    list: {
      paddingLeft: "22px",
      marginBottom: "16px",
    },
    listItem: {
      marginBottom: "8px",
      fontSize: "15px",
    },
    exampleBox: {
      backgroundColor: "#1e293b",
      borderLeft: "4px solid #22c55e",
      padding: "16px",
      borderRadius: "8px",
      marginTop: "12px",
      fontSize: "15px",
      color: "#e5e7eb",
    },
    warningBox: {
      backgroundColor: "#1e293b",
      borderLeft: "4px solid #facc15",
      padding: "16px",
      borderRadius: "8px",
      marginTop: "12px",
      fontSize: "15px",
      color: "#e5e7eb",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "16px",
    },
    th: {
      textAlign: "left",
      padding: "10px",
      backgroundColor: "#0f172a",
      borderBottom: "1px solid #334155",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #334155",
      fontSize: "15px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <h1 style={styles.title}>CAP Theorem</h1>
        <p style={styles.subtitle}>
          High Level Design concept explaining the fundamental trade-offs in
          distributed systems between Consistency, Availability, and Partition
          Tolerance.
        </p>

        {/* 1. Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>1. What is the CAP Theorem?</h2>
          <p style={styles.text}>
            The CAP Theorem states that in a distributed system, it is impossible
            to simultaneously guarantee Consistency, Availability, and Partition
            Tolerance. When a network partition occurs, the system must choose
            between Consistency and Availability.
          </p>

          <div style={styles.warningBox}>
            <strong>Key Insight:</strong> CAP trade-offs only become visible when
            a network partition happens.
          </div>
        </section>

        {/* 2. Consistency */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Consistency (C)</h2>
          <p style={styles.text}>
            Consistency means that all clients see the same data at the same
            time. After a write operation, every subsequent read must return the
            latest value.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> In a banking system, if a user transfers
            money, all servers must immediately reflect the updated balance.
          </div>
        </section>

        {/* 3. Availability */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Availability (A)</h2>
          <p style={styles.text}>
            Availability ensures that every request receives a response, even if
            the response does not contain the most recent data.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> Instagram loads the feed even during server
            issues, showing slightly outdated posts instead of failing.
          </div>
        </section>

        {/* 4. Partition Tolerance */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Partition Tolerance (P)</h2>
          <p style={styles.text}>
            Partition Tolerance means the system continues to operate despite
            network failures that split nodes into isolated groups.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> A data center in Asia losing connectivity
            with a data center in the US.
          </div>
        </section>

        {/* 5. CAP Trade-offs */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>5. CAP Trade-offs</h2>
          <p style={styles.text}>
            In real distributed systems, Partition Tolerance is mandatory. When
            a partition occurs, the system must sacrifice either Consistency or
            Availability.
          </p>
        </section>

        {/* 6. System Types */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>6. CAP System Types</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>System Type</th>
                <th style={styles.th}>Guarantees</th>
                <th style={styles.th}>Sacrifice</th>
                <th style={styles.th}>Example Systems</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>CP</td>
                <td style={styles.td}>Consistency + Partition Tolerance</td>
                <td style={styles.td}>Availability</td>
                <td style={styles.td}>Banking, MongoDB (majority writes)</td>
              </tr>
              <tr>
                <td style={styles.td}>AP</td>
                <td style={styles.td}>Availability + Partition Tolerance</td>
                <td style={styles.td}>Consistency</td>
                <td style={styles.td}>Cassandra, DynamoDB</td>
              </tr>
              <tr>
                <td style={styles.td}>CA</td>
                <td style={styles.td}>Consistency + Availability</td>
                <td style={styles.td}>Partition Tolerance</td>
                <td style={styles.td}>Single-node RDBMS</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 7. Real World Scenarios */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Real-World Design Scenarios</h2>

          <div style={styles.exampleBox}>
            <strong>WhatsApp:</strong> AP system — messages may be delayed but the
            app remains available.
          </div>

          <div style={styles.exampleBox}>
            <strong>Banking:</strong> CP system — transactions are blocked during
            failures to maintain correctness.
          </div>
        </section>

        {/* 8. Eventual Consistency */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>8. Eventual Consistency</h2>
          <p style={styles.text}>
            AP systems often use eventual consistency, meaning data becomes
            consistent over time rather than immediately.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> Like counts on social media apps eventually
            synchronize across servers.
          </div>
        </section>

        {/* 9. HLD Takeaway */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>9. HLD Takeaway</h2>
          <p style={styles.text}>
            CAP Theorem is about understanding trade-offs during failure. Most
            real-world distributed systems choose either CP or AP based on
            business requirements.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CapTheorem;
