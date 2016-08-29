import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbutton164',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbutton164.html',
})

export class BannerButton164 {


	bannerbutton164 = { 
		title : 'Reserve a table',
		href : '/reservations',
		class : 'class="btn btn-mod btn-w btn-medium btn-round"',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbutton164', this.bannerbutton164);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}