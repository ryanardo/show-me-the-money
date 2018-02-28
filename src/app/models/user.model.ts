export class User {

	public favorites: string[];
	public projects: string[];
	public donations: object[];

	constructor(public name: string, public email: string, public password: string) { }

}
