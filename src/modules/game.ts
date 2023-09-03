import View from './view';
import World from './world';

export interface GameConfig {
	world: World;
	view: View;
	levels: unknown[];
}

export default class Game {
	private view!: View;
	private world!: World;
	private levels!: unknown[];
	private activeKeys = new Set<string>();

	constructor({
		view,
		world,
		levels,
	}: GameConfig) {
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

		document.addEventListener(
			'keydown',
			(e: KeyboardEvent) => {
				e.preventDefault();

				switch (e.code) {
					case 'ArrowUp':
					case 'ArrowRight':
					case 'ArrowDown':
					case 'ArrowLeft':
					case 'Space':
					case 'Enter':
						this.activeKeys.add(e.code);
				}
			},
		);

		document.addEventListener(
			'keyup',
			(e: KeyboardEvent) => {
				e.preventDefault();

				switch (e.code) {
					case 'ArrowUp':
					case 'ArrowRight':
					case 'ArrowDown':
					case 'ArrowLeft':
					case 'Space':
					case 'Enter':
						this.activeKeys.delete(e.code);
				}
			},
		);
	}

	private loop(): void {
		//getInput
		this.world.update(this.activeKeys);
		this.view.update(this.world);

		requestAnimationFrame(this.loop);
	}
}
