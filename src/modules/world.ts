import Tank from './tank';

export default class World {
	public player1Tank = new Tank();
	private player2Tank = null;
	private enemyTanks: unknown[] = [];
	private grid: unknown[] = [];

	public update(activeKeys: Set<string>): void {
		this.player1Tank.update(activeKeys);
	}
}
