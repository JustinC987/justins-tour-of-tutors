import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMasterComponent } from './tutor-master.component';

describe('TutorMasterComponent', () => {
	let component: TutorMasterComponent;
	let fixture: ComponentFixture<TutorMasterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TutorMasterComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TutorMasterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
