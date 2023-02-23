import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class SceneInit {
    particlesGeometry = new THREE.BufferGeometry();
    particlesCnt = 2000;
    mouseY = 0;
    posArray = new Float32Array(this.particlesCnt * 3);
    material = new THREE.PointsMaterial({
        size: 0.01,
    });

    particlesMesh = new THREE.Points(this.particlesGeometry, this.material);

    constructor(canvasId) {
        // NOTE: Core components to initialize Three.js app.
        this.scene = undefined;
        this.camera = undefined;
        this.renderer = undefined;

        // NOTE: Camera params;
        this.fov = 45;
        this.nearPlane = 1;
        this.farPlane = 1000;
        this.canvasId = canvasId;

        // NOTE: Additional components.
        this.clock = undefined;
        this.controls = undefined;

        // NOTE: Lighting is basically required.
        this.ambientLight = undefined;
        this.directionalLight = undefined;
    }

    initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 5;

        const canvas = document.getElementById(this.canvasId);
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            canvas,
            antialias: true,
        });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);

        for (let i = 0; i < this.particlesCnt * 3; i++) {
            this.posArray[i] = (Math.random() - 0.5) * 10;
        }

        this.particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(this.posArray, 3)
        );

        this.scene.add(this.particlesMesh);

        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.ambientLight.castShadow = true;
        this.scene.add(this.ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);

        this.directionalLight.position.set(0, 32, 64);
        this.scene.add(this.directionalLight);

        window.addEventListener("resize", () => this.onWindowResize(), false);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.particlesMesh.rotation.x = this.mouseY;
        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
