import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService]
})

export class LoginComponent implements OnInit {

	user = {
		email: '',
		password: ''
	};

	constructor(private authService: AuthService, private router: Router) {
	}

<<<<<<< HEAD
=======
	signInWithFacebook() {
		this.authService.signInWithFacebook()
			.then((res) => {
				this.router.navigate(['dashboard'])
			})
			.catch((err) => console.log(err));
	}

>>>>>>> e842913dcac05cb9bfdf533a3c669e9e24b260f5
	signInWithGoogle() {
		this.authService.signInWithGoogle()
			.then((res) => {
				this.router.navigate(['dashboard'])
			})
			.catch((err) => console.log(err));
	}

	signInWithEmail() {
		this.authService.signInRegular(this.user.email, this.user.password)
			.then((res) => {
				console.log(res);

				this.router.navigate(['dashboard']);
			})
			.catch((err) => console.log('error: ' + err));
	}

	ngOnInit() {
	}

}
