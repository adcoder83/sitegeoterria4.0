// Fond animé "vagues fluides" — GÉOTERRIA v2, moderne et épuré

const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
let waves = [];
const waveCount = 3;
const colors = [
  'rgba(64,176,255,0.16)', // Bleu clair accent
  'rgba(18,81,178,0.09)',  // Bleu profond principal
  'rgba(220,235,250,0.13)', // Blanc bleuâtre
];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

function initWaves() {
  waves = [];
  for (let i = 0; i < waveCount; i++) {
    waves.push({
      amplitude: 28 + 24 * i,
      length: 0.007 + 0.003 * i,
      speed: 0.28 + 0.07 * i,
      phase: Math.random() * Math.PI * 2,
      color: colors[i % colors.length],
      offsetY: height * (0.58 + i*0.09),
    });
  }
}
initWaves();
window.addEventListener('resize', initWaves);

function drawWaves(time) {
  ctx.clearRect(0, 0, width, height);
  waves.forEach(wave => {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 2) {
      const y =
        Math.sin(wave.phase + (x * wave.length) + time * wave.speed) * wave.amplitude
        + wave.offsetY;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = wave.color;
    ctx.fill();
  });
}

function animate() {
  const now = performance.now() / 1000;
  drawWaves(now);
  requestAnimationFrame(animate);
}
animate();