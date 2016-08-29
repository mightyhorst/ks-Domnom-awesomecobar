import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage154',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage154.html',
})

export class GalleryImage154 {


	galleryimage154 = { 
		href : '/assets/images/restaurant/gallery/1.jpg',
		imgSrc : '/assets/images/restaurant/gallery/1.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage154', this.galleryimage154);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}