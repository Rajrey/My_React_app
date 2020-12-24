import React from "react";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';

class Canvasrobo extends React.Component {
    
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();

      }
 
    componentDidMount() {
    
        var scene, camera, renderer,myCanvas = document.getElementById('myCanvas');
       
        scene = new THREE.Scene();
        var container = document.getElementById( "grid2" );
       
        // scene.fillStyle = "blue";
        camera = new THREE.PerspectiveCamera( 50, container.clientWidth/container.clientHeight);
        
        camera.position.set(0, 0.8, 3);
        
        renderer = new THREE.WebGLRenderer({ canvas: myCanvas, antialias: true });
        
        // renderer.setSize( 400, 400 );
        // renderer.setClearColor("#00000");
        
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setSize(container.clientWidth,container.clientHeight-30,false);
// document.body.appendChild( container );
container.appendChild( renderer.domElement ); 
window.addEventListener( 'resize', onWindowResize, false );


function onWindowResize(){
    // console.log(container)
    try {
        camera.aspect = container.clientWidth/container.clientHeight;
camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth,container.clientHeight-30,false);
// document.body.appendChild( container );
container.appendChild( renderer.domElement ); 
    } catch (error) {
       console.log("viewport")
    }


}
      
        // console.log(renderer)
        
        // document.body.appendChild( renderer.domElement );
        var controls = new OrbitControls(camera,renderer.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 2.2;
        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            // RIGHT: THREE.MOUSE.PAN
        }
        myCanvas.addEventListener('wheel',function(event){
            // console.log("ggggg")
            // console.log(event.wheelDelta )
            if(event.wheelDelta>0){
                window.scrollTo({
                    top: -50,
                    behavior: 'smooth'
                  });
               
            }
            else{
                window.scrollTo({
                    top: 150,
                    behavior: 'smooth'
                  });
            }
         
            
        }, false);
        
        
        controls.update();
      
      
        var light = new THREE.DirectionalLight(0xFFFFFF, 5);
        light.position.setScalar(100);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    // let light1 = new THREE.PointLight(0xffffff,3);
    //         light1.position.set(0,300,500);
    //         scene.add(light1);
    
    //         let light2 = new THREE.PointLight(0xffffff,3);
    //         light2.position.set(500,100,0);
    //         scene.add(light2);
    
    //         let light3 = new THREE.PointLight(0xffffff,3);
    //         light3.position.set(0,100,-500);
    //         scene.add(light3);
    
    //         let light4 = new THREE.PointLight(0xffffff,3);
    //         light4.position.set(-500,300,0);
    //         scene.add(light4);
    var composer = new EffectComposer(renderer);
        var loader = new GLTFLoader();
        // console.log(loader.load('./myroboring2.glb'));
        loader.load('myroboring4.glb', function(gltf){
            scene.add(gltf.scene);
            console.log("gltf.scene", gltf.scene);
            console.log(scene.children)
            // let theResult = scene.getObjectByName("Cube", true);
            let theResult = scene.getObjectByName("BezierCircle001", true);
            // let theResult1 = scene.getObjectByName("BezierCircle001", true);
            // theResult.layers.enable(1);
            // theResult.material.emissiveIntensity = 1;
            // theResult.castShadow = true;
            // theResult.receiveShadow = true;
            theResult.material.emissive = new THREE.Color( 0x1089F6 );
          
            // theResult1.material.emissiveIntensity = 2;
            // theResult1.castShadow = true;
            // theResult1.receiveShadow = true;
            // theResult1.material.emissive = new THREE.Color( 0x00ffff );
            theResult.layers.enable(1);
    // scene.add(theResult);
    let renderScene = new RenderPass( scene, camera )
	
//     let effectFXAA = new ShaderPass( FXAAShader )
// effectFXAA.uniforms.resolution.value.set( 1 / window.innerWidth, 1 / window.innerHeight )
	
let bloomPass = new UnrealBloomPass( theResult, 1.5, 0.4, 0.85 )
bloomPass.threshold = 0.11
bloomPass.strength = 1.2
bloomPass.radius = 0.75
bloomPass.renderToScreen = true
	
composer = new EffectComposer( renderer )
let container = document.getElementById( "grid2" );
composer.setSize( container.clientWidth,container.clientHeight,false )
	
composer.addPass( renderScene )
// composer.addPass( effectFXAA )
composer.addPass( bloomPass )
    //         let godraysEffect = new GodRaysEffect(camera, theResult, {
    // resolutionScale: 1,
    // density: 0.5,
    // decay: 0.95,
    // weight: 0.20,
    // samples: 200
    // });
    // let renderPass = new RenderPass(scene, camera);
    // let effectPass = new EffectPass(camera,godraysEffect);
    // effectPass.renderToScreen = true;
    
    // composer.addPass(renderPass);
    // composer.addPass(effectPass);
    
    
    
    
        },
        // called while loading is progressing
    function ( xhr ) {
    
    // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
    },
    // called when loading has errors
    function ( error ) {
    
    console.log( 'An error happened' );
    
    });
    
    // var x = 100;
    // var y = 100;
    // var lastRender = Date.now();
    function render(){
      
        setTimeout( function() {
            // var delta = Date.now()-lastRender;
            // x+= delta;
            // y+=delta;
            requestAnimationFrame(render);
            if (scene) {
                setTimeout( function() {
                    scene.rotation.y += 0.004;
                }, 1000);
             
          }
         
    // controls.reset();
        }, 1000 / 30 );
    
    
    renderer.autoClear = false;
   
    renderer.clear();
    
    camera.layers.set(1);
    composer.render(0.8);
    renderer.clearDepth();
    camera.layers.set(0);
    // renderer.setClearColor('#000000');
    renderer.render(scene, camera);
    //   if (scene) {
    //     scene.rotation.y += 0.005;
    // }
  
    }
    render();
    // canvas.fillStyle = 'black'
      }
    //   componentDidUpdate() {
    //     console.log("robo update")
    //     this.canvasRef.removeChild(this.renderer.domElement);
    //     cancelAnimationFrame();
    //     // window.removeEventListener('scroll', this.onScroll, false);
     
    //     let container = document.getElementById( "grid2" );
    //     container.removeChild( this.renderer.domElement ); 
    //     // console.log("unmmm")
    //   }
      componentWillUnmount() {
        // console.log("robo")
        // this.canvasRef.removeChild(this.renderer.domElement);
        window.removeEventListener( 'resize', this.onWindowResize, false );
        window.removeEventListener( 'wheel', this.onWindowResize, false );
        // window.removeEventListener( 'resize', this.onWindowResize, false );
      }
      render() {
        return (
<div>

  <canvas id="myCanvas" ref={this.canvasRef} ></canvas>

         </div>
        
        )
    }
}


export default Canvasrobo



