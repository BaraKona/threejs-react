import '../index.css';
import React, {Component} from "react"; 
import * as THREE from "three";
import * as dat from 'dat.gui';



class Body extends Component {
  componentDidMount() {

    //debug
    const gui = new dat.GUI()
    //Texture loader
    const textureLoader = new THREE.TextureLoader()
    const normalTexture = textureLoader.load('../img/normalMapF.png')
    //canvas
    const canvas = document.querySelector('canvas.webgl')
    //Create scene
    var scene = new THREE.Scene();
    //Set camera
    //var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

    //Object
    var geometry = new THREE.SphereBufferGeometry(.5, 64, 64);

    //Material for object
    var material = new THREE.MeshStandardMaterial({ color: 0xff0000, });
    material.metalness = 0.7
    material.roughness = 0.2
    material.normalMap = normalTexture;
    material.color = new THREE.Color(0x292929)

    //Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //Light 1 
    //Make GUI folder
    const light1 = gui.addFolder('Light 1')
    const pointLight = new THREE.PointLight(0xffffff, 0.2)
    pointLight.intensity = 1;
    pointLight.position.set(-10,5.58,-3)
    scene.add(pointLight)
  
    light1.add(pointLight.position, 'y').min (-3).max(20).step(.01)
    light1.add(pointLight.position, 'x').min (-10).max(20).step(.01)
    light1.add(pointLight.position, 'z').min (-3).max(20).step(.01)
    light1.add(pointLight, 'intensity').min (-3).max(20).step(.01)

    const pointLightHelper1 = new THREE.PointLightHelper(pointLight, .5)
    scene.add(pointLightHelper1)
    
    

    //Light 2
    const pointLight2 = new THREE.PointLight(0xff0000, .2)
    const light2 = gui.addFolder('Light 2')
        pointLight2.intensity = 2.95;
        pointLight2.position.set(-10,5.58,-3)
        scene.add(pointLight2)
      
        light2.add(pointLight2.position, 'y').min (-3).max(20).step(.01)
        light2.add(pointLight2.position, 'x').min (-10).max(20).step(.01)
        light2.add(pointLight2.position, 'z').min (-3).max(20).step(.01)
        light2.add(pointLight2, 'intensity').min (-3).max(20).step(.01)

        const pointLightHelper = new THREE.PointLightHelper(pointLight2, .5)
        scene.add(pointLightHelper)

    //Sizes
   const sizes = 
    {
       width: window.innerWidth,
       height: window.innerHeight
    }

    //this.mount.appendChild(renderer.domElement);
    //Auto update (eg when screen minimise)
    window.addEventListener('resize', () =>
    {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    //Set camera
      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 2
        scene.add(camera)
    
    //Set rendering
    var renderer = new THREE.WebGLRenderer({canvas : canvas, alpha : true});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    //Scene colour
    //scene.background = new THREE.Color(0xFFE185);


    var animate = function() {
      requestAnimationFrame(animate);

      
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
export default Body