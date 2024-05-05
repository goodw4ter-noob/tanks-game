import { APP_KEYBOARD } from '../types/enums';
import { GameConfig } from '../types/interfaces';
import View from './view';
import World from './world';

export default class Game {
	private view!: View;
	private world!: World;
	private levels!: unknown[];
	private activeKeys = new Set<APP_KEYBOARD>();

	constructor({ view, world, levels }: GameConfig) {
		this.view = view;
		this.world = world;
		this.levels = levels;

		this.loop = this.loop.bind(this);
	}

	public start(): void {
		requestAnimationFrame(this.loop);
	}

	public async init(): Promise<void> {
		this.view.init();

		document.addEventListener('keydown', (e: KeyboardEvent) => {
			e.preventDefault();

			switch (e.code) {
				case APP_KEYBOARD.ArrowUp:
				case APP_KEYBOARD.ArrowRight:
				case APP_KEYBOARD.ArrowDown:
				case APP_KEYBOARD.ArrowLeft:
				case APP_KEYBOARD.Space:
				case APP_KEYBOARD.Enter:
					this.activeKeys.add(e.code);
			}
		});

		document.addEventListener('keyup', (e: KeyboardEvent) => {
			e.preventDefault();

			switch (e.code) {
				case APP_KEYBOARD.ArrowUp:
				case APP_KEYBOARD.ArrowRight:
				case APP_KEYBOARD.ArrowDown:
				case APP_KEYBOARD.ArrowLeft:
				case APP_KEYBOARD.Space:
				case APP_KEYBOARD.Enter:
					this.activeKeys.delete(e.code);
			}
		});
	}

	private loop(): void {
		//getInput
		this.world.update(this.activeKeys);
		this.view.update(this.world);

		requestAnimationFrame(this.loop);
	}
}
