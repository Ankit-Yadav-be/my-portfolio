import React from 'react';

const Oops = () => {
  /**
   * ✅ OOPs Concepts Detailed Page
   * Dark mode professional UI with all core concepts and Java code examples
   */

  const oopsConcepts = [
    {
      title: 'Class & Object',
      description: 'Classes are blueprints for objects. Objects are instances of classes. Used to model real-world entities.',
      code: `// Java Example
class Car {
    String color;
    int speed;

    void start() {
        System.out.println("Car is starting");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.color = "Red";
        myCar.speed = 120;
        myCar.start();
    }
}`
    },
    {
      title: 'Encapsulation',
      description: 'Wrapping data (variables) and methods into a single unit (class) and controlling access using getters and setters.',
      code: `// Java Example
class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}`
    },
    {
      title: 'Inheritance',
      description: 'Allows a class to inherit properties and behavior from another class (parent → child).',
      code: `// Java Example
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat(); // inherited
        d.bark();
    }
}`
    },
    {
      title: 'Polymorphism',
      description: 'Ability of objects to take multiple forms. Compile-time (method overloading) and runtime (method overriding).',
      code: `// Java Example
class Calculator {
    // Compile-time polymorphism
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

class Animal {
    void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5,10));
        System.out.println(calc.add(2.5,3.5));

        Animal a = new Dog();
        a.sound(); // Runtime polymorphism
    }
}`
    },
    {
      title: 'Abstraction',
      description: 'Hiding implementation details and showing only functionality. Achieved using abstract classes or interfaces.',
      code: `// Java Example
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() { System.out.println("Drawing Circle"); }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();
    }
}`
    },
    {
      title: 'SOLID Principles',
      description: 'Collection of best OOP practices: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',
      code: `// Example: Single Responsibility Principle
class Report {
    void generate() { /* generate report */ }
}
class ReportPrinter {
    void print(Report r) { /* print report */ }
}`
    }
  ];

  const styles = {
    page: {
      minHeight: '100vh',
      padding: '40px 20px',
      backgroundColor: '#1e1e2f',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '42px',
      fontWeight: 700,
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '18px',
      color: '#a1a1b5',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    card: {
      backgroundColor: '#2c2c3e',
      borderRadius: '18px',
      padding: '28px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '10px',
      color: '#f0f0f0',
    },
    description: {
      fontSize: '16px',
      color: '#c0c0d0',
      lineHeight: 1.6,
      marginBottom: '14px',
    },
    codeBlock: {
      backgroundColor: '#12121c',
      padding: '16px',
      borderRadius: '12px',
      fontFamily: 'monospace',
      fontSize: '14px',
      overflowX: 'auto',
      color: '#00ffcc',
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>OOPs Concepts – Detailed Notes</h1>
        <p style={styles.subtitle}>
          Master Java OOPs concepts with explanations and code examples. Dark mode professional style.
        </p>
      </div>

      <div style={styles.container}>
        {oopsConcepts.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardTitle}>{item.title}</div>
            <div style={styles.description}>{item.description}</div>
            <pre style={styles.codeBlock}>{item.code}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oops;