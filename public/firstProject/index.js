var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    scene = new THREE.Scene();
    //Lets place an eye on the scene
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);

    //The position of the eye would be in this z position
    camera.position.z = 1000;

    //The box would be of 200 each face
    geometry = new THREE.BoxGeometry(200, 200, 200);

    //The material that we want for our box, is a red color wireframe
    material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });

    //We apply that material to the geometry corp
    mesh = new THREE.Mesh(geometry, material);

    //Add the result of this geometry with the material to the scene
    scene.add(mesh);

    //Lets call webgl to render the scene
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //The renderer now is appended to the dom only once
    document.body.appendChild(renderer.domElement);
}

// Every time we animate our mesh of the scene, and we show the results with the camera and the scene
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
}
