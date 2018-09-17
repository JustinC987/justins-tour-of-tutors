import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from '../tutor';

@Component({
	selector: 'app-tutor-master',
	templateUrl: './tutor-master.component.html',
	styleUrls: ['./tutor-master.component.scss']
})
export class TutorMasterComponent implements OnInit {
	tutors: Tutor[];

	constructor(private tutorService: TutorService) {}

	ngOnInit() {
		this.getAll();
	}

	getAll(): void {
		this.tutorService.getAll().subscribe(tutors => (this.tutors = tutors));
	}
}
