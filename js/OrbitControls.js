import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from './three.module.js';


const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };

class OrbitControls extends EventDispatcher {

	constructor( object, domElement ) {

		super();

		this.object = object;
		this.domElement = domElement;
		this.domElement.style.touchAction = 'none'; 
		this.enabled = true;
		this.target = new Vector3();
		this.minDistance = 0;
		this.maxDistance = Infinity;

		this.minZoom = 0;
		this.maxZoom = Infinity;
		this.minPolarAngle = 0; 
		this.maxPolarAngle = Math.PI; 

		this.minAzimuthAngle = - Infinity; 
		this.maxAzimuthAngle = Infinity; 

		this.enableDamping = false;
		this.dampingFactor = 0.04;
		this.enableZoom = true;
		this.zoomSpeed = 1.0;
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = true; 
		this.keyPanSpeed = 6.0;

		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; 

		this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

		this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };

		this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		this._domElementKeyEvents = null;


}
}

export { OrbitControls };