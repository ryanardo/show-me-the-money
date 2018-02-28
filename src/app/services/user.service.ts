import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
	users: FirebaseListObservable<any[]>;

	constructor(private database: AngularFireDatabase) {
		this.users = database.list('users');
	}

	create(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

			console.log(error.message);
		});
	}

	logOut() {
		firebase.auth().signOut().then(function() {
			alert("signOut successful!")
		}).catch(function(error) {
			console.log(error.message)
		});
	}

}
