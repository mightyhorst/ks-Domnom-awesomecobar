import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem165',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem165.html',
})

export class ContactItem165 {


	contactitem165 = { 
		iconClass : 'fa fa-phone',
		title : 'Call us',
		desc : '09 360 8803',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem165', this.contactitem165);
		}





}