import {
	DEFAULT_X_POSITION,
	DEFAULT_Y_POSITION,
	Direction,
	INITIAL_FRAME_VALUE,
} from '../types/constants';
import { APP_KEYBOARD } from '../types/enums';
import { AxisUnion, TDirection } from '../types/types';

export default class Tank {
	public direction: TDirection = Direction.Up[0];
	public x = DEFAULT_X_POSITION;
	public y = DEFAULT_Y_POSITION;
	public animationFrame = INITIAL_FRAME_VALUE;

	public update(activeKeys: Set<APP_KEYBOARD>): void {
		if (activeKeys.has(APP_KEYBOARD.ArrowUp)) {
			this.move('y', -1, Direction.Up);
		} else if (activeKeys.has(APP_KEYBOARD.ArrowDown)) {
			this.move('y', 1, Direction.Down);
		} else if (activeKeys.has(APP_KEYBOARD.ArrowLeft)) {
			this.move('x', -1, Direction.Left);
		} else if (activeKeys.has(APP_KEYBOARD.ArrowRight)) {
			this.move('x', 1, Direction.Right);
		}
	}

	private move(
		axis: AxisUnion,
		value: number,
		direction: readonly [TDirection, TDirection],
	): void {
		this[axis] += value;
		this.animationFrame ^= 1;
		this.direction = direction[this.animationFrame];
	}
}
