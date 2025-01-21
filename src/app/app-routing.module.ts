import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: ' ',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'inicio-de-sesion',
    loadChildren: () => import('./inicio-de-sesion/inicio-de-sesion.module').then( m => m.InicioDeSesionPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-volador',
    loadChildren: () => import('./menu-volador/menu-volador.module').then( m => m.MenuVoladorPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./conocenos/conocenos.module').then( m => m.ConocenosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
