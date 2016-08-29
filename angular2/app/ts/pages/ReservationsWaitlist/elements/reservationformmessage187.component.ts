import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformmessage187',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformmessage187.html',
})

export class ReservationFormMessage187 {


	reservationformmessage187 = { 
		message : 'test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformmessage187', this.reservationformmessage187);
		}





}