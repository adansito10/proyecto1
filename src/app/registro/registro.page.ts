import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  email: string = '';
  password: string = '';
  number: string = '';
  tel: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async registro() {

    if (!this.email.trim() && !this.password.trim() && !this.number.trim() && !this.tel.trim()) {
      this.presentToast('hay campos sin llenar', 'top');
      return;
    }
    if (!this.validarEmail(this.email)) {
      this.presentToast('Formato de correo inválido', 'top');
      return;
    }

  
    if (!/^\d+$/.test(this.number)) {
      this.presentToast('solo se permiten dígitos', 'top');
      return;
    }


    this.navController.navigateRoot('/inicio');
    this.presentToast('Registro exitoso', 'bottom');
  }


  async presentToast(message: string, position: 'top' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
    });
    await toast.present();
  }

  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
