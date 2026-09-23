import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3DTiles() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Position camera head-on with subtle elevation for a clean 3D architectural look
    camera.position.set(0, -5, 36);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Studio Lighting for sleek 3D tile highlights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight1.position.set(20, 30, 40);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3e3d3a, 1.5);
    dirLight2.position.set(-20, -25, -15);
    scene.add(dirLight2);

    // Dark Base Backdrop Plane to prevent white background from leaking through gaps
    const basePlaneGeo = new THREE.PlaneGeometry(250, 250);
    const basePlaneMat = new THREE.MeshBasicMaterial({ color: 0x161615 });
    const basePlane = new THREE.Mesh(basePlaneGeo, basePlaneMat);
    basePlane.position.z = -5;
    scene.add(basePlane);

    // Grid of MASSIVE, ZERO-GAP TIGHTLY TOUCHING 3D TILES
    const cols = 12;
    const rows = 9;
    const tileSize = 8.5; // Massive tiles
    const tileDepth = 4.0; // Deep 3D box thickness
    const gap = -0.05; // Slight overlap to ensure NO GAPS EVER

    const tilesGroup = new THREE.Group();
    const tiles = [];

    const geometry = new THREE.BoxGeometry(tileSize, tileSize, tileDepth);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i - cols / 2) * (tileSize + gap);
        const y = (j - rows / 2) * (tileSize + gap);

        const material = new THREE.MeshStandardMaterial({
          color: 0x1f1f1d,
          roughness: 0.25,
          metalness: 0.15,
          transparent: true,
          opacity: 0.95,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, 0);
        mesh.userData = {
          baseX: x,
          baseY: y,
          gridX: i,
          gridY: j,
        };

        tilesGroup.add(mesh);
        tiles.push(mesh);
      }
    }

    scene.add(tilesGroup);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime() * 0.8;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Tightly Synchronized Undulation across Seamless 3D Tiles
      tiles.forEach((tile) => {
        const { gridX, gridY, baseX, baseY } = tile.userData;

        // Synchronized Harmonic Diagonal Wave
        const syncWave = Math.sin(time + (gridX + gridY) * 0.22);
        
        // Interactive Ripple from Cursor
        const mouseDist = Math.hypot(baseX - mouse.x * 20, baseY - mouse.y * 20);
        const mouseEffect = Math.max(0, 1 - mouseDist / 14) * 1.5;

        // Synchronized elevation & subtle tilt keeping edges touching seamlessly
        tile.position.z = syncWave * 1.2 + mouseEffect;
        tile.rotation.x = (syncWave + mouseEffect) * 0.08 + mouse.y * 0.05;
        tile.rotation.y = (syncWave + mouseEffect) * 0.08 + mouse.x * 0.05;
      });

      // Subtle group tilt responding smoothly to cursor
      tilesGroup.rotation.y = mouse.x * 0.05;
      tilesGroup.rotation.x = mouse.y * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      basePlaneGeo.dispose();
      basePlaneMat.dispose();
      tiles.forEach((t) => t.material.dispose());
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-25 transition-opacity duration-1000"
    />
  );
}
