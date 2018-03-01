import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './../models/project.model';
import { ProjectService } from './../services/project.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css'],
	providers: [
		AuthService,
		ProjectService
	]
})
export class UserDetailComponent implements OnInit {

	email;
	uid;

	constructor(private authService: AuthService, private projectService: ProjectService) { }
	ngOnInit() {
		this.authService.user.subscribe(dataLastEmmitedFromObserver => {
			this.email = dataLastEmmitedFromObserver.email;
			this.uid = dataLastEmmitedFromObserver.uid;
		});
	}

	submitForm(title: string, type: string, description: string, swag: string, goal: string) {
		let newProject: Project = new Project(title, type, description, swag, parseInt(goal), this.uid);
		this.projectService.addProject(newProject);
	}



}
