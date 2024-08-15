import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Blackhole from "./Blackhole";
import * as THREE from "three";

const Stars = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry   args={[0.1,0.1,0.1]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
};

export default function Three() {

  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(200);
      const y = THREE.MathUtils.randFloatSpread(200);
      const z = THREE.MathUtils.randFloatSpread(200);
      stars.push([x, y, z]);
    }
    return stars;
  };

  const stars = generateStars(1000);

  return (
    <Canvas style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
      <ambientLight />
      <hemisphereLight intensity={0.35} groundColor={0x080820} />
      {stars.map((position, index) => (
        <Stars position={position} key={index} />
      ))}
      <Blackhole />
      <OrbitControls />
    </Canvas>
  );
}
