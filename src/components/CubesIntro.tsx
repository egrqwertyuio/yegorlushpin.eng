'use client'

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

// Individual animated cube
function Cube({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + delay) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={hovered ? '#FFFF00' : '#FFD700'}
        emissive={hovered ? '#FFD700' : '#B8860B'}
        emissiveIntensity={hovered ? 0.8 : 0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Grid of cubes
function CubeGrid() {
  const cubes = useMemo(() => {
    const positions: [number, number, number][] = []
    const gridSize = 6
    const spacing = 1.2

    for (let x = -gridSize / 2; x < gridSize / 2; x++) {
      for (let y = -gridSize / 2; y < gridSize / 2; y++) {
        for (let z = -2; z < 2; z++) {
          // Create a hollow cube pattern - only edges
          const isEdge =
            Math.abs(x) === gridSize / 2 - 1 ||
            Math.abs(y) === gridSize / 2 - 1 ||
            Math.abs(z) === 1

          if (isEdge && Math.random() > 0.3) {
            positions.push([x * spacing, y * spacing, z * spacing])
          }
        }
      }
    }
    return positions
  }, [])

  return (
    <group>
      {cubes.map((pos, i) => (
        <Cube key={i} position={pos} delay={i * 0.1} />
      ))}
    </group>
  )
}

// Floating name text
function NameText({ name }: { name: string }) {
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Center ref={textRef}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {name}
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FF8C00"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

// Main scene
function Scene({ name }: { name: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF8C00" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#FFFF00"
      />

      <group ref={groupRef}>
        <CubeGrid />
      </group>

      <NameText name={name} />
    </>
  )
}

// Fallback for when 3D isn't available
function FallbackIntro({ name, onEnter }: { name: string; onEnter: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center cursor-pointer z-50"
      onClick={onEnter}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-cyber-yellow text-glow-yellow mb-8">
          {name}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyber-yellow/70 font-mono text-lg"
        >
          [ Click anywhere to enter ]
        </motion.p>
      </motion.div>
    </div>
  )
}

export default function CubesIntro({
  name = "YEGOR LUSHPIN",
  onEnter,
}: {
  name?: string
  onEnter: () => void
}) {
  const [is3DSupported, setIs3DSupported] = useState(true)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black z-50 cursor-pointer"
        onClick={onEnter}
      >
        {is3DSupported ? (
          <>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 60 }}
              onCreated={() => setIs3DSupported(true)}
              onError={() => setIs3DSupported(false)}
              gl={{ antialias: true, alpha: true }}
            >
              <Scene name={name} />
            </Canvas>

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cyber-yellow text-glow-yellow mb-4 text-center px-4"
              >
                {name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-cyber-yellow/60 font-mono text-sm md:text-base mt-8"
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  [ CLICK ANYWHERE TO ENTER ]
                </motion.span>
              </motion.p>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-yellow/50" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyber-yellow/50" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-yellow/50" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-yellow/50" />

            {/* Scan lines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,215,0,0.03)_2px,rgba(255,215,0,0.03)_4px)]" />
            </div>
          </>
        ) : (
          <FallbackIntro name={name} onEnter={onEnter} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
