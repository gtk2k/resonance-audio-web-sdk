import ResonanceAudio from './resonance-audio.js';
const ac = new AudioContext();
const scene = new ResonanceAudio(ac, {});
scene.createSource()