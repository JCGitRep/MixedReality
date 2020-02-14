var hololens = new HoloBuild.HoloCamera();
var holoscene = new HoloBuild.HoloSpace();
var holorenderer = new HoloBuild.HoloRenderer();
var loaders = new HoloBuild.HoloLoaders();
var singSpatialsound = HoloBuild.HoloSpatialSound('car.wav');

var car;
singSpatialsound.setVolume(1);
singSpatialsound.playWhenReady();

loaders.loadModel(HoloBuild.loader.OBJ, 'model.obj', function (model) {
    //note that some model could be too large so you need to scale them down otherwise they will not be visible
    car = model;
    
    model.onTap = function(){
    model.showAdjust();
    }
    car.scale.set(0.1, 0.1, 0.1);
    car.position.set(0,0,0);
    holoscene.add(car);
    car.add(singSpatialsound);
}, {
        hotspot: true,
        mtlPath: 'materials.mtl',
        group: true,

});


function renderloop() {
    //btnSing.onTap = singSpatialsound.play();
	window.requestAnimationFrame(renderloop);
    
	holorenderer.render(holoscene, hololens);
    //this.spatialsound.play();

}	
renderloop();
