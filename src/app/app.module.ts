import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AlertModule } from 'ngx-bootstrap';

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
		UserDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig),
		AlertModule.forRoot(),
		AngularFireDatabaseModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
