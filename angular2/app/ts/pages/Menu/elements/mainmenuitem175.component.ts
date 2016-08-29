import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem175',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem175.html',
})

export class MainMenuItem175 {


	mainmenuitem175 = { 
		name : 'Brook Trout',
		description : 'with Spaghetti Squash, Sweet Potatoes & Apple Cider Sauce',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem175', this.mainmenuitem175);
		}





}