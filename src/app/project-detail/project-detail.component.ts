import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './../models/project.model';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css'],
	providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

	projectToDisplay;
	projectKey: string;

	constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
			this.projectKey = urlParameters['id'];
			console.log(this.projectKey)
		});
		this.projectService.getProjectById(this.projectKey).subscribe(dataLastEmittedFromObserver => {
			this.projectToDisplay = dataLastEmittedFromObserver
			console.log(this.projectToDisplay)
		})
		// this.projectToDisplay = this.projectService.getProjectById(this.projectKey);
	}

	donate(value) {
		console.log(this.projectToDisplay);
		this.projectToDisplay.raised += parseInt(value);
		this.projectService.updateProject(this.projectToDisplay);
	}

}
