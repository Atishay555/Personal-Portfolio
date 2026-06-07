import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

const AnimatedSphere = () => {
  return (
    <group>
      <Sphere args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#62e0ff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.5}
        />
      </Sphere>
      
      {/* Additional geometric elements */}
      <mesh position={[2.5, 0, 0]} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#52aeff" wireframe />
      </mesh>
      
      <mesh position={[-2.5, 0, 0]} scale={0.8}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhongMaterial color="#fd5c79" wireframe />
      </mesh>
    </group>
  )
}

const ContactLights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#62e0ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#fd5c79" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#6d45ce" />
    </>
  )
}

const ContactExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={5}
        minDistance={2}
        autoRotate
        autoRotateSpeed={4}
      />
      <ContactLights />
      <group scale={isMobile ? 0.6 : isTablet ? 0.8 : 1}>
        <AnimatedSphere />
      </group>
    </Canvas>
  )
}

export default ContactExperience
