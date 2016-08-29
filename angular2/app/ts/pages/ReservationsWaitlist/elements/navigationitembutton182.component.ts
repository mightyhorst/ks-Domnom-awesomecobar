import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitembutton182',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitembutton182.html',
})

export class NavigationItemButton182 {


	navigationitembutton182 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitembutton182', this.navigationitembutton182);
		}





}