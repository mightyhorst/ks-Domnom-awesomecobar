import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem146',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem146.html',
})

export class NavigationItem146 {


	navigationitem146 = { 
		class : 'active',
		href : '#',
		name : 'Home',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem146', this.navigationitem146);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}