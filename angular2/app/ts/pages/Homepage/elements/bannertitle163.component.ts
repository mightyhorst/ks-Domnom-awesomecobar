import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'bannertitle163',
	templateUrl: '/app/html/pages/Homepage/elements/bannertitle163.html',
})

export class Bannertitle163 {


	bannertitle163 = { 
		title : 'Enjoy an unforgettable food & service',
		class : 'banner-heading font-alt mb-40',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('bannertitle163', this.bannertitle163);
		}





}