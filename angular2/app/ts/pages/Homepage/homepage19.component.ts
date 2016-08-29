import { Component, OnInit } from '@angular/core';
import { DataBody } from '/app/js/pages/Homepage/databody.component';


declare var AppController: any;
@Component({
	selector: 'homepage19',
	templateUrl: '/app/html/pages/Homepage/homepage19.html',
	directives: [
		DataBody,
	],
})

export class Homepage19 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}