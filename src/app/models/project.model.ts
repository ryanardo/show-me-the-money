export class Project {
	public raised: number = 0;
	public ended: boolean = false;
	public contributors: string[] = [''];

	constructor(public title: string,
		public type: string,
		public description: string,
		public swag: string,
		public goal: number,
		public admin: string) { }

}
