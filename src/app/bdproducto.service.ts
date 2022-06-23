import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdproductoService {

  constructor() { }
}

export let producto = [
  {
  "imagen": "../assets/Botellas/YellowRoseOutlaw.webp",
  "nombre": "Yellow Rose Outlaw Bourbon",
  "descripcion": "750 ml",
  "precio": "$ 39.99",
  "categoria": "Ginebra",
  "positionId": 1
},
{
  "imagen": "../assets/Botellas/YellowRoseRye.webp",
  "nombre": "Yellow Rose Rye",
  "descripcion": "750 ml",
  "precio": "$ 32.99",
  "categoria": "Ginebra",
  "positionId": 2
},
{
  "imagen": "../assets/Botellas/YellowRoseAmerican.webp",
  "nombre": "Yellow Rose American",
  "descripcion": "750 ml",
  "precio": "$ 34.99",
  "categoria": "Ginebra",
  "positionId": 3
},
{
  "imagen": "../assets/Botellas/Brenne.webp",
  "nombre": "Brenne",
  "descripcion": "750 ml",
  "precio": "$ 34.99",
  "categoria": "Ginebra",
  "positionId": 4
},
{
  "imagen": "../assets/Botellas/TheTottori.webp",
  "nombre": "The Tottori",
  "descripcion": "750 ml",
  "precio": "$ 39.99",
  "categoria": "Ginebra",
  "positionId": 5
},
{
  "imagen": "../assets/Botellas/Tamdhu2.webp",
  "nombre": "Tamdhu",
  "descripcion": "750 ml",
  "precio": "$ 42.99",
  "categoria": "Ginebra",
  "positionId": 6
},
{
  "imagen": "../assets/Botellas/Benromach10.webp",
  "nombre": "Benromach",
  "descripcion": "750 ml",
  "precio": "$ 32.99",
  "categoria": "Ginebra",
  "positionId": 7
},
/* {
  "imagen": "../assets/Botellas/Benromach.webp",
  "nombre": "St. George Gin",
  "descripcion": "750 ml",
  "precio": "$ 39.99",
  "categoria": "Ginebra",
  "positionId": 8
}, */
{
  "imagen": "../assets/Botellas/MakersMark.webp",
  "nombre": "Makers Mark",
  "descripcion": "750 ml",
  "precio": "$ 33.99",
  "categoria": "Ginebra",
  "positionId": 9
},
{
  "imagen": "../assets/Botellas/JimBeamBourbon.webp",
  "nombre": "Jim Beam Bourbon",
  "descripcion": "750 ml",
  "precio": "$ 29.99",
  "categoria": "Ginebra",
  "positionId": 10
},
{
  "imagen": "../assets/Botellas/JimBeamApple.webp",
  "nombre": "Jim Beam Apple",
  "descripcion": "750 ml",
  "precio": "$ 34.99",
  "categoria": "Ginebra",
  "positionId": 11
},
{
  "imagen": "../assets/Botellas/JimBeam.webp",
  "nombre": "Jim Beam",
  "descripcion": "750 ml",
  "precio": "$ 36.99",
  "categoria": "Ginebra",
  "positionId": 12
}
];

export let categorias = [
{
"categoria": "Vodka"
},
{
  "categoria": "Tequila"
},
{
  "categoria": "Ron"
},
{
  "categoria": "Ginebra"
},
{
  "categoria": "Whisky"
},
{
  "categoria": "Barlleno Exclusives"
},
{
  "categoria": "Aperitivos"
},
{
  "categoria": "Digestivos"
},
{
  "categoria": "Mezcal"
},
{
  "categoria": "RTD"
},
{
  "categoria": "Aguardiente"
},
{
  "categoria": "Tonicals"
},
{
  "categoria": "Mezcladores"
}
];
export let subcategorias = [
{
"categoria": "Barlleno Exclusives",
"subcategoria": "Vodka"
},
{
  "categoria": "Barlleno Exclusives",
  "subcategoria": "Whisky"
},
{
  "categoria": "Barlleno Exclusives",
  "subcategoria": "Ron"
},
{
  "categoria": "Barlleno Exclusives",
  "subcategoria": "Ginebra"
},
{
  "categoria": "Barlleno Exclusives",
  "subcategoria": "Mezcal"
}
]

export let imagenes =[
  {
    "imagen": "../assets/Botellas/YellowRoseOutlaw.webp",
  "positionId": 1,
  "numero": 0
  },
  {
  "imagen":  "../assets/ejebotella/Imagen-1.webp",
  "positionId": 1,
  "numero": 1
  },
  {
    "imagen":  "../assets/ejebotella/Imagen-2.webp",
    "positionId": 1,
    "numero": 2
  }
]