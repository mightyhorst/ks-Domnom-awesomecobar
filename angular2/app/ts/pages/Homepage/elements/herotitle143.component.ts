import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';

declare var MessageService: any;


@Component({
	selector: 'herotitle143',
	templateUrl: '/app/html/pages/Homepage/elements/herotitle143.html',
})

export class HeroTitle143 {

	myPhone = +64210387758;

	_messageService;
	herotitle143 = { 
		companyName : 'awesome & co $$bar',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('herotitle143', this.herotitle143);
	
		this._messageService = new MessageService();
	}

	callHandler() {
		var returnedData: any = this._messageService.callMobile(this.myPhone);
		var callSuccess: any = returnedData.callSuccess;
		var callMessage: any = returnedData.callMessage;
	}





}