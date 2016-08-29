import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';

declare var MessageService: any;


@Component({
	selector: 'companylogo142',
	templateUrl: '/app/html/pages/Homepage/elements/companylogo142.html',
})

export class CompanyLogo142 {

	myPhone = +64210387758;

	_messageService;
	companylogo142 = { 
		companyLogo : '/assets/images/restaurant/gallery/1.jpg',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('companylogo142', this.companylogo142);
	
		this._messageService = new MessageService();
	}

	callHandler() {
		var returnedData: any = this._messageService.callMobile(this.myPhone);
		var callSuccess: any = returnedData.callSuccess;
		var callMessage: any = returnedData.callMessage;
	}





}