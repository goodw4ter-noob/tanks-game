import { APP_KEYBOARD } from '../types/enums';
import Tank from './tank';

export default class World {
	public player1Tank = new Tank();
	private player2Tank = null;
	private enemyTanks: Tank[] = [];
	private grid: unknown[] = [];

	public update(activeKeys: Set<APP_KEYBOARD>): void {
		this.player1Tank.update(activeKeys);
	}
}
