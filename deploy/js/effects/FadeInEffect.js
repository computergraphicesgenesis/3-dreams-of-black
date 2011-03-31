var FadeInEffect = function ( hex, shared ) {

	SequencerItem.call( this );

	var camera, scene, material, object,
	renderer = shared.renderer, renderTarget = shared.renderTarget;

	this.init = function( callback ) {

		camera = new THREE.Camera( 60, 1, 1, 10000 );
		camera.position.z = 2;

		scene = new THREE.Scene();

		material = new THREE.MeshBasicMaterial( { color: hex, opacity: 0, depthTest: false } );

		object = new THREE.Mesh( new Plane( 3, 3 ), material );
		scene.addObject( object );

	};

	this.update = function ( f ) {

		material.opacity = f;
		renderer.render( scene, camera, renderTarget );

	};

};

FadeInEffect.prototype = new SequencerItem();
FadeInEffect.prototype.constructor = FadeInEffect;
