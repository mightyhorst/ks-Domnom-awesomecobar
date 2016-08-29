import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage159',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage159.html',
})

export class GalleryImage159 {


	galleryimage159 = { 
		href : '/assets/images/restaurant/gallery/3.jpg',
		imgSrc : '/assets/images/restaurant/gallery/3.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage159', this.galleryimage159);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}