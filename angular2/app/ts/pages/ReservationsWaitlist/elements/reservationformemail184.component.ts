import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformemail184',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformemail184.html',
})

export class ReservationFormEmail184 {


	reservationformemail184 = { 
		email : 'test@test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformemail184', this.reservationformemail184);
		}





}