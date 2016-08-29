import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage158',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage158.html',
})

export class GalleryImage158 {


	galleryimage158 = { 
		href : '/assets/images/restaurant/gallery/10.jpg',
		imgSrc : '/assets/images/restaurant/gallery/10.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage158', this.galleryimage158);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}