import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'scrolldown145',
	templateUrl: '/app/html/pages/Homepage/elements/scrolldown145.html',
})

export class ScrollDown145 {


	scrolldown145 = { 
		href : '#about',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('scrolldown145', this.scrolldown145);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}