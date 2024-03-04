import React, { Suspense ,useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Environment, OrbitControls, useGLTF, Html } from "@react-three/drei";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./serviceProyects.css"
import CanvasLoader from "../../../hooks/Loader";


const Aliens = () => {

    const isSmallScreen = useMediaQuery('(min-width: 768px)');

    const alien = useGLTF( '/src/public/1.glb')

    const modelRef = useRef();

    useFrame(() => {
      modelRef.current.rotation.y += 0.015;
    });
  

    return(
      <group>
      <mesh ref={modelRef}>
        <primitive object={alien.scene} scale={1.4} />
      </mesh>
      <Html center>
        <div style={{ color: "red", fontSize: "1.8em" }}>Proyects Examples</div>
      </Html>
      </group>
    )

}

const AliensCanvas = () => {
    return(
    <Canvas className="canvasAlienService" gl={{ preserveDrawingBuffer: true }}>
        <ambientLight />
        <pointLight />
        <Suspense fallback={<CanvasLoader/>}>
        <Aliens />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    )

}

export {AliensCanvas}