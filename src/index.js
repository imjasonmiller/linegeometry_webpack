import { Scene, WebGLRenderer, PerspectiveCamera, Mesh } from "three";
import { LineGeometry, LineMaterial, LineSegments2 } from "three-stdlib";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const mat = new LineMaterial({ color: 0xfefefe, linewidth: 0.0125 });
const geo = new LineGeometry().setPositions([0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);

const mesh = LineSegments2(geo, mat);

scene.add(mesh);

document.body.appendChild(renderer.domElement);
