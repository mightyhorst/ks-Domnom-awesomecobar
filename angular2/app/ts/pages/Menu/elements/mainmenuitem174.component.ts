import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem174',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem174.html',
})

export class MainMenuItem174 {


	mainmenuitem174 = { 
		name : 'Poached Pollock',
		description : 'with Dandelion Greens, Buchot Mussels, Yellow Eye Beans & Anduja',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem174', this.mainmenuitem174);
		}





}