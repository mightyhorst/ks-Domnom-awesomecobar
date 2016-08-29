import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem172',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem172.html',
})

export class MainMenuItem172 {


	mainmenuitem172 = { 
		name : 'Buckwheat Orecchiette',
		description : 'with Nettle Purée, Black Trumpets & Smoked Yolk',
		price : '$21.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem172', this.mainmenuitem172);
		}





}