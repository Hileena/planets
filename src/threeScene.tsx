import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Button from "@mui/material/Button";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isRotatingRef = useRef(false);
  const cameraTargetZRef = useRef(7);
  const [isRotating, setIsRotating] = useState(false);

  function toggleRotation() {
    isRotatingRef.current = !isRotatingRef.current;
    setIsRotating(isRotatingRef.current);
    cameraTargetZRef.current = isRotatingRef.current ? 20 : 7;
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();

    const sizes = { width: canvas.clientWidth, height: canvas.clientHeight };

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100,
    );
    camera.position.set(1, 1, 7);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader();

    const sunTexture = textureLoader.load("/public/textures/sun.jpg");
    sunTexture.colorSpace = THREE.SRGBColorSpace;
    const mercuryTexture = textureLoader.load("/public/textures/mercury.jpg");
    mercuryTexture.colorSpace = THREE.SRGBColorSpace;
    const venusTexture = textureLoader.load("/public/textures/venus.jpg");
    venusTexture.colorSpace = THREE.SRGBColorSpace;
    const earthTexture = textureLoader.load("/public/textures/earth.jpg");
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const marsTexture = textureLoader.load("/public/textures/mars.jpg");
    marsTexture.colorSpace = THREE.SRGBColorSpace;
    const jupiterTexture = textureLoader.load("/public/textures/jupiter.jpg");
    jupiterTexture.colorSpace = THREE.SRGBColorSpace;
    const saturnTexture = textureLoader.load("/public/textures/saturn.jpg");
    saturnTexture.colorSpace = THREE.SRGBColorSpace;
    const uranusTexture = textureLoader.load("/public/textures/uranus.jpg");
    uranusTexture.colorSpace = THREE.SRGBColorSpace;
    const neptuneTexture = textureLoader.load("/public/textures/neptune.jpg");
    neptuneTexture.colorSpace = THREE.SRGBColorSpace;

    /**
     * Planets
     */
    const solarSystem = new THREE.Group();

    const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sunMaterial = new THREE.MeshMatcapMaterial({ matcap: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    solarSystem.add(sun);

    const mercuryGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const mercuryMaterial = new THREE.MeshMatcapMaterial({
      matcap: mercuryTexture,
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.x = 1.8;
    solarSystem.add(mercury);

    const venusGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const venusMaterial = new THREE.MeshMatcapMaterial({
      matcap: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.x = 2.6;
    solarSystem.add(venus);

    const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const earthMaterial = new THREE.MeshMatcapMaterial({
      matcap: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = 3.5;
    solarSystem.add(earth);

    const marsGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const marsMaterial = new THREE.MeshMatcapMaterial({ matcap: marsTexture });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.x = 4.8;
    solarSystem.add(mars);

    const jupiterGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const jupiterMaterial = new THREE.MeshMatcapMaterial({
      matcap: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.x = 7.0;
    solarSystem.add(jupiter);

    const saturnGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const ringGeometry = new THREE.RingGeometry(0.45, 0.6, 32);
    const saturnMaterial = new THREE.MeshMatcapMaterial({
      matcap: saturnTexture,
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    const ringMaterial = new THREE.MeshMatcapMaterial({
      matcap: saturnTexture,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    saturn.add(ring);
    saturn.position.x = 9.5;
    solarSystem.add(saturn);

    const uranusGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const uranusMaterial = new THREE.MeshMatcapMaterial({
      matcap: uranusTexture,
    });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.x = 12.0;
    solarSystem.add(uranus);

    const neptuneGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const neptuneMaterial = new THREE.MeshMatcapMaterial({
      matcap: neptuneTexture,
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.x = 14.5;
    solarSystem.add(neptune);

    const box = new THREE.Box3().setFromObject(solarSystem);
    const center = box.getCenter(new THREE.Vector3());
    solarSystem.position.sub(center);

    scene.add(solarSystem);

    const handleResize = () => {
      sizes.width = canvas.clientWidth;
      sizes.height = canvas.clientHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    const startTime = performance.now();

    let animFrameId: number;
    const tick = () => {
      const t = (performance.now() - startTime) / 1000;

      if (isRotatingRef.current) {
        sun.rotation.y = t * 0.1;
        mercury.rotation.y = t * 2.0;
        venus.rotation.y = t * 1.5;
        earth.rotation.y = t * 1.0;
        mars.rotation.y = t * 0.9;
        jupiter.rotation.y = t * 0.8;
        saturn.rotation.y = t * 0.7;
        uranus.rotation.y = t * 0.6;
        neptune.rotation.y = t * 0.5;

        mercury.position.set(
          Math.cos(t * 1.2) * 1.8,
          0,
          Math.sin(t * 1.2) * 1.8,
        );
        venus.position.set(Math.cos(t * 0.8) * 2.6, 0, Math.sin(t * 0.8) * 2.6);
        earth.position.set(Math.cos(t * 0.6) * 3.5, 0, Math.sin(t * 0.6) * 3.5);
        mars.position.set(Math.cos(t * 0.4) * 4.8, 0, Math.sin(t * 0.4) * 4.8);
        jupiter.position.set(
          Math.cos(t * 0.2) * 7.0,
          0,
          Math.sin(t * 0.2) * 7.0,
        );
        saturn.position.set(
          Math.cos(t * 0.13) * 9.5,
          0,
          Math.sin(t * 0.13) * 9.5,
        );
        uranus.position.set(
          Math.cos(t * 0.08) * 12.0,
          0,
          Math.sin(t * 0.08) * 12.0,
        );
        neptune.position.set(
          Math.cos(t * 0.05) * 14.5,
          0,
          Math.sin(t * 0.05) * 14.5,
        );
      }

      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        cameraTargetZRef.current,
        0.05,
      );

      controls.update();
      renderer.render(scene, camera);
      animFrameId = window.requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animFrameId);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <Button
        onClick={toggleRotation}
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          // transform: "translateX(-50%)",
        }}
        variant="outlined"
      >
        {isRotating ? "Stop Rotation" : "Start Rotation"}
      </Button>
    </>
  );
}
