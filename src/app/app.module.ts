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
import { TutorMasterComponent } from './tutor-master/tutor-master.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		TutorDetailComponent,
		TutorDeleteComponent,
		HeaderComponent,
		FooterComponent,
		TutorMasterComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'justins-tour-of-tutors' }),
		AppRouterModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
