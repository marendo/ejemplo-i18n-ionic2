import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public name: string = "Jorge";
public age: number = 30;
public address: string = "742 Evergreen Terrace";
public city: string = "Springfield";
public country: string = "USA";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {

  }

  translateToSpanish(){
	this.translateService.use('es');
  }
  
  translateToEnglish(){
	this.translateService.use('en');
  }  
}
