import World from './modules/world';
import View from './modules/view';
import Game from './modules/game';
import levels from '../data/levels';
import Sprite from './modules/sprite';

const canvas = document.querySelector('canvas');
const sprite = new Sprite('/sprite.png');

const game = new Game({
	world: new World(),
	view: new View(canvas, sprite),
	levels,
});

game.init().then(() => game.start());
