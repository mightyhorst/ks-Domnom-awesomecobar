import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem167',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem167.html',
})

export class ContactItem167 {


	contactitem167 = { 
		iconClass : 'fa fa-map-marker',
		title : 'Address',
		desc : '114 Ponsonby Rd, Auckland 1011',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem167', this.contactitem167);
		}





}