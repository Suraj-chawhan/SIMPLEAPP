import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

function Blackhole() {
    const{scene}=useGLTF('space.glb')


    useFrame(()=>{
        scene.rotation.y+=0.01
    })
  return (
  <mesh>
    <primitive  object={scene} position={[3,-4,-14]} scale={[4,4,6]} rotation={[0.5,0.5,0]} />
  </mesh>
  )
}

export default Blackhole