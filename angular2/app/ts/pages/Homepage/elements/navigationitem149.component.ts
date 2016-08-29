import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem149',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem149.html',
})

export class NavigationItem149 {


	navigationitem149 = { 
		href : 'rewards',
		name : 'Gallery',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem149', this.navigationitem149);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}