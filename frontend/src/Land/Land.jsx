import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import "./Land.css";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x = 1.05;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

function Land() {
  return (
    <div id="land-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 1]} intensity={0.5} />

        <Model modelPath="/models/raspberry_pi_3.glb" />

        <EffectComposer>
          <Bloom mipmapBlur intensity={2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>

        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Land;
