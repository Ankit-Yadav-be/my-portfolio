import React from "react";

const NetworkingProtocols = () => {
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
        <h1 style={styles.title}>Network Protocols</h1>
        <p style={styles.subtitle}>
          High Level Design notes explaining how distributed systems communicate
          using application-layer and transport-layer protocols, with real-world
          system design examples.
        </p>

        {/* 1. Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Introduction to Network Protocols</h2>
          <p style={styles.text}>
            Network protocols define standardized rules that allow multiple
            systems to communicate over a network. In High Level Design (HLD),
            protocol selection directly impacts system scalability, latency,
            reliability, and fault tolerance.
          </p>
          <p style={styles.text}>
            Modern distributed systems rely on layered communication where
            application-level protocols run on top of transport-level protocols
            such as TCP or UDP.
          </p>
        </section>

        {/* 2. Communication Models */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            2. Application-Level Communication Models
          </h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Client–Server Model</li>
            <li style={styles.listItem}>Peer-to-Peer (P2P) Model</li>
          </ul>
        </section>

        {/* 3. Client Server */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Client–Server Model</h2>
          <p style={styles.text}>
            In the client–server model, the client always initiates the request,
            and the server processes and responds. This architecture centralizes
            control and simplifies security, scaling, and monitoring.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> A browser requesting a web page from a web
            server using HTTP.
          </div>
        </section>

        {/* HTTP */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3.1 HTTP (Hypertext Transfer Protocol)</h2>
          <p style={styles.text}>
            HTTP is used for web communication and REST APIs. It follows a
            request–response model and runs over TCP.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Stateless by default</li>
            <li style={styles.listItem}>Reliable (TCP-based)</li>
            <li style={styles.listItem}>Not suitable for real-time push</li>
          </ul>

          <div style={styles.exampleBox}>
            <strong>HLD Example:</strong> An e-commerce website where product
            listings, orders, and payments use HTTP REST APIs.
          </div>
        </section>

        {/* FTP */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3.2 FTP (File Transfer Protocol)</h2>
          <p style={styles.text}>
            FTP is designed for reliable file transfer and uses two connections:
            control and data.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> Uploading backup files from a local machine
            to a remote server.
          </div>
        </section>

        {/* Email */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            3.3 SMTP, IMAP, and POP (Email Protocols)
          </h2>
          <p style={styles.text}>
            SMTP handles sending emails, while IMAP and POP are used for reading
            emails. IMAP is preferred for multi-device access.
          </p>

          <div style={styles.exampleBox}>
            <strong>HLD Example:</strong> Gmail uses SMTP for sending emails and
            IMAP to sync emails across mobile and web clients.
          </div>
        </section>

        {/* WebSockets */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3.4 WebSockets</h2>
          <p style={styles.text}>
            WebSockets provide full-duplex communication over a single persistent
            connection, allowing servers to push data to clients.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> WhatsApp sending messages instantly without
            refreshing the page.
          </div>
        </section>

        {/* P2P */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Peer-to-Peer (P2P) Model</h2>
          <p style={styles.text}>
            In P2P architecture, systems communicate directly without relying on
            a central server.
          </p>
        </section>

        {/* WebRTC */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>4.1 WebRTC</h2>
          <p style={styles.text}>
            WebRTC enables real-time audio, video, and data sharing using UDP for
            low-latency communication.
          </p>

          <div style={styles.exampleBox}>
            <strong>Example:</strong> Google Meet video calls using peer-to-peer
            connections.
          </div>
        </section>

        {/* Transport */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Transport Layer Protocols</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Protocol</th>
                <th style={styles.th}>Characteristics</th>
                <th style={styles.th}>Use Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>TCP</td>
                <td style={styles.td}>Reliable, ordered, connection-oriented</td>
                <td style={styles.td}>HTTP, Banking, Payments</td>
              </tr>
              <tr>
                <td style={styles.td}>UDP</td>
                <td style={styles.td}>Fast, connectionless, unreliable</td>
                <td style={styles.td}>Streaming, Video Calls, Gaming</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Final */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>6. HLD Takeaway</h2>
          <p style={styles.text}>
            Protocol selection is a core architectural decision. HTTP is best
            for CRUD systems, WebSockets for real-time messaging, and WebRTC with
            UDP for live communication systems.
          </p>
        </section>
      </div>
    </div>
  );
};

export default NetworkingProtocols;
