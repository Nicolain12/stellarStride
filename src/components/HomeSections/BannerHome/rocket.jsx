import React, { Suspense ,useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import "./bannerHome.css";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import useMediaQuery from "../../../hooks/useMediaQuery";
import CanvasLoader from "../../../hooks/Loader";


const Rockets = () => {
  const isSmallScreen = useMediaQuery('(min-width: 768px)');
  
    const rocket = useGLTF( '/src/public/uploads_files_4081881_rocket_2.glb')

    const modelRef = useRef();

    useFrame(() => {
      modelRef.current.rotation.y += 0.015;
    });
  

    return(
        <mesh>
           <primitive ref={modelRef} object={rocket.scene} scale={isSmallScreen ? 0.95 : 0.60} position= {isSmallScreen ? [0,-10,0] : [-4,-8,6]} /> 
        </mesh>
    )

}

const RocketsCanvas = () => {
    return(
    <Canvas className="CanvasRocketImportant" gl={{ preserveDrawingBuffer: true }} camera={{ fov: 75, position: [5,0, 20], rotation: [0, Math.PI / 7.9, 5.6]  }}>
        <ambientLight />
        <pointLight position={[15, 10, 10]} />
        <Suspense fallback={<CanvasLoader/>}>
        <Rockets />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    )

}

export {RocketsCanvas}