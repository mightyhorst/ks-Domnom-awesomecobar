import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem148',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem148.html',
})

export class NavigationItem148 {


	navigationitem148 = { 
		href : 'menu',
		name : 'Menu',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem148', this.navigationitem148);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}