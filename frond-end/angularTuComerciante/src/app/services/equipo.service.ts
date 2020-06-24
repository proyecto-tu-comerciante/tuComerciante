import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  teem:any[]=[
    {
      imagen:"",
      nombre:"Juan David ",
      Apellido:"Muñoz Velandia",
      biografia:"Estudiante técnico en Desarrollo de software, Sena. Con estudios profesionales en arquitectura civil y una especialización en gestión y construcción de edificaciones, estos estudios me han desarrollado facilidad para el rápido aprendizaje ante los cambios constantes de la tecnología y habilidades como: diseño, manejo de números, control de personal, trabajo en equipo entre otras. Amante a la tecnología lo cual me impulsa a indagar en el mundo del desarrollo de software. Comprometido con cada meta propuesta, responsable, con actitud de emprendedor, capacidad de trabajar bajo presión, autodidacta y con cualidades para trabajar en equipo. Durante mí aprendizaje como técnico adquirí habilidades en el desarrollo y administración de bases de datos relacionales como Mysql, Postgres. Desarrollo de aplicaciones software enfocado a entornos web en: HTML, JavaScript TypeScript, haciendo uso de diferentes Frameworks de desarrollo y con uso de trabajo colaborativo usando herramientas como git"
    },
    {
      nombre:"Jhon Albeiro",
      Apellido:"muñoz",
      biografia:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab incidunt ducimus, est iusto doloribus delectus accusantium optio omnis ea itaque enim nihil non voluptates vero aliquam ad? Accusantium, architecto?"
    }
  ]

  constructor() { }

  obtenerEquipo(){
    return this.teem;
  }
  getOneTeem(i){
    return this.teem[i];
  }


}
