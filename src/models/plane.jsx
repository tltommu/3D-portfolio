import React, { useRef ,useEffect } from 'react'
import { Gltf, useAnimations, useGLTF } from '@react-three/drei'
import placeScene from '../assets/3d/plane.glb'
const Plane = ({isRotating, ...props}) => {
  const ref =useRef();  
  const {scene,animations} = useGLTF(placeScene)
    const {actions} = useAnimations(animations,ref);

    useEffect(()=>{
      
      if(isRotating){
        actions['Take 001'].play();
      } else{
        actions['Take 001'].stop();
      }
    },[actions, isRotating])
  return (
    <mesh{...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane