import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Fountain() {
    const fountainRef = useRef();
    useFrame(() => {
        if (fountainRef.current) {
            fountainRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={fountainRef}>
            {/* Base */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[2, 2.5, 0.5, 32]} />
                <meshStandardMaterial color="#8B7355" />
            </mesh>
            {/* Main Bowl */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[1.5, 1.8, 1.5, 32]} />
                <meshStandardMaterial color="#4A90E2" metalness={0.6} roughness={0.4} />
            </mesh>
            {/* Center Column */}
            <mesh position={[0, 1.5, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
                <meshStandardMaterial color="#696969" />
            </mesh>
            {/* Top Spout */}
            <mesh position={[0, 2.5, 0]}>
                <sphereGeometry args={[0.4, 16, 16]} />
                <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Water Effect */}
            <mesh position={[0, 0.8, 0]}>
                <sphereGeometry args={[1.2, 16, 16]} />
                <meshStandardMaterial color="#87CEEB" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}