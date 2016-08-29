import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem181',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem181.html',
})

export class NavigationItem181 {


	navigationitem181 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem181', this.navigationitem181);
		}





}