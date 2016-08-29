import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitembutton151',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitembutton151.html',
})

export class NavigationItemButton151 {


	navigationitembutton151 = { 
		href : 'reservations',
		name : 'Reservations',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitembutton151', this.navigationitembutton151);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}