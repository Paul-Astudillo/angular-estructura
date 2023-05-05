import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule , FormsModule , CabeceraComponent , MenuComponent , PieComponent , FormularioComponent],
  templateUrl: './main.html',

})
export class App {
  titulo = 'Titulo';

}

bootstrapApplication(App);
