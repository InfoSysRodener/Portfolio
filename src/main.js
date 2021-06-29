import '../style.css'
import * as THREE from 'three';
import * as dat from 'dat.gui';
import SceneManager from './sceneManager/scene';
import gsap from 'gsap';

// const gui = new dat.GUI();

//scene
const canvas = document.querySelector('#canvas');
const scene = new SceneManager(canvas);
scene.addOrbitControl();

//lights
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

const ambiantLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambiantLight);




const clock = new THREE.Clock();

const animate = () => {
	const elapsedTime = clock.getElapsedTime();

	scene.onUpdate();
	scene.onUpdateStats();
	requestAnimationFrame(animate);
};

animate();