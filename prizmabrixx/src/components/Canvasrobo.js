import React from "react";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper';
// import CircularProgress from '@material-ui/core/CircularProgress';
class Canvasrobo extends React.Component {
    
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
        // this.state = { loading: true }
      }

    componentDidMount() {
    
        var scene, camera, renderer,myCanvas = document.getElementById('myCanvas');
        scene = new THREE.Scene();
        var container = document.getElementById( "grid2" );
        // const loadingManager = new THREE.LoadingManager( () => {
	
        //     const loadingScreen = document.getElementById( 'preloader' );
        //     loadingScreen.classList.add( 'fade-out' );
            
        //     // optional: remove loader from DOM via event listener
        //     loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
            
        // } );
        // const loader = new THREE.ColladaLoader( loadingManager );
        // var context = canvas.getContext( 'webgl2', { alpha: false } );
        // scene.fillStyle = "blue";
        // camera = new THREE.PerspectiveCamera( 50, container.clientWidth/container.clientHeight,1, 10000);
        camera = new THREE.PerspectiveCamera( 50, container.clientWidth/container.clientHeight,1, 1000,false);
        // camera.position.set(2, 0.9, 3);
        camera.position.set(2, 1.3, 3);
        
        renderer = new THREE.WebGLRenderer({ canvas: myCanvas, antialias: true , preserveDrawingBuffer: false,
            alpha:true,
            // devicePixelRatio: 1, 
        // powerPreference:"high-performance"
        });
            // console.log(myCanvas.devicePixelRatio);
            // console.log(window.devicePixelRatio);
        // renderer.setPixelRatio(1);
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize( 400, 400 );
        renderer.setClearColor(0x060f29);
        renderer.autoClear = false;
        // renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setSize(container.clientWidth,container.clientHeight,false);
// document.body.appendChild( container );
container.appendChild( renderer.domElement ); 
window.addEventListener( 'resize', onWindowResize, false );


function onWindowResize(){
    // console.log(container)
    try {
        camera.aspect = container.clientWidth/container.clientHeight;
camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth,container.clientHeight,false);
// renderer.setPixelRatio(1);
renderer.setPixelRatio(window.devicePixelRatio);
// document.body.appendChild( container );
container.appendChild( renderer.domElement ); 
// render();
    } catch (error) {
       console.log("viewport")
    }


}
        var controls = new OrbitControls(camera,renderer.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 2.2;
        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
        }
        myCanvas.addEventListener('wheel',function(event){
            if(event.wheelDelta>0){
                window.scrollBy({
                    top: -120,
                    behavior: 'smooth'
                  });
               
            }
            else{
                window.scrollBy({
                    top: 200,
                    behavior: 'smooth'
                  });
            }
         
            
        }, false);
        
        controls.enableDamping = true;
			controls.target.set( 0, 0, 0 );
			controls.maxPolarAngle = Math.PI / 1.05;   
			controls.screenSpacePanning = true;
        controls.update();
      
      
        var light = new THREE.DirectionalLight(0xFFFFFF, 5);
        light.position.setScalar(100);
    scene.add(light);
    // scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    // let light1 = new THREE.PointLight(0xffffff,1);
    //         light1.position.set(0,300,500);
    //         scene.add(light1);
    
    //         let light2 = new THREE.PointLight(0xffffff,1);
    //         light2.position.set(500,100,0);
    //         scene.add(light2);


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
    // const roughnessMipmapper = new RoughnessMipmapper( renderer );
        var loader = new GLTFLoader();
        // console.log(loader.load('./myroboring2.glb'));
        loader.load('prizma1.glb', function(gltf){
            scene.add(gltf.scene);
            // console.log("gltf.scene", gltf.scene);
            // console.log(scene.children)
            let theResult = scene.getObjectByName("BezierCircle001", true);
            theResult.material.emissive = new THREE.Color( 0xfec82a );
            theResult.layers.enable(1);
    // scene.add(theResult);
//     effectFXAA = new THREE.ShaderPass( THREE.ShaderExtras[ "fxaa" ] );

// effectFXAA.uniforms[ 'resolution' ].value.set( 1 / container.clientWidth, 1 / container.clientHeight );
// effectFXAA.renderToScreen = true;

    let renderScene = new RenderPass( scene, camera )
let bloomPass = new UnrealBloomPass( theResult, 1.5, 0.4, 0.85 )
bloomPass.threshold = 0.11
bloomPass.strength = 0.5
bloomPass.radius = 0.20
bloomPass.renderToScreen = true
	
composer = new EffectComposer( renderer )
let container = document.getElementById( "grid2" );
composer.setSize( container.clientWidth,container.clientHeight )
	
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
    
    // roughnessMipmapper.dispose();
    render();
    // .then(() => this.setState({ loading: false }));
    
        },
        // called while loading is progressing
    function ( xhr ) {
        const loadingScreen = document.getElementById( 'preloader' );
        if(loadingScreen != null){
            loadingScreen.outerHTML = "";
        }
    
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
                    controls.update();
                    scene.rotation.y += 0.004;
                }, 1000);
             
          }
         
    // controls.reset();
        }, 1000 / 30 );
    
    
    // renderer.autoClear = false;
   
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
    // function onTransitionEnd( event ) {

    //     const element = event.target;
    //     element.remove();
        
    // }
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
        // this.canvasRef.removeChild(document.getElementById('myCanvas'));
        // cancelAnimationFrame(render);
        var elem = document.getElementById("myCanvas");
elem.parentNode.removeChild(elem);
        window.removeEventListener( 'resize', this.onWindowResize, false );
        window.removeEventListener( 'wheel', this.onWindowResize, false );
        // window.removeEventListener( 'resize', this.onWindowResize, false );
      }
   
      render() {
//    const {loading } = this.state;
//    if (loading) {
//     return  <CircularProgress color="secondary"/>
// }
        return (
<div style={{overflow:"hidden"}}>
<div id="preloader" >
  <div id="loader" style={{textAlign:"center"}}></div>
</div>
  <canvas id="myCanvas" ref={this.canvasRef} >
 
  </canvas>

         </div>
        
        )
    }
}


export default Canvasrobo



