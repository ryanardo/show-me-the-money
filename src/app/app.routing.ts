import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'admin',
		component: ProjectListComponent
	},
	{
		path: 'user',
		component: LoginComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
