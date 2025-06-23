import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const ContactForm3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Form background */}
      <mesh position={[0, 0, -0.1]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Form header */}
      <mesh position={[0, 0.8, 0]} receiveShadow>
        <planeGeometry args={[2.8, 0.4]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      
      <Text
        position={[0, 0.8, 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Contact Me
      </Text>
      
      {/* Name input */}
      <mesh position={[0, 0.3, 0]} receiveShadow>
        <planeGeometry args={[2.6, 0.3]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>
      
      <Text
        position={[-1.1, 0.3, 0.05]}
        fontSize={0.1}
        color="#60A5FA"
        anchorX="left"
        anchorY="middle"
      >
        Name
      </Text>
      
      {/* Email input */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[2.6, 0.3]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>
      
      <Text
        position={[-1.1, 0, 0.05]}
        fontSize={0.1}
        color="#60A5FA"
        anchorX="left"
        anchorY="middle"
      >
        Email
      </Text>
      
      {/* Message input */}
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <planeGeometry args={[2.6, 0.5]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>
      
      <Text
        position={[-1.1, -0.4, 0.05]}
        fontSize={0.1}
        color="#60A5FA"
        anchorX="left"
        anchorY="middle"
      >
        Message...
      </Text>
      
      {/* Submit button */}
      <mesh position={[0, -0.8, 0]} receiveShadow>
        <planeGeometry args={[1, 0.3]} />
        <meshStandardMaterial color="#10B981" metalness={0.5} roughness={0.2} />
      </mesh>
      
      <Text
        position={[0, -0.8, 0.05]}
        fontSize={0.12}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Send Message
      </Text>
      
      {/* Decorative elements */}
      <mesh position={[1.7, 0.7, 0.2]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[-1.7, -0.7, 0.2]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Add some lighting */}
      <pointLight position={[0, 0, 1]} intensity={0.5} color="#3B82F6" />
    </group>
  );
};