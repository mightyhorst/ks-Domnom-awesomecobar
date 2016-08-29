import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink171',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink171.html',
})

export class SocialLink171 {


	sociallink171 = { 
		href : '#',
		title : 'Pinterest',
		iconClass : 'fa fa-pinterest',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink171', this.sociallink171);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}