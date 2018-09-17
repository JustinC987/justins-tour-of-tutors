import { Injectable } from '@angular/core';
import { Tutor } from './tutor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TutorService {
	tutors: Tutor[];

	constructor(private http: HttpClient) {
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

	public getAll(): Observable<Tutor[]> {
		return this.http
			.get<Tutor[]>('http://localhost:3000/api/v1/tutors/')
			.pipe(catchError(this.handleError('Tutor get all failed', [])));
	}

	public add(tutor: Tutor): void {
		this.tutors.push(tutor);
	}

	public get(id: number): Observable<Tutor> {
		return this.http
			.get<Tutor>(`http://localhost:3000/api/v1/tutors/${id}`)
			.pipe(
				tap(_ => this.log(`GET tutor ${id}`)),
				catchError(this.handleError<Tutor>(`GET tutor ${id} failed.`))
			);
	}

	private log(message: string) {
		console.log(`TutorService: ${message}`);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// Error log
			console.error(error);

			// Print message to log
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	onError(error) {
		console.error(error);
	}
}
