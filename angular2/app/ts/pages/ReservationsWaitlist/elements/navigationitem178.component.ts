import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem178',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem178.html',
})

export class NavigationItem178 {


	navigationitem178 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem178', this.navigationitem178);
		}





}