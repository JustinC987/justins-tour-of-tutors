import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { TutorMasterComponent } from '../tutor-master/tutor-master.component';
import { TutorDetailComponent } from '../tutor-detail/tutor-detail.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},

	{
		path: 'about',
		component: AboutComponent
	},

	{
		path: 'tutors',
		component: TutorMasterComponent
	},
	{
		path: 'tutors/:id',
		component: TutorDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouterModule {}
