'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { Vector3, BufferGeometry, BufferAttribute } from 'three';

function NeuralNetwork() {
    const { theme } = useTheme();
    // Reducing particle count for cleaner look and better performance
    const particleCount = 60;
    const connectionDistance = 2.5;
    const moveSpeed = 0.2;

    // Stable color based on theme
    const color = theme === 'dark' ? '#4f46e5' : '#3b82f6'; // Indigo-600 : Blue-500
    const secondaryColor = theme === 'dark' ? '#ec4899' : '#8b5cf6'; // Pink-500 : Violet-500

    // Create initial particles with random positions and velocities
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < particleCount; i++) {
            temp.push({
                position: new Vector3(
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10
                ),
                velocity: new Vector3(
                    (Math.random() - 0.5) * moveSpeed,
                    (Math.random() - 0.5) * moveSpeed,
                    (Math.random() - 0.5) * moveSpeed
                )
            });
        }
        return temp;
    }, []);

    // Refs for geometry
    const particlesRef = useRef<BufferGeometry>(null);
    const linesRef = useRef<BufferGeometry>(null);

    useFrame((state, delta) => {
        // 1. Update positions
        particles.forEach((p) => {
            p.position.addScaledVector(p.velocity, delta);

            // Bounce off imaginary walls to keep them in view
            if (Math.abs(p.position.x) > 8) p.velocity.x *= -1;
            if (Math.abs(p.position.y) > 8) p.velocity.y *= -1;
            if (Math.abs(p.position.z) > 5) p.velocity.z *= -1;
        });

        // 2. Update particle points geometry
        if (particlesRef.current) {
            const positions = new Float32Array(particleCount * 3);
            particles.forEach((p, i) => {
                positions[i * 3] = p.position.x;
                positions[i * 3 + 1] = p.position.y;
                positions[i * 3 + 2] = p.position.z;
            });
            particlesRef.current.setAttribute(
                'position',
                new BufferAttribute(positions, 3)
            );
        }

        // 3. Update connection lines geometry
        if (linesRef.current) {
            const linePositions = [];
            // Naive O(N^2) check - okay for small N (60)
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dist = particles[i].position.distanceTo(particles[j].position);
                    if (dist < connectionDistance) {
                        linePositions.push(
                            particles[i].position.x,
                            particles[i].position.y,
                            particles[i].position.z
                        );
                        linePositions.push(
                            particles[j].position.x,
                            particles[j].position.y,
                            particles[j].position.z
                        );
                    }
                }
            }
            linesRef.current.setAttribute(
                'position',
                new BufferAttribute(new Float32Array(linePositions), 3)
            );
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* Nodes */}
            <points>
                <bufferGeometry ref={particlesRef} />
                <pointsMaterial
                    size={0.12}
                    color={color}
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>
            {/* Connections using LineSegments */}
            <lineSegments>
                <bufferGeometry ref={linesRef} />
                <lineBasicMaterial
                    color={secondaryColor}
                    transparent
                    opacity={0.25}
                    linewidth={1}
                />
            </lineSegments>
        </group>
    );
}

export function Background3D() {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <NeuralNetwork />
            </Canvas>
        </div>
    );
}
