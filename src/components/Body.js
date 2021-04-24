import '../index.css';
import React, {Component} from "react"; 
import * as THREE from "three";
import * as dat from 'dat.gui';
import img from '../img/normalMap.png';




class Body extends Component {
  componentDidMount() {

    //debug
    const gui = new dat.GUI()
    //Texture loader (Have to import img above before being used here)
    const textureLoader = new THREE.TextureLoader()
    const normalTexture = textureLoader.load(img)
    //canvas
    const canvas = document.querySelector('canvas.webgl')
    //Create scene
    var scene = new THREE.Scene();
    //Set camera
    //var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

    //Object
    var geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
    
    //Particles@
    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCount = 2000;

    //provide us x,y,z coordinates for each particle (in this case 5000)
    const posArray = new Float32Array (particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++)
    {
      //posArray[i] = Math.random() //ramdom placement
      //posArray[i] = Math.random() - 0.5 //center particles
      posArray[i] = (Math.random() - 0.5) * 5 //scatters paricles
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    //Material for object
    const pmaterial = new THREE.PointsMaterial({size: .001, transparent: true, /*blending: THREE.AdditiveBlending*/})
    var material = new THREE.MeshStandardMaterial({ color: 0xff0000, depthTest: true });
    material.metalness = 0.7
    material.roughness = 0.2
    material.normalMap = normalTexture;
    material.color = new THREE.Color(0x292929)

    //Mesh
    const sphere = new THREE.Mesh(geometry, material); //sphere
    const particlesMesh = new THREE.Points(particlesGeometry, pmaterial); //particles
    scene.add(sphere, particlesMesh);

    //Light 1 wGUI 
    //Make GUI folder
    const light1 = gui.addFolder('Light 1')
    const pointLight1 = new THREE.PointLight(0xffffff, 0.2)
      pointLight1.intensity = .09;
      pointLight1.position.set(3.95,-10,20)
      scene.add(pointLight1)
  
      light1.add(pointLight1.position, 'y').min (-10).max(20).step(.01)
      light1.add(pointLight1.position, 'x').min (-10).max(20).step(.01)
      light1.add(pointLight1.position, 'z').min (-10).max(20).step(.01)
      light1.add(pointLight1, 'intensity').min (-3).max(20).step(.01)

      //const pointLightHelper1 = new THREE.PointLightHelper(pointLight1, .5)
      //scene.add(pointLightHelper1)
    
    

    //Light 2 w/GUI
    const pointLight2 = new THREE.PointLight(0xf0ff, .2)
    const light2 = gui.addFolder('Light 2')
        pointLight2.intensity = 1.1;
        pointLight2.position.set(-10,4.2,-4)
        scene.add(pointLight2)
      
        light2.add(pointLight2.position, 'y').min (-10).max(20).step(.01)
        light2.add(pointLight2.position, 'x').min (-10).max(20).step(.01)
        light2.add(pointLight2.position, 'z').min (-10).max(20).step(.01)
        light2.add(pointLight2, 'intensity').min (-3).max(20).step(.01)

        //const pointLightHelper = new THREE.PointLightHelper(pointLight2, .5)
        //scene.add(pointLightHelper)

    //Light 3 w/GUI
    const pointLight3 = new THREE.PointLight(0xff009a, .2)
    const light3 = gui.addFolder('Light 3')
        pointLight3.intensity = 1.1;
        pointLight3.position.set(20,-10,-10)
        scene.add(pointLight3)
      
        light3.add(pointLight3.position, 'y').min (-10).max(20).step(.01)
        light3.add(pointLight3.position, 'x').min (-10).max(20).step(.01)
        light3.add(pointLight3.position, 'z').min (-10).max(20).step(.01)
        light3.add(pointLight3, 'intensity').min (-3).max(20).step(.01)

        //const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, .5)
        //scene.add(pointLightHelper3)

    //Allow GUI to change colour
    const light1colour = { color : 0xff0000 }
    light1.addColor(light1colour, 'color').onChange(() => {pointLight1.color.set(light1colour.color)})  

    const light2colour = { color : 0xff0000 }
    light2.addColor(light2colour, 'color').onChange(() => {pointLight2.color.set(light2colour.color)})  

    const light3colour = { color : 0xff0000 }
    light3.addColor(light3colour, 'color').onChange(() => {pointLight3.color.set(light3colour.color)})    

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

    //Animate on mouse move
    document.addEventListener('mousemove', onDocumentMouseMove)

    let mouseX = 0
    let mouseY = 0

    let targetX = 0
    let targetY = 0

    const windowX = window.innerWidth/2;
    const windowY = window.innerHeight/2;

    function onDocumentMouseMove(event) 
    {
      mouseX = (event.clientX - windowX)
      mouseY = (event.clientY - windowY)
    }
  
    const clock = new THREE.Clock()

    const updateSphere = (event) => 
    {
      sphere.position.y = window.scrollY * .001
    }
    window.addEventListener('scroll', updateSphere);

    //update
    var update = function( )
    {
      const elapsedTime = clock.getElapsedTime()
      //sphere follows mouse
      targetX = mouseX * .001
      targetY = mouseY * .001

      sphere.rotation.y = 0.5 * elapsedTime;
      //sphere.rotation.x = -0.015 * elapsedTime;
      sphere.rotation.y += .05 * (targetX - sphere.rotation.y)
      sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
      sphere.position.z += -.05 * (targetY - sphere.rotation.x)

      //particles rotation
      particlesMesh.rotation.x = 0.5 * elapsedTime;
      particlesMesh.rotation.x = mouseY * (elapsedTime * .0008)
      particlesMesh.rotation.y = mouseX * (elapsedTime * .0008)
      
      //particlesMesh.rotation.y += .005 * (targetX - particlesMesh.rotation.y)
    };

    var animate = function() 
    {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
      update()
    };

    animate();
  }
    render() 
    {
      return <div ref={ref => (this.mount = ref)} />;
    }
    
}

export default Body