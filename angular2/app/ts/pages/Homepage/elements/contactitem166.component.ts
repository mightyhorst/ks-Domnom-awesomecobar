import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem166',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem166.html',
})

export class ContactItem166 {


	contactitem166 = { 
		iconClass : 'fa fa-envelope',
		title : 'email',
		desc : 'info@longroom.co.nz',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem166', this.contactitem166);
		}





}