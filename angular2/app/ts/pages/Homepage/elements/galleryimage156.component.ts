import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage156',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage156.html',
})

export class GalleryImage156 {


	galleryimage156 = { 
		href : '/assets/images/restaurant/gallery/4.jpg',
		imgSrc : '/assets/images/restaurant/gallery/4.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage156', this.galleryimage156);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}