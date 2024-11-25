/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.6 : 0.75} position={isMobile ? [0, -3, -0.75] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

Computers.propTypes = {
  isMobile: PropTypes.bool
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])


  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas