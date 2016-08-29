import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem147',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem147.html',
})

export class NavigationItem147 {


	navigationitem147 = { 
		href : 'about',
		name : 'About',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem147', this.navigationitem147);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}