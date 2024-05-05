export const DEFAULT_X_POSITION = 100;
export const DEFAULT_Y_POSITION = 100;
export const INITIAL_FRAME_VALUE = 0;

const DIRECTION_UP = [
	[0 * 32, 0 * 32, 1 * 32, 1 * 32],
	[1 * 32, 0 * 32, 1 * 32, 1 * 32],
] as const;
const DIRECTION_DOWN = [
	[4 * 32, 0 * 32, 1 * 32, 1 * 32],
	[5 * 32, 0 * 32, 1 * 32, 1 * 32],
] as const;
const DIRECTION_RIGHT = [
	[2 * 32, 0 * 32, 1 * 32, 1 * 32],
	[3 * 32, 0 * 32, 1 * 32, 1 * 32],
] as const;
const DIRECTION_LEFT = [
	[6 * 32, 0 * 32, 1 * 32, 1 * 32],
	[7 * 32, 0 * 32, 1 * 32, 1 * 32],
] as const;

export const DISPLAY_WIDTH = 32;
export const DISPLAY_HEIGHT = 32;

export const Direction = {
	Up: DIRECTION_UP,
	Down: DIRECTION_DOWN,
	Right: DIRECTION_RIGHT,
	Left: DIRECTION_LEFT,
};
