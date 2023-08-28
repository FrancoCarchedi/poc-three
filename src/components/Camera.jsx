import { PerspectiveCamera } from '@react-three/drei'
import React from 'react'

const Camera = () => {
  return (
    <PerspectiveCamera 
      makeDefault
      position={[-20, 20, 20]}
      fov={50}
    />
  )
}

export default Camera