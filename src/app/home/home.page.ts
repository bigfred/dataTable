import { Component } from '@angular/core';
import data from './../../assets/company.json';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private companies: any[] = data;
  tablestyle = 'bootstrap';
  customRowClass = false;

  constructor(private alertCtrl: AlertController) { }

  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }

  getRowClass(row) {
    const isMale = row.gender == 'male';
    if (!this.customRowClass) {
      return {};
    }
    return {
      'male-row': isMale,
      'female-row': !isMale
    }
  }

  async open(row) {
    let alert = await this.alertCtrl.create({
      header: 'Row',
      message: `${row.name} works for ${row.company}!`,
      buttons: ['OK']
    });
    alert.present();
  }

}
