import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.css'],
	providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
	projects: FirebaseListObservable<any[]>;

	constructor(private router: Router, private projectService: ProjectService) { }

	ngOnInit() {
		this.projects = this.projectService.getAll();
	}

	goToDetailPage(clickedProject) {
		this.router.navigate(['project-detail', clickedProject.$key])
	}

}
