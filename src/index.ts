const confetti = require('canvas-confetti');
import { v4 as uuidv4 } from 'uuid';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
    resize: true,
    useWorker: true,
})({ particleCount: 200, spread: 200 });

console.log(`Unique random id: ${uuidv4()}`);
