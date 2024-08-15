
import * as THREE from "three";

const Stars = ({position}) => {
    return (
      <mesh position={position}>
        <sphereGeometry args={[0.1,0.1,0.1]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    );
  };

  export default Stars;