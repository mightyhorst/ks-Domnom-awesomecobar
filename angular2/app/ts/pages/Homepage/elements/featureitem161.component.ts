import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'featureitem161',
	templateUrl: '/app/html/pages/Homepage/elements/featureitem161.html',
})

export class FeatureItem161 {


	featureitem161 = { 
		iconClass : 'icon-clock',
		title : 'Quick waiters',
		desc : 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('featureitem161', this.featureitem161);
		}





}