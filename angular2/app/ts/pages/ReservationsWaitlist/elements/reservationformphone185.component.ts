import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformphone185',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformphone185.html',
})

export class ReservationFormPhone185 {


	reservationformphone185 = { 
		phone : '123123',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformphone185', this.reservationformphone185);
		}





}