import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';  

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.page.html',
  styleUrls: ['./inicio-de-sesion.page.scss'],
  standalone: false
})
export class InicioDeSesionPage implements OnInit {

  email: string = '';
  password: string = '';
  
  constructor(
    private navController: NavController,
    private toastController: ToastController 
  ) { }

  ngOnInit() {
  }

  async login() {
   
    if (this.email === 'adan@gmail.com' && this.password === 'adansito') {
    
      this.navController.navigateRoot('/inicio');
      this.presentToast('bottom'); 
    } else {
    
      this.presentToast('top');
    }
  }


  async presentToast(position: 'top' | 'bottom') {
    const toast = await this.toastController.create({
      message: position === 'top' ? 'Credenciales incorrectas' : 'Inicio de sesión exitoso',
      duration: 1500,
      position: position,
    });
    await toast.present();
  }

}
