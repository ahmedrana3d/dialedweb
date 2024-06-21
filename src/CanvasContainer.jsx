import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [0, 0, 20], fov: 35 }} >
            <Experience />
         </Canvas>
        </>
    )
}