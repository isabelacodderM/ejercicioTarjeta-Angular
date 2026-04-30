import { Component } from '@angular/core';
import { EjercicioTarjeta } from './ejercicio-tarjeta/ejercicio-tarjeta';

@Component({
  selector: 'app-root',
  imports: [EjercicioTarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}