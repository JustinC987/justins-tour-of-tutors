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
	rowData: any;

	constructor(private tutorService: TutorService) {}

	columnDefs = [
		{
			headerName: 'Id',
			field: 'id'
		},
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Username', field: 'username' },
		{ headerName: 'Status', field: 'status' }
	];

	ngOnInit() {
		this.getAll();
	}

	getAll(): void {
		this.tutorService.getAll().subscribe(tutors => (this.rowData = tutors));

		this.tutorService.getAll().subscribe(tutors => {
			console.log(tutors);
			this.rowData = tutors;
		});

		console.log(this.rowData);
	}
}
