import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload, useFBX } from '@react-three/drei';
import CanvasLoader from '../Loader';
/*
const Ghost = () => {
  const ghost = useFBX('./ghost.fbx')

  return (
    <mesh>
      <hemisphereLight intensity={ 2 } color={"#000"} position = {(0,1,0)}/>
      <spotLight
        position={[10, 10, 10]}
        angle={0}
        penumbra={10}
        intensity={0}
        color={"#F6467E"}
        distance={10}
        castShadow={false}
        power={0.8}
        shadow-mapSize={1024}
      />
      <pointLight intensity = { 1 } distance = {50} color={"#F6467E"}/>
    <primitive
      object = { ghost }
      scale = { 0.009}
      position-y = { 0 }
      rotation-y = { 0 }
    />
    </mesh>
  )
}

const GhostCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop = 'demand'
      gl = {{ preserveDrawingBuffer: true }}
      camera = {{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback = {<CanvasLoader/>} >
        <OrbitControls 
          autoRotate
          enableZoom = { false }
          maxPolarAngle = { Math.PI / 2 }
          minPolarAngle={ Math.PI / 2 }
        />
        <Ghost />
      </Suspense>
    </Canvas>
  )
}

export default GhostCanvas; */