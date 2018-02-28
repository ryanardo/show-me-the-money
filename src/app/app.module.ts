import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		FavoritesComponent,
		ProjectListComponent,
		ProjectDetailComponent,
		LoginComponent,
		FeatureComponent,
		UserDetailComponent
	],
	imports: [
		NgModule,
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
