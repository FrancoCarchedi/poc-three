import { Environment } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
    <>
      <directionalLight position={[3, 3, 3]} color={"#ffffff"} intensity={2} target-position={[0, 0, 0]} castShadow={true} shadow-bias={-0.001}/>
      {/* <Environment files={'./hdr/decor_shop_1k.hdr'} /> */}
      <ambientLight color={"#ffffff"} intensity={0.5}/>
    </>
  )
}

export default Lights