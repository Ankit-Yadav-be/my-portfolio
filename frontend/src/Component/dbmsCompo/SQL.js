import React from "react";
import { Box, Heading, Text, Divider, VStack, Code } from "@chakra-ui/react";

const SQL = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="gray.100"
      p={{ base: 4, md: 10 }}
    >
      <VStack align="start" spacing={6} maxW="1200px" mx="auto">

        <Heading color="cyan.300">SQL (Structured Query Language)</Heading>

        <Text fontSize="lg">
          SQL is a standard language used to interact with relational databases.
          It allows us to define database structure, insert data, retrieve data,
          update records, delete records, and control access to data.
        </Text>

        <Divider />

        {/* ================= SQL COMMAND TYPES ================= */}
        <Heading size="md" color="cyan.200">
          Types of SQL Commands
        </Heading>

        <Text>
          SQL commands are divided into five major categories:
        </Text>

        <Text>
          • <b>DDL</b> – Data Definition Language (structure) <br />
          • <b>DML</b> – Data Manipulation Language (data) <br />
          • <b>DQL</b> – Data Query Language (retrieval) <br />
          • <b>DCL</b> – Data Control Language (permissions) <br />
          • <b>TCL</b> – Transaction Control Language (transactions)
        </Text>

        <Divider />

        {/* ================= DDL ================= */}
        <Heading size="md" color="orange.300">
          DDL – Data Definition Language
        </Heading>

        <Text>
          DDL commands define and modify the structure of database objects.
          These commands are auto-committed and cannot be rolled back.
        </Text>

        <Text><b>CREATE DATABASE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          CREATE DATABASE company;
        </Code>

        <Text><b>CREATE TABLE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
{`CREATE TABLE Employee (
  emp_id INT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(30),
  salary INT
);`}
        </Code>

        <Text>
          PRIMARY KEY ensures uniqueness and prevents NULL values.
        </Text>

        <Text><b>ALTER TABLE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          ALTER TABLE Employee ADD age INT;
        </Code>

        <Text><b>DROP TABLE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          DROP TABLE Employee;
        </Code>

        <Text><b>TRUNCATE TABLE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          TRUNCATE TABLE Employee;
        </Code>

        <Divider />

        {/* ================= DML ================= */}
        <Heading size="md" color="green.300">
          DML – Data Manipulation Language
        </Heading>

        <Text>
          DML commands are used to insert, update, and delete data in tables.
          These operations can be rolled back.
        </Text>

        <Text><b>INSERT</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          INSERT INTO Employee VALUES (1, 'Ankit', 'IT', 50000);
        </Code>

        <Text><b>UPDATE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
{`UPDATE Employee
SET salary = 60000
WHERE emp_id = 1;`}
        </Code>

        <Text>
          ⚠️ Without WHERE, all records will be updated.
        </Text>

        <Text><b>DELETE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          DELETE FROM Employee WHERE emp_id = 1;
        </Code>

        <Divider />

        {/* ================= DQL ================= */}
        <Heading size="md" color="purple.300">
          DQL – Data Query Language
        </Heading>

        <Text>
          DQL is used to retrieve data from the database using SELECT queries.
        </Text>

        <Text><b>SELECT</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          SELECT * FROM Employee;
        </Code>

        <Text><b>WHERE Clause</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          SELECT * FROM Employee WHERE salary &gt; 50000;
        </Code>

        <Text><b>ORDER BY</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          SELECT * FROM Employee ORDER BY salary DESC;
        </Code>

        <Text><b>DISTINCT</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          SELECT DISTINCT department FROM Employee;
        </Code>

        <Text><b>LIMIT</b></Text>
        <Code p={3} w="100%" bg="gray.800">
          SELECT * FROM Employee LIMIT 5;
        </Code>

        <Divider />

        {/* ================= AGGREGATE ================= */}
        <Heading size="md" color="pink.300">
          Aggregate Functions
        </Heading>

        <Text>
          Aggregate functions perform calculations on a group of rows.
        </Text>

        <Code p={3} w="100%" bg="gray.800">
{`SELECT COUNT(*) FROM Employee;
SELECT AVG(salary) FROM Employee;
SELECT MAX(salary) FROM Employee;`}
        </Code>

        <Text><b>GROUP BY</b></Text>
        <Code p={3} w="100%" bg="gray.800">
{`SELECT department, AVG(salary)
FROM Employee
GROUP BY department;`}
        </Code>

        <Text><b>HAVING vs WHERE</b></Text>
        <Code p={3} w="100%" bg="gray.800">
{`SELECT department, AVG(salary)
FROM Employee
GROUP BY department
HAVING AVG(salary) > 50000;`}
        </Code>

        <Divider />

        {/* ================= JOINS ================= */}
        <Heading size="md" color="cyan.400">
          SQL Joins (Very Important)
        </Heading>

        <Text>
          Joins are used to combine rows from multiple tables based on related columns.
        </Text>

        <Code p={3} w="100%" bg="gray.800">
{`SELECT e.name, d.dept_name
FROM Employee e
INNER JOIN Department d
ON e.department = d.dept_id;`}
        </Code>

        <Text>
          Types of Joins:
          INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
        </Text>

        <Divider />

        {/* ================= SUBQUERIES ================= */}
        <Heading size="md" color="orange.400">
          Subqueries
        </Heading>

        <Text>
          A subquery is a query inside another query.
        </Text>

        <Code p={3} w="100%" bg="gray.800">
{`SELECT name
FROM Employee
WHERE salary > (
  SELECT AVG(salary) FROM Employee
);`}
        </Code>

        <Divider />

        {/* ================= TRANSACTIONS ================= */}
        <Heading size="md" color="green.400">
          TCL – Transaction Control Language
        </Heading>

        <Text>
          Transactions ensure data consistency using ACID properties.
        </Text>

        <Code p={3} w="100%" bg="gray.800">
{`BEGIN;
UPDATE Employee SET salary = 70000 WHERE emp_id = 1;
COMMIT;`}
        </Code>

        <Divider />

        {/* ================= FINAL ================= */}
        <Heading size="md" color="cyan.300">
          Interview Perspective
        </Heading>

        <Text>
          SQL is not just about writing queries. It is about designing efficient,
          consistent, and scalable data systems. Understanding queries, joins,
          constraints, and transactions is the key to cracking DBMS interviews.
        </Text>

      </VStack>
    </Box>
  );
};

export default SQL;
