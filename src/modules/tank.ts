import { Direction } from '../types/constants';
import { TDirection } from '../types/types';

export default class Tank {
	public direction: TDirection = Direction.Up[0];
	public x = 100;
	public y = 100;
	public animationFrame = 0;

	public update(activeKeys: Set<string>): void {
		if (activeKeys.has('ArrowUp')) {
			this.move('y', -1, Direction.Up);
		} else if (activeKeys.has('ArrowDown')) {
			this.move('y', 1, Direction.Down);
		} else if (activeKeys.has('ArrowLeft')) {
			this.move('x', -1, Direction.Left);
		} else if (activeKeys.has('ArrowRight')) {
			this.move('x', 1, Direction.Right);
		}
	}

	private move(
		axis: 'x' | 'y',
		value: number,
		direction: readonly [TDirection, TDirection],
	): void {
		this[axis] += value;
		this.animationFrame ^= 1;
		this.direction =
			direction[this.animationFrame];
	}
}
