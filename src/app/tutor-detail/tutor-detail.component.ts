import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';

@Component({
	selector: 'app-tutor-detail',
	templateUrl: './tutor-detail.component.html',
	styleUrls: ['./tutor-detail.component.scss']
})
export class TutorDetailComponent implements OnInit {
	tutor: Tutor;

	constructor(
		private route: ActivatedRoute,
		private tutorService: TutorService
	) {}

	get(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.tutorService.get(id).subscribe(tutor => (this.tutor = tutor));
	}

	ngOnInit() {
		this.get();
	}
}
