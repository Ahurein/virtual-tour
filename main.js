const imageContainer = document.querySelector(".image-container");

const front = new PANOLENS.ImagePanorama('/images/takoradi_front.jpg');
const frontLeft = new PANOLENS.ImagePanorama('/images/takoradi_frontl.jpg');
const frontRight = new PANOLENS.ImagePanorama('/images/takoradi_frontr.jpg');
const leftMiddle = new PANOLENS.ImagePanorama('/images/takoradi_leftm.jpg');
const leftEnd = new PANOLENS.ImagePanorama('/images/takoradi_leftend.jpg');
const rightStart = new PANOLENS.ImagePanorama('/images/takoradi_rights.jpg');
const rightMiddle = new PANOLENS.ImagePanorama('/images/takoradi_rightm.jpg');


const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: false,
  // autoRotateSpeed: 0.3,
  controlBar: false,
  cameraFov: 100
});
viewer.add(front);
viewer.add(rightStart)
viewer.add(frontRight);
viewer.add(rightMiddle)
viewer.add(frontLeft);
viewer.add(leftEnd);
viewer.add(leftMiddle);

// Linking between panoramas
front.link(frontLeft, new THREE.Vector3(535.23, 1.40, -50.48), 45);
front.link(frontRight, new THREE.Vector3(-535.23, -21.40, -50.48), 45);

frontLeft.link(leftMiddle, new THREE.Vector3(0, 1.40, -700.48), 25);
leftMiddle.link(frontLeft, new THREE.Vector3(500, 1.40, 100.48), 25);
leftMiddle.link(leftEnd, new THREE.Vector3(-500, 1.40, 10.48), 25);
frontRight.link(rightStart, new THREE.Vector3(-300, -21.40, -50.48), 45);
rightStart.link(rightMiddle, new THREE.Vector3(1000, -21.40, 30.48), 45);

// reverse
frontLeft.link(front, new THREE.Vector3(-205.23, 1.40, -10.48), 25);
leftEnd.link(leftMiddle, new THREE.Vector3(500, 1.40, 10.48), 25);
frontRight.link(front, new THREE.Vector3(800.23, -21.40, -50.48), 45);
rightMiddle.link(rightStart, new THREE.Vector3(-1000, -21.40, 30.48), 45);

rightStart.link(frontRight, new THREE.Vector3(-300, -21.40, -50.48), 45);