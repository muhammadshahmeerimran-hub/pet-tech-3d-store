import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Fountain } from './Fountain3D';
import './App.css';

function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 5, 8]);
  const cameraRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;
      const newZ = 8 - scrollPercent * 6;
      const newY = 5 + scrollPercent * 3;
      setCameraPosition([0, newY, Math.max(newZ, 2)]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <Canvas>
        <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPosition} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Fountain />
        <OrbitControls />
      </Canvas>
      <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 rounded-t-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Smart Pet Fountain</h1>
        <p className="text-gray-600 mt-2">Scroll to explore our 3D fountain</p>
      </div>
    </div>
  );
}

export default App;