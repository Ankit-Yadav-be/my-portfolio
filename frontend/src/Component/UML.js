import React from "react";

const UML = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#1e1e2f",
      color: "#e5e7eb",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      lineHeight: 1.7,
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "38px",
      fontWeight: 700,
      marginBottom: "20px",
      color: "#ffffff",
    },
    subHeading: {
      fontSize: "26px",
      fontWeight: 600,
      marginTop: "40px",
      marginBottom: "14px",
      color: "#00ffcc",
    },
    text: {
      fontSize: "16px",
      color: "#cbd5f5",
      marginBottom: "12px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "16px",
    },
    code: {
      backgroundColor: "#111827",
      padding: "16px",
      borderRadius: "10px",
      fontSize: "14px",
      color: "#e5e7eb",
      overflowX: "auto",
      marginBottom: "20px",
    },
    highlight: {
      color: "#a5b4fc",
      fontWeight: 600,
    },
    divider: {
      margin: "50px 0",
      borderColor: "#374151",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>UML Diagrams (Low Level Design)</h1>

        <p style={styles.text}>
          These notes are written in a <span style={styles.highlight}>
          beginner-friendly, revision-ready and portfolio-ready
          </span>{" "}
          format. UML diagrams help convert requirements into clean Low Level
          Designs before coding.
        </p>

        <hr style={styles.divider} />

        {/* Section 1 */}
        <h2 style={styles.subHeading}>1. What are UML Diagrams?</h2>
        <p style={styles.text}>
          UML (Unified Modeling Language) diagrams are visual representations of
          a software system. They help us understand the structure and behavior
          of an application before writing code.
        </p>

        <ul style={styles.list}>
          <li>Visualize the system</li>
          <li>Understand class relationships</li>
          <li>Communicate design clearly</li>
          <li>Improve Low Level Design</li>
        </ul>

        {/* Section 2 */}
        <h2 style={styles.subHeading}>2. Importance of UML in LLD & Interviews</h2>
        <ul style={styles.list}>
          <li>Converts ideas into design</li>
          <li>Reduces ambiguity</li>
          <li>Improves system clarity</li>
          <li>Frequently asked in LLD interviews</li>
        </ul>

        {/* Section 3 */}
        <h2 style={styles.subHeading}>3. Types of UML Diagrams</h2>
        <p style={styles.text}>
          UML diagrams are broadly divided into:
        </p>

        <ul style={styles.list}>
          <li><b>Structural Diagrams</b> – Static structure</li>
          <li><b>Behavioral Diagrams</b> – Dynamic interactions</li>
        </ul>

        {/* Section 4 */}
        <h2 style={styles.subHeading}>4. UML Diagrams Used in LLD</h2>
        <ul style={styles.list}>
          <li><b>Class Diagram</b> – Structure</li>
          <li><b>Sequence Diagram</b> – Behavior</li>
        </ul>

        {/* Section 5 */}
        <h2 style={styles.subHeading}>5. Class Diagram</h2>
        <p style={styles.text}>
          Class diagrams describe classes, their attributes, methods, and
          relationships.
        </p>

        <div style={styles.code}>
{`-------------------------
| Class Name            |
-------------------------
| Attributes            |
-------------------------
| Methods               |
-------------------------`}
        </div>

        {/* Attributes */}
        <h2 style={styles.subHeading}>5.1 Attributes</h2>
        <div style={styles.code}>
{`brand : String
speed : int`}
        </div>

        {/* Methods */}
        <h2 style={styles.subHeading}>5.2 Methods</h2>
        <div style={styles.code}>
{`startEngine() : void
getSpeed() : int`}
        </div>

        {/* Access Modifiers */}
        <h2 style={styles.subHeading}>5.3 Access Modifiers</h2>
        <ul style={styles.list}>
          <li>+ Public</li>
          <li># Protected</li>
          <li>- Private</li>
        </ul>

        <div style={styles.code}>
{`class Car {
  public String brand;
  protected int engineCC;
  private int speed;

  public void start() {
    System.out.println("Car started");
  }

  private int calculateSpeed() {
    return speed * 2;
  }
}`}
        </div>

        {/* Relationships */}
        <h2 style={styles.subHeading}>6. Class Relationships</h2>

        <h3 style={styles.subHeading}>6.1 Inheritance (IS-A)</h3>
        <div style={styles.code}>
{`class Animal {
  void eat() {}
}

class Dog extends Animal {
  void bark() {}
}`}
        </div>

        <h3 style={styles.subHeading}>6.2 Association (HAS-A)</h3>

        <h4 style={styles.subHeading}>Simple Association</h4>
        <div style={styles.code}>
{`class House {}

class Person {
  House house;
}`}
        </div>

        <h4 style={styles.subHeading}>Aggregation</h4>
        <div style={styles.code}>
{`class Sofa {}

class Room {
  Sofa sofa;
}`}
        </div>

        <h4 style={styles.subHeading}>Composition</h4>
        <div style={styles.code}>
{`class Engine {}

class Car {
  private Engine engine;

  Car() {
    this.engine = new Engine();
  }
}`}
        </div>

        {/* Sequence Diagram */}
        <h2 style={styles.subHeading}>7. Sequence Diagram</h2>
        <p style={styles.text}>
          Sequence diagrams show the interaction between objects over time.
        </p>

        <div style={styles.code}>
{`User -> OrderController
OrderController -> OrderService
OrderService -> PaymentService
PaymentService -> Database`}
        </div>

        <div style={styles.code}>
{`class OrderController {
  OrderService service = new OrderService();

  void placeOrder() {
    service.processOrder();
  }
}`}
        </div>

        {/* Summary */}
        <h2 style={styles.subHeading}>8. Interview Summary</h2>
        <ul style={styles.list}>
          <li>Class Diagram = Structure</li>
          <li>Sequence Diagram = Behavior</li>
          <li>Prefer Composition over Inheritance</li>
          <li>Focus on clarity</li>
        </ul>

        <h2 style={styles.subHeading}>9. Portfolio Statement</h2>
        <p style={styles.text}>
          “I use UML class and sequence diagrams to convert requirements into
          clean, maintainable Low Level Designs before implementation.”
        </p>
      </div>
    </div>
  );
};

export default UML;
