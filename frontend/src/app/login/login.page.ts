import { LoginService } from './../services/login/login.service';
import { Client } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  client: Client = {
    user: '',
    password: ''
  };

  constructor(
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Usuário Inválido!',
      message: 'Por favor digite um usuário e senha válido!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async welcomeAlert() {
    const alert = await this.alertController.create({
      header: `Seja bem vindo ${this.client.user}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async registerAlert() {
    const alert = await this.alertController.create({
      header: 'Usuário Cadastrado!',
      buttons: ['OK']
    });

    await alert.present();
  }

  auth(client: Client) {
    let ret: boolean;
    this.loginService.get().subscribe(res => {
      res.map(ev => {
        if (client.user === ev.user && client.password === ev.password) {
          return ret = true;
        } else {
          return ret = false;
        }
      });
      if (ret === true) {
        this.router.navigate(['/home']);
        this.welcomeAlert();
      } else {
        this.errorAlert();
      }
    });
  }

  createUser(): void {
    this.loginService.create(this.client).subscribe(() => {
      this.router.navigate(['/login']);
      this.registerAlert();
    });
  }

}

