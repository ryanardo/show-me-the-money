import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './../models/project.model';

@Injectable()
export class ProjectService {

	projects: FirebaseListObservable<any[]>;

	constructor(private database: AngularFireDatabase) {
		this.projects = database.list('projects');
	}

	addProject(newProject: Project) {
		this.projects.push(newProject);
	}

	getAll() {
		return this.projects;
	}

	getProjectById(projectId: string) {
		return this.database.object('projects/' + projectId);
	}

	updateProject(localUpdatedProject) {
		let projectInFirebase = this.getProjectById(localUpdatedProject.$key);
		projectInFirebase.update({
			title: localUpdatedProject.title,
			type: localUpdatedProject.type,
			description: localUpdatedProject.description,
			swag: localUpdatedProject.swag,
			goal: localUpdatedProject.goal,
			raised: localUpdatedProject.raised,
			ended: localUpdatedProject.ended,
			contributors: localUpdatedProject.contributors
		});
	}

	deleteProject(localProjectToDelte) {
		let projectInFirebase = this.getProjectById(localProjectToDelte.$key);
		projectInFirebase.remove();
	}

}
