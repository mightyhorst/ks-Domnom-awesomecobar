import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem177',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem177.html',
})

export class NavigationItem177 {


	navigationitem177 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem177', this.navigationitem177);
		}





}