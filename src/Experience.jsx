import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  
  return (
    <>
      <Float speed={ 0.5 } fallback rotationIntensity={ 0 } >
        <Model />
      </Float>
      <Environment preset="warehouse" />
      </>
  )
}