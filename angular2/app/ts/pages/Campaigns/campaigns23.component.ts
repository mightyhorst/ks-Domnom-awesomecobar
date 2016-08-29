import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'campaigns23',
	templateUrl: '/app/html/pages/Campaigns/campaigns23.html',
})

export class Campaigns23 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}