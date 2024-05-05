import View from '../modules/view';
import World from '../modules/world';

export interface GameConfig {
	world: World;
	view: View;
	levels: unknown[];
}