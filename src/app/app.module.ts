import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { TutorDeleteComponent } from './tutor-delete/tutor-delete.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './app-router/app-router.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		TutorDetailComponent,
		TutorDeleteComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		 BrowserModule.withServerTransition({ appId: 'justins-tour-of-tutors' }),
		 AppRouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
