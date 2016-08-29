import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformbutton188',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformbutton188.html',
})

export class ReservationFormButton188 {


	reservationformbutton188 = { 
		buttonName : 'Reserve Table',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformbutton188', this.reservationformbutton188);
		}





}