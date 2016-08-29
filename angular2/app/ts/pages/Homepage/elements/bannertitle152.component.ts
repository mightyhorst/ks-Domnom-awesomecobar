import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'bannertitle152',
	templateUrl: '/app/html/pages/Homepage/elements/bannertitle152.html',
})

export class Bannertitle152 {


	bannertitle152 = { 
		title : 'We provide food that customers love, day after day after day. It is not a big secret. People just want more of it.',
		class : 'lead',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('bannertitle152', this.bannertitle152);
		}





}