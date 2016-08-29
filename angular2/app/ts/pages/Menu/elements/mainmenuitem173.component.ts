import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem173',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem173.html',
})

export class MainMenuItem173 {


	mainmenuitem173 = { 
		name : 'Squid Ink Spaghetti',
		description : 'with Red Shrimp, Brussels Sprouts, & Saffron',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem173', this.mainmenuitem173);
		}





}