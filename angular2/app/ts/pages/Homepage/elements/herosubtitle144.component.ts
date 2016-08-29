import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';

declare var MessageService: any;


@Component({
	selector: 'herosubtitle144',
	templateUrl: '/app/html/pages/Homepage/elements/herosubtitle144.html',
})

export class HeroSubtitle144 {

	myNumber = +64210387758;

	_messageService;
	herosubtitle144 = { 
		desc : 'Welcome to ',
		companyName : 'awesome & co $$bar',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('herosubtitle144', this.herosubtitle144);
	
		this._messageService = new MessageService();
	}

	sendText() {
		var returnedData: any = this._messageService.sendTxt(this.myNumber, this._sharedData.getData("herosubtitle144").desc);
		var txtSuccess: any = returnedData.txtSuccess;
		var txtMessage: any = returnedData.txtMessage;
	}





}