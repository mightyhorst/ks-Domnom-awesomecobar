import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbutton153',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbutton153.html',
})

export class BannerButton153 {


	bannerbutton153 = { 
		title : 'Discover our menu',
		href : '/menu',
		class : 'btn btn-mod btn-medium btn-round',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbutton153', this.bannerbutton153);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}