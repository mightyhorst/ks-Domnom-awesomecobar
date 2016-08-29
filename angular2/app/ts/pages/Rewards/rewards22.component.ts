import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'rewards22',
	templateUrl: '/app/html/pages/Rewards/rewards22.html',
})

export class Rewards22 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}