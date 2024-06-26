import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [15, 2, 5], fov: 35 }} >
            <Experience />
         </Canvas>
        </>
    )
}