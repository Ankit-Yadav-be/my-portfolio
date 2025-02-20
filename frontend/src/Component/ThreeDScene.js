import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { useRef } from "react";

const SpinningButton = () => {
  const textRef = useRef();

  // Rotate animation
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={textRef}>
      <Text3D font="/fonts/Inter_Bold.json" size={1} height={0.2} curveSegments={12}>
        Hire Me
        <meshStandardMaterial color="#ff0066" />
      </Text3D>
    </mesh>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ height: "400px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <SpinningButton />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
