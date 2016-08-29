import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'featureitem160',
	templateUrl: '/app/html/pages/Homepage/elements/featureitem160.html',
})

export class FeatureItem160 {


	featureitem160 = { 
		iconClass : 'icon-flag',
		title : 'Incredible taste',
		desc : 'Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim.',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('featureitem160', this.featureitem160);
		}





}