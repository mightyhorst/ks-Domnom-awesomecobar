import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformdate186',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformdate186.html',
})

export class ReservationFormDate186 {


	reservationformdate186 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformdate186', this.reservationformdate186);
		}





}