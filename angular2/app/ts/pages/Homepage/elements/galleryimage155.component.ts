import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage155',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage155.html',
})

export class GalleryImage155 {


	galleryimage155 = { 
		href : '/assets/images/restaurant/gallery/2.jpg',
		imgSrc : '/assets/images/restaurant/gallery/2.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage155', this.galleryimage155);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}