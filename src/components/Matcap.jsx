import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Matcap = () => {

  const matcap = useLoader(
    TextureLoader, 
    "./matcaps/matcap5.png")

  return (
    <mesh position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 100, 100]} />
      <meshMatcapMaterial matcap={ matcap }/>
    </mesh>
  )
}

export default Matcap