var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    scene = new THREE.Scene();
    //Lets place an eye on the scene
    // fov, is the vertical field of view
    // aspect ratio is a relation between the width and the height, each device could have a certain ratio, so this is the relation that help us to see in the correct way what we need
    // near and far frustum are the planes that closes camera view. so the near should be always smaller than the far
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);

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
