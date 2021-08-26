import '../style.css'
import 'virtual:windi.css'
import * as THREE from 'three';
import SceneManager from './sceneManager/scene';

import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

/**
 * Scene
 */
const canvas = document.querySelector('#canvas');
const scene = new SceneManager(canvas);
// scene.addOrbitControl();

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);
const ambiantLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambiantLight);


/**
 * Mesh
 */
const sphere = new THREE.Mesh( 
	new THREE.SphereBufferGeometry(10,36,36), 
	new THREE.ShaderMaterial({
		uniforms:{
			uTexture:{value: new THREE.TextureLoader().load('./texture/moon/moon_texture.png')}	
		},
		vertexShader,
		fragmentShader,
	})
);
 
scene.add(sphere);


/**
 * Animation
 */
const clock = new THREE.Clock();

const animate = () => {
	const elapsedTime = clock.getElapsedTime();

	sphere.rotation.x = elapsedTime * 0.1;
	sphere.rotation.y = elapsedTime * 0.1;

	scene.onUpdate();
	scene.onUpdateStats();
	requestAnimationFrame(animate);
};

animate();