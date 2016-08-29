import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink170',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink170.html',
})

export class SocialLink170 {


	sociallink170 = { 
		href : '#',
		title : 'Twitter',
		iconClass : 'fa fa-twitter',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink170', this.sociallink170);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}