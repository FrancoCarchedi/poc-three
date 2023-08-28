import { Canvas, } from '@react-three/fiber'
import { Cloud, OrbitControls, Sky, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import Lights from './components/Lights'
import { Minecraft } from './components/Minecraft'
import Camera from './components/Camera'
import * as THREE from 'three'

function App() {

  return (
    <div className="canvas-container" style={{width: "100%", height: "100vh"}}>
      <Canvas shadows={true} gl={{
        antialias: true,
        toneMapping: THREE.ReinhardToneMapping,
        toneMappingExposure: 1.5
      }}>
        <Sky distance={450000} sunPosition={[0, 1, 0]} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <Camera />
        <Lights />
        
        <Suspense fallback={null}>
          {/* <Matcap /> */}
          {/* <Bricks /> */}
          <Minecraft />
        </Suspense>

        <OrbitControls target={[1, 10, 0]}/>
      </Canvas>
    </div>
    
  )
}

export default App
