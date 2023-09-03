export default class Sprite {
	private src!: string;
	public image!: HTMLImageElement;

	constructor(src: string) {
		this.src = src;
		this.image = new Image();
	}

	public async load(): Promise<unknown> {
		return new Promise((res, rej) => {
			this.image.src = this.src;
			this.image.addEventListener('load', () =>
				res(this),
			);
		});
	}
}
