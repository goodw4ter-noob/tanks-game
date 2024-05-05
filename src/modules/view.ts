import { DISPLAY_HEIGHT, DISPLAY_WIDTH } from '../types/constants';
import Sprite from './sprite';
import Tank from './tank';
import World from './world';

export default class View {
	private canvas!: HTMLCanvasElement;
	private context!: CanvasRenderingContext2D;
	private sprite!: Sprite;

	constructor(canvas: HTMLCanvasElement | null, sprite: Sprite) {
		if (!canvas) throw new Error('Не обнаружен объект canvas');

		this.canvas = canvas;
		this.context = canvas.getContext('2d')!;
		this.sprite = sprite;
	}

	public update(world: World): void {
		this.clearScreen();
		this.renderPlayer1Tank(world.player1Tank);
	}

	public async init(): Promise<void> {
		await this.sprite.load();
	}

	private renderPlayer1Tank(tank: Tank): void {
		this.context.drawImage(
			this.sprite.image,
			...tank.direction,
			tank.x,
			tank.y,
			DISPLAY_WIDTH,
			DISPLAY_HEIGHT,
		);
	}

	private clearScreen(): void {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
