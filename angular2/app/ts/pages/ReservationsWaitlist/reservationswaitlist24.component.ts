import { Component, OnInit } from '@angular/core';
import { DataBody } from '/app/js/pages/ReservationsWaitlist/databody.component';


declare var AppController: any;
@Component({
	selector: 'reservationswaitlist24',
	templateUrl: '/app/html/pages/ReservationsWaitlist/reservationswaitlist24.html',
	directives: [
		DataBody,
	],
})

export class ReservationsWaitlist24 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}