import Typing from "react-typing-effect";
import { Text } from "@chakra-ui/react";

const TypingEffect = () => {
  return (
    <Text fontSize="2xl" fontWeight="bold" color="teal.400">
      <Typing 
        text={["Full-Stack Developer", "Freelancer", "Problem Solver"]} 
        speed={100} 
        eraseDelay={1500} 
      />
    </Text>
  );
};

export default TypingEffect;
