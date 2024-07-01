import { Environment, OrbitControls, Image } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import '../OurTeamMesh'
import * as THREE from 'three'
import { easing } from 'maath'

export const Section5 = () => {
  return (
    <section className="five" >
      <div className="five-content">
        {/* <h1 className="headline-purple" >Our Team</h1> */}
        <div className="five-box" >
          <Canvas camera={{ position: [0, 3, 10], fov: 15 }}>
            <Carousel />
            <OrbitControls enableZoom={ false } />
            <Environment preset="dawn" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

function Carousel({ radius = 1, count = 6 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/team${Math.floor(i % 4) + 1}.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })
  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const isMobile = window.innerWidth <= 768;

//   const endTransform = isMobile ? "-100%" : "-60%"; // Use "-30%" for mobile and "-60%" for larger screens
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", endTransform]);

//   return (
//     <section ref={targetRef} className="five-horizontal">
//       <div className="five-horizontal-sticky">
//         <motion.div style={{ x }} className="five-horizontal-div">

//           <div className="five-horizontal-card-first">
//             <img className="five-card-text-image" src="ourteam.png" alt="" />
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image idan" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & CEO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Idan Zeidman</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image lorenzo" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & CEO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Lorenzo Noya</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image matvey" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & COO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Matvey Vasilyev</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image gabriella" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Social Media & <br /> Public Relations</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Gabriella Brookfield</h1>
//             </div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };
