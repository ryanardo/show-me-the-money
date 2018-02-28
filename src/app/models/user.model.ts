export class User {

	public favorites: string[];
	public donations: object[];

	constructor(public username: string, public email: string, public password: string) { }

}
