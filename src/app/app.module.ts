import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		 BrowserModule.withServerTransition({ appId: 'justins-tour-of-tutors' })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
