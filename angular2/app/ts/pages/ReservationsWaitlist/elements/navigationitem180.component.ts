import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem180',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem180.html',
})

export class NavigationItem180 {


	navigationitem180 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem180', this.navigationitem180);
		}





}