import { Injectable } from '@angular/core';

import { Tutor } from './tutor';

@Injectable({
	providedIn: 'root'
})
export class TutorService {
	tutors: Tutor[];

	constructor() {
		this.tutors = [
			{
				id: 1,
				name: 'Tom Tester',
				username: 'tomtest',
				status: true
			},
			{
				id: 2,
				name: 'Bill Wester',
				username: 'billwest',
				status: false
			}
		];
	}

	public getAll(): Tutor[] {
		return this.tutors;
	}

	public add(tutor: Tutor): void {
		this.tutors.push(tutor);
	}

	public get(id: number): Tutor {
		const match = this.tutors.filter(tutor => {
			return tutor.id === id;
		});
		return match[0];
	}
}
