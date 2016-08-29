import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem150',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem150.html',
})

export class NavigationItem150 {


	navigationitem150 = { 
		href : 'campaings',
		name : 'Location',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem150', this.navigationitem150);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}