import { Component, OnInit } from '@angular/core';
import { DataBody } from '/app/js/pages/Menu/databody.component';


declare var AppController: any;
@Component({
	selector: 'menu20',
	templateUrl: '/app/html/pages/Menu/menu20.html',
	directives: [
		DataBody,
	],
})

export class Menu20 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}