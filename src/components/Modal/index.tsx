import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

interface ModelProps {
    rotation: number;
    texture: THREE.Texture;
}

const Model: React.FC<ModelProps> = ({ rotation, texture }) => {
    const modelRef = useRef<THREE.Group>(null);
    const gltf = useLoader(GLTFLoader, '../../../public/models/scene.glb');

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x = rotation;
        }
    });

    useEffect(() => {
        if (gltf.scene) {
            gltf.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((material) => {
                            (material as THREE.MeshStandardMaterial).map = texture;
                            (material as THREE.MeshStandardMaterial).needsUpdate = true;
                        });
                    } else {
                        const material = child.material as THREE.MeshStandardMaterial;
                        material.map = texture;
                        material.needsUpdate = true;
                    }
                }
            });
        }
    }, [texture, gltf]);

    return <primitive object={gltf.scene} ref={modelRef} />;
};

export default Model;
