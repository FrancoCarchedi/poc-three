import {useRef, useEffect} from 'react'
import * as THREE from 'three'

const Scene = () => {

  const mountRef = useRef(null)
  let animationFrameId = null;

  useEffect(() => {
    const currentMount = mountRef.current

    //Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);

    //Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube )

    camera.position.z = 5;

    // Animación

    if (!animationFrameId) {

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
  
      animate();
    }
    

    return () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
      renderer.dispose();
    };
  }, [])

  


  return <div 
      ref={mountRef}
      style={{ width: '100%', height: '100vh'}}
    >
    </div>
  
}

export default Scene