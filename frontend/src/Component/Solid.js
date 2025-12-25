import React from "react";

/**
 * SOLID PRINCIPLES – DETAILED NOTES
 * Level: Beginner → Industry → Interview
 * Language: Java (LLD Focus)
 */

const Solid = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#0f172a",
      color: "#e5e7eb",
      fontFamily: "system-ui",
      lineHeight: 1.7,
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    title: {
      fontSize: "42px",
      fontWeight: 800,
      marginBottom: "20px",
      color: "#ffffff",
    },
    section: {
      marginBottom: "60px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "12px",
      color: "#38bdf8",
    },
    subHeading: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#a5f3fc",
    },
    text: {
      fontSize: "16px",
      marginBottom: "12px",
      color: "#d1d5db",
    },
    code: {
      backgroundColor: "#020617",
      padding: "16px",
      borderRadius: "10px",
      fontSize: "14px",
      overflowX: "auto",
      marginBottom: "16px",
      color: "#e5e7eb",
    },
    highlight: {
      color: "#22c55e",
      fontWeight: 600,
    },
    warning: {
      color: "#f87171",
      fontWeight: 600,
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>SOLID Design Principles (LLD Master Notes)</h1>

        {/* INTRO */}
        <div style={styles.section}>
          <p style={styles.text}>
            <span style={styles.highlight}>SOLID</span> is a set of 5 principles
            that help us design{" "}
            <span style={styles.highlight}>scalable, maintainable, and
            testable</span> software systems.
          </p>

          <ul style={styles.list}>
            <li>S — Single Responsibility Principle</li>
            <li>O — Open Closed Principle</li>
            <li>L — Liskov Substitution Principle</li>
            <li>I — Interface Segregation Principle</li>
            <li>D — Dependency Inversion Principle</li>
          </ul>
        </div>

        {/* SRP */}
        <div style={styles.section}>
          <h2 style={styles.heading}>S — Single Responsibility Principle (SRP)</h2>

          <p style={styles.text}>
            <b>Definition:</b> A class should have only one reason to change.
          </p>

          <p style={styles.text}>
            <span style={styles.warning}>Wrong Thinking ❌</span>: One class = one
            method  
            <br />
            <span style={styles.highlight}>Correct Thinking ✅</span>: One class =
            one responsibility
          </p>

          <h3 style={styles.subHeading}>❌ SRP Violation (Real Project)</h3>
          <pre style={styles.code}>{`
class OrderService {
    void placeOrder() {}
    void processPayment() {}
    void generateInvoice() {}
    void saveToDatabase() {}
}
          `}</pre>

          <h3 style={styles.subHeading}>✅ SRP Applied</h3>
          <pre style={styles.code}>{`
class OrderService {
    void placeOrder() {}
}

class PaymentService {
    void processPayment() {}
}

class InvoiceService {
    void generateInvoice() {}
}

class OrderRepository {
    void save() {}
}
          `}</pre>

          <p style={styles.text}>
            👉 Change in payment logic affects only{" "}
            <span style={styles.highlight}>PaymentService</span>
          </p>
        </div>

        {/* OCP */}
        <div style={styles.section}>
          <h2 style={styles.heading}>O — Open Closed Principle (OCP)</h2>

          <p style={styles.text}>
            <b>Definition:</b> Software entities should be{" "}
            <span style={styles.highlight}>open for extension</span> but{" "}
            <span style={styles.warning}>closed for modification</span>.
          </p>

          <h3 style={styles.subHeading}>❌ OCP Violation</h3>
          <pre style={styles.code}>{`
class PaymentService {
    void pay(String type) {
        if(type.equals("UPI")) {}
        else if(type.equals("CARD")) {}
    }
}
          `}</pre>

          <h3 style={styles.subHeading}>✅ OCP Applied (Polymorphism)</h3>
          <pre style={styles.code}>{`
interface PaymentMethod {
    void pay();
}

class UpiPayment implements PaymentMethod {
    public void pay() {}
}

class CardPayment implements PaymentMethod {
    public void pay() {}
}

class PaymentService {
    void process(PaymentMethod method) {
        method.pay();
    }
}
          `}</pre>

          <p style={styles.text}>
            👉 New payment mode = new class  
            <br />
            👉 Existing code untouched
          </p>
        </div>

        {/* LSP */}
        <div style={styles.section}>
          <h2 style={styles.heading}>L — Liskov Substitution Principle (LSP)</h2>

          <p style={styles.text}>
            Child class should be replaceable with parent class without breaking
            behavior.
          </p>

          <pre style={styles.code}>{`
class Bird {
    void fly() {}
}

class Sparrow extends Bird {}

class Ostrich extends Bird { // ❌ breaks LSP
    void fly() {
        throw new RuntimeException("Cannot fly");
    }
}
          `}</pre>

          <p style={styles.text}>
            👉 Solution: separate interfaces (Flyable / NonFlyable)
          </p>
        </div>

        {/* ISP */}
        <div style={styles.section}>
          <h2 style={styles.heading}>I — Interface Segregation Principle (ISP)</h2>

          <p style={styles.text}>
            Clients should not be forced to depend on methods they don’t use.
          </p>

          <pre style={styles.code}>{`
interface Worker {
    void code();
    void test();
    void deploy();
}
          `}</pre>

          <p style={styles.text}>
            👉 Break into smaller interfaces
          </p>
        </div>

        {/* DIP */}
        <div style={styles.section}>
          <h2 style={styles.heading}>D — Dependency Inversion Principle (DIP)</h2>

          <p style={styles.text}>
            High-level modules should not depend on low-level modules. Both
            should depend on abstractions.
          </p>

          <pre style={styles.code}>{`
class PaymentService {
    private UpiPayment payment = new UpiPayment(); // ❌
}
          `}</pre>

          <pre style={styles.code}>{`
class PaymentService {
    private PaymentMethod payment; // ✅
}
          `}</pre>
        </div>

        {/* FINAL */}
        <div style={styles.section}>
          <h2 style={styles.heading}>🎯 Interview Summary</h2>
          <ul style={styles.list}>
            <li>SRP → Single reason to change</li>
            <li>OCP → Add new features without touching old code</li>
            <li>LSP → Subclass should never break parent behavior</li>
            <li>ISP → Small, focused interfaces</li>
            <li>DIP → Depend on abstractions, not concrete classes</li>
          </ul>

          <p style={styles.text}>
            💡 <span style={styles.highlight}>SOLID is not about more classes</span>
            , it's about{" "}
            <span style={styles.highlight}>safe change in production systems</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solid;
