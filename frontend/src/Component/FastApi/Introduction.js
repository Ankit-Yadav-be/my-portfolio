import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Code,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const FastAPINotes = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const card = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.700", "gray.300");

  return (
    <Box bg={bg} minH="100vh" p={{ base: 4, md: 10 }}>
      <VStack spacing={8} align="stretch" maxW="1100px" mx="auto">

        <Heading textAlign="center" size="2xl">
           FastAPI – Complete Notes (Basic to Advanced)
        </Heading>

        <Divider />

        {/* 1 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">1️⃣ What is FastAPI? (Definition)</Heading>

          <Text mt={4} color={text}>
            FastAPI is a modern, high-performance Python web framework that is
            mainly used for building REST APIs.
          </Text>

          <Text mt={4} fontWeight="bold">In simple words:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• Fast to run </ListItem>
            <ListItem>• Fast to write </ListItem>
            <ListItem>• Less code, more functionality</ListItem>
            <ListItem>• Built-in validation and documentation</ListItem>
          </List>

          <Text mt={4} fontWeight="bold">Real-world usage:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• Backend for React / Mobile applications</ListItem>
            <ListItem>• Microservices</ListItem>
            <ListItem>• Machine Learning APIs</ListItem>
            <ListItem>• High traffic systems</ListItem>
          </List>
        </Box>

        {/* 2 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">2️⃣ Core Components of FastAPI</Heading>

          <Text mt={4} color={text}>
            FastAPI does not implement everything by itself. It is built on top
            of two powerful Python libraries.
          </Text>

          <Heading size="md" mt={6}>🔹 1. Starlette (HTTP Handling)</Heading>
          <Text mt={3} color={text}>Responsibilities of Starlette:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• Receiving requests</ListItem>
            <ListItem>• Sending responses</ListItem>
            <ListItem>• Routing (/users, /login)</ListItem>
            <ListItem>• Middleware</ListItem>
            <ListItem>• WebSockets</ListItem>
          </List>

          <Text mt={3} color={text}>
            This means all networking and HTTP-related work is handled by
            Starlette.
          </Text>

          <Heading size="md" mt={6}>🔹 2. Pydantic (Data Validation)</Heading>
          <Text mt={3} color={text}>Responsibilities of Pydantic:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• Input data validation</ListItem>
            <ListItem>• Type checking</ListItem>
            <ListItem>• Automatic error messages</ListItem>
          </List>

          <Text mt={4} color={text}>Example:</Text>
          <Code display="block" mt={2} p={3} rounded="md">
{`class User(BaseModel):
    name: str
    age: int`}
          </Code>

          <Text mt={3} color={text}>
            If someone sends age="twenty" ❌, FastAPI automatically returns an
            error ✅. You do not need to write manual validation code.
          </Text>
        </Box>

        {/* 3 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">3️⃣ Philosophy of FastAPI</Heading>
          <Text mt={4} color={text}>
            FastAPI was created to solve two major problems of older Python
            frameworks.
          </Text>
        </Box>

        {/* 4 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg"> Problem 1: Fast to Run</Heading>

          <Text mt={4} color={text}>
            Older frameworks like Flask and Django feel slow when:
          </Text>

          <List mt={2} spacing={2} color={text}>
            <ListItem>• There are many users</ListItem>
            <ListItem>• Concurrent requests are high</ListItem>
            <ListItem>• Long-running tasks exist (DB, ML, API calls)</ListItem>
          </List>

          <Heading size="md" mt={6}>
             Flask Issue (WSGI – Synchronous)
          </Heading>
          <Text mt={3} color={text}>
            Flask can handle only one request at a time.
          </Text>

          <Text mt={3} color={text}>
            Analogy (Waiter Example): Flask is like a waiter who takes one order,
            waits for the food to be prepared, and only then takes the next
            order. This results in slow service ❌.
          </Text>

          <Heading size="md" mt={6}>
             FastAPI Solution (ASGI – Asynchronous)
          </Heading>
          <Text mt={3} color={text}>
            FastAPI uses asynchronous code.
          </Text>

          <List mt={2} spacing={2} color={text}>
            <ListItem>• One request can wait</ListItem>
            <ListItem>• Server can handle another request meanwhile</ListItem>
          </List>

          <Text mt={3} color={text}>
            Analogy: FastAPI is a smart waiter who hands over the order to the
            kitchen and immediately goes to take another order. This results in
            fast service ✅.
          </Text>
        </Box>

        {/* 5 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">4️⃣ What is ASGI?</Heading>

          <Text mt={4} color={text}>
            ASGI stands for Asynchronous Server Gateway Interface.
          </Text>

          <Code display="block" mt={3} p={3} rounded="md">
{`Flask        FastAPI
WSGI         ASGI
Blocking     Non-blocking
Slow         High concurrency`}
          </Code>

          <Text mt={3} color={text}>
            ASGI allows FastAPI to handle multiple requests in parallel.
          </Text>
        </Box>

        {/* 6 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">5️⃣ What is Uvicorn?</Heading>

          <Text mt={4} color={text}>
            Uvicorn is an ASGI server used to run FastAPI applications.
          </Text>

          <Code display="block" mt={3} p={3} rounded="md">
            uvicorn main:app --reload
          </Code>

          <List mt={3} spacing={2} color={text}>
            <ListItem>• Extremely fast</ListItem>
            <ListItem>• Async support</ListItem>
            <ListItem>• Production ready</ListItem>
          </List>
        </Box>

        {/* 7 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">6️⃣ Async / Await in FastAPI</Heading>

          <Text mt={4} color={text}>Normal (Blocking):</Text>
          <Code display="block" mt={2} p={3} rounded="md">
{`def get_data():
    time.sleep(5)
    return "done"`}
          </Code>

          <Text mt={4} color={text}>Async (Non-blocking):</Text>
          <Code display="block" mt={2} p={3} rounded="md">
{`async def get_data():
    await asyncio.sleep(5)
    return "done"`}
          </Code>

          <Text mt={3} color={text}>
            Using await frees the server to handle other requests.
          </Text>

          <Text mt={3} fontWeight="bold">Use async when:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• Database calls</ListItem>
            <ListItem>• API calls</ListItem>
            <ListItem>• File uploads</ListItem>
            <ListItem>• Machine learning inference</ListItem>
          </List>
        </Box>

        {/* 8 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">7️⃣ Fast to Code (Developer Friendly)</Heading>

          <Heading size="md" mt={4}>✅ Automatic Input Validation</Heading>

          <Code display="block" mt={3} p={3} rounded="md">
{`@app.get("/items/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id}`}
          </Code>

          <Text mt={3} color={text}>
            If someone accesses /items/abc, FastAPI automatically returns an
            error saying "value is not a valid integer".
          </Text>

          <Heading size="md" mt={6}>✅ Auto-Generated Documentation</Heading>

          <List mt={2} spacing={2} color={text}>
            <ListItem>• /docs → Swagger UI</ListItem>
            <ListItem>• /redoc → Clean documentation</ListItem>
          </List>

          <List mt={2} spacing={2} color={text}>
            <ListItem>• Test APIs directly</ListItem>
            <ListItem>• Fill request body</ListItem>
            <ListItem>• View live responses</ListItem>
          </List>
        </Box>

        {/* 9 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">8️⃣ Installation (Step by Step)</Heading>

          <Code display="block" mt={3} p={3} rounded="md">
{`mkdir fastapi-project
cd fastapi-project`}
          </Code>

          <Code display="block" mt={3} p={3} rounded="md">
{`python -m venv venv
venv\\Scripts\\activate`}
          </Code>

          <Code display="block" mt={3} p={3} rounded="md">
            pip install fastapi uvicorn pydantic
          </Code>
        </Box>

        {/* 10 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">9️⃣ First FastAPI App (Hello World)</Heading>

          <Code display="block" mt={3} p={3} rounded="md">
{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello World"}`}
          </Code>

          <Code display="block" mt={3} p={3} rounded="md">
            uvicorn main:app --reload
          </Code>

          <Text mt={3} color={text}>
            Open http://127.0.0.1:8000
          </Text>
        </Box>

        {/* 11 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">🔟 Add Another Endpoint</Heading>

          <Code display="block" mt={3} p={3} rounded="md">
{`@app.get("/about")
def about():
    return {"info": "This is FastAPI tutorial"}`}
          </Code>
        </Box>

        {/* 12 */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">1️⃣1️⃣ Swagger Documentation</Heading>

          <Text mt={3} color={text}>
            Open http://127.0.0.1:8000/docs
          </Text>

          <List mt={2} spacing={2} color={text}>
            <ListItem>• / endpoint</ListItem>
            <ListItem>• /about endpoint</ListItem>
            <ListItem>• Try it out button</ListItem>
            <ListItem>• Live testing</ListItem>
          </List>

          <Text mt={3} color={text}>
            This feature must be implemented manually in Flask or Django.
          </Text>
        </Box>

        {/* Summary */}
        <Box bg={card} p={6} rounded="xl" shadow="xl">
          <Heading size="lg">🔚 Summary (Interview Ready)</Heading>

          <List mt={3} spacing={2} color={text}>
            <ListItem>• Modern Python API framework</ListItem>
            <ListItem>• Built on Starlette and Pydantic</ListItem>
            <ListItem>• Uses ASGI</ListItem>
            <ListItem>• Supports async/await</ListItem>
            <ListItem>• Automatic validation</ListItem>
            <ListItem>• Automatic documentation</ListItem>
            <ListItem>• Extremely fast</ListItem>
          </List>

          <Text mt={4} fontWeight="bold">Best suited for:</Text>
          <List mt={2} spacing={2} color={text}>
            <ListItem>• High performance APIs</ListItem>
            <ListItem>• Machine learning services</ListItem>
            <ListItem>• Microservices</ListItem>
            <ListItem>• Scalable systems</ListItem>
          </List>
        </Box>

      </VStack>
    </Box>
  );
};

export default FastAPINotes;
