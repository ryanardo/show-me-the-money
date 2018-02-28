import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AlertModule } from 'ngx-bootstrap';

import { WelcomeComponent } from './welcome/welcome.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FeatureComponent } from './feature/feature.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const firebaseConfig = {
	apiKey: masterFirebaseConfig.apiKey,
	authDomain: masterFirebaseConfig.authDomain,
	databaseURL: masterFirebaseConfig.databaseURL,
	storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		FavoritesComponent,
		ProjectListComponent,
		ProjectDetailComponent,
		LoginComponent,
		FeatureComponent,
		UserDetailComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		AngularFireModule.initializeApp(masterFirebaseConfig, 'angular-auth-firebase'),
		AlertModule.forRoot(),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
