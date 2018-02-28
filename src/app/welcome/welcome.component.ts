import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css'],
	providers: [UserService]
})
export class WelcomeComponent implements OnInit {

	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
	}

	submitForm(newEmail: string, newPassword: string, name: string) {
		let newUser = new User(newEmail, newPassword, name);
		this.userService.create(newUser.email, newUser.password);
	}

}
