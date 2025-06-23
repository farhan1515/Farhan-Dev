import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, Text } from "@react-three/drei";
import * as THREE from "three";

// Define the Project type
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];
}

interface ProjectCardProps {
  project: Project;
  position?: [number, number, number];
  rotation?: [number, number, number];
  visible?: boolean;
}

const ProjectCard = ({
  project,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  visible = true,
}: ProjectCardProps) => {
  const groupRef = useRef<THREE.Group>(null);

  // Animation when the card is visible
  useFrame(() => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y += 0.005;

      // Floating animation
      groupRef.current.position.y =
        position[1] + Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <group
      ref={groupRef}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
      scale={visible ? 1 : 0}
    >
      {/* Project Card */}
      <mesh castShadow receiveShadow position={[0, 0, 0]} scale={[1.8, 1, 0.1]}>
        <boxGeometry />
        <meshStandardMaterial color="#1E293B" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Project Image */}
      <Image
        url={project.image}
        position={[0, 0.25, 0.06]}
        scale={[1.6, 0.8]}
        transparent
        opacity={0.9}
      />

      {/* Project Title */}
      <Text
        position={[0, -0.35, 0.06]}
        fontSize={0.12}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>

      {/* Project Technologies */}
      <Text
        position={[0, -0.55, 0.06]}
        fontSize={0.06}
        color="#60A5FA"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
      >
        {project.technologies.join(" • ")}
      </Text>

      {/* Glow effect */}
      <pointLight
        position={[0, 0, 0.5]}
        distance={1.5}
        intensity={0.5}
        color="#3B82F6"
      />
    </group>
  );
};

export default ProjectCard;
