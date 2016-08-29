import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformname183',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformname183.html',
})

export class ReservationFormName183 {


	reservationformname183 = { 
		name : 'test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformname183', this.reservationformname183);
		}





}