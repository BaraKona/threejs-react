import React, {Component} from "react"; 
import ReactDOM from 'react-dom';
import * as THREE from "three";



class Body2 extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
            /*Create a camera. In this case we will create a perspective camera
               This takes as input (Field of view, aspect ratio, near plane, far plane )*/
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            /*Create renderer, eg WebGL, css3D, svg renderer etc*/
            var renderer = new THREE.WebGLRenderer({ antialias: true });
            /*Sets a kind of background*/
            //renderer.setClearColor("#e5e5e5");
            /*Expands render area to the sie of the window*/
            renderer.setSize( window.innerWidth * .60, window.innerHeight *.60);
            document.body.appendChild( renderer.domElement );
            //Make so it resizes if window resizes
            window.addEventListener( 'resize', function( ){
                var width = window.innerWidth * .60;
                var height = window.innerHeight * .60;
                renderer.setSize( width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix( );
            })
            //Adds Controls
            //var controls = new THREE.OrbitControls( camera, renderer.domElement );
            //Create shape (box/cylinder)
            var geometry = new THREE.BoxGeometry( 1, 1, 1, );
            //var geometry1 = new THREE.CylinderGeometry ( 1, 1, 2, 100 );
            var cubeMaterials = 
            [
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } ),
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } ),
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } ),
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } ),
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } ),
                new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load ('./img/img3.jpg'), side: THREE.DoubleSide } )
            ];
            // Create a material colour or image texture
            //var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
            //Meshbasic can be seen regardless if light is present
            var material = new THREE.MeshFaceMaterial( cubeMaterials );
            //var material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
            //Generate cube with specification
            var cube = new THREE.Mesh( geometry, material );
            
            scene.add( cube );
            //scene.add( cylinder );
            // Set camera position
            camera.position.z = 3;
            //game logic (eg rotation, moving etc)
            
            var animate = function() {
                requestAnimationFrame(animate);
          
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
          
                renderer.render(scene, camera);
              };
          
            animate();
            }
            render() {
              return <div ref={ref => (this.mount = ref)} />;
            }
}
export default Body2