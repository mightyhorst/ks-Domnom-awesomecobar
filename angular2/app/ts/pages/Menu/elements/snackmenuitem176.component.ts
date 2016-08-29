import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'snackmenuitem176',
	templateUrl: '/app/html/pages/Menu/elements/snackmenuitem176.html',
})

export class SnackMenuItem176 {


	snackmenuitem176 = { 
		name : 'Bread & Housemade Cultured Butter',
		description : 'with Spaghetti Squash, Sweet Potatoes & Apple Cider Sauce',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('snackmenuitem176', this.snackmenuitem176);
		}





}