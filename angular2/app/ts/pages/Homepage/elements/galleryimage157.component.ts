import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage157',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage157.html',
})

export class GalleryImage157 {


	galleryimage157 = { 
		href : '/assets/images/restaurant/gallery/6.jpg',
		imgSrc : '/assets/images/restaurant/gallery/6.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage157', this.galleryimage157);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}