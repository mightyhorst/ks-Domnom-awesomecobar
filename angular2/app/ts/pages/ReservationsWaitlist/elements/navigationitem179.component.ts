import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem179',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem179.html',
})

export class NavigationItem179 {


	navigationitem179 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem179', this.navigationitem179);
		}





}