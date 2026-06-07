import React from 'react'
import { Gltf, useGLTF } from '@react-three/drei'


const ComputerModel = (props) => {
  const {scene}  = useGLTF("/models/desktop_computer.glb") ;
  return (
    <primitive
    object={scene} 
    scale ={2}
    position={[0,0,0]}
    rotation = {[0,-Math.PI / 9,0]}
     {...props}
    />
  )
}
useGLTF.preload("/models/desktop_computer.glb");

export default ComputerModel;
