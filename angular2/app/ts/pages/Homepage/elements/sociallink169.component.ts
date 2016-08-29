import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink169',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink169.html',
})

export class SocialLink169 {


	sociallink169 = { 
		href : '#',
		title : 'Facebook',
		iconClass : 'fa fa-facebook',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink169', this.sociallink169);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}