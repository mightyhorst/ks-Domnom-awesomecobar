import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'orderspayments21',
	templateUrl: '/app/html/pages/OrdersPayments/orderspayments21.html',
})

export class OrdersPayments21 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}