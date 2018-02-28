export class Project {

	public raised: number;
	public funded: boolean;
	public contributors: string[];

	constructor(public title: string, public type: string, public description: string, public swag: string, public goal: number, public admin: string) { }

}
