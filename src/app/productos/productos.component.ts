import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  slideConfig = { slidesToShow: 4, slidesToScroll: 1, autoplay: true };

  slidesNac = [
    { img: './assets/Bootstrap/img/productos/termicos/abc.jpeg' },
    { img: './assets/Bootstrap/img/productos/termicos/babero.jpeg' },
    { img: './assets/Bootstrap/img/productos/termicos/m_piopio.jpeg' },
    { img: './assets/Bootstrap/img/productos/termicos/capota.jpeg' },
    { img: './assets/Bootstrap/img/productos/termicos/chaleco1.jpeg' },
    { img: './assets/Bootstrap/img/productos/termicos/fresita.jpeg' },
  ];

  slidesVarios = [
    { img: './assets/Bootstrap/img/productos/varios/ajuarEstampado.jpg' },
    { img: './assets/Bootstrap/img/productos/varios/mediasCaritas.jpg' },
    { img: './assets/Bootstrap/img/productos/varios/cobijasEstuche.jpg' },
    { img: './assets/Bootstrap/img/productos/varios/pañalera.jpg' },
    { img: './assets/Bootstrap/img/productos/varios/juego15piezas.jpg' },
    { img: './assets/Bootstrap/img/productos/varios/chambritasNinia.jpg' },
  ];

  slidesPe = [
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0497.jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0498.jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0521.jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0530.jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0512.jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/peru/IMG_0524.jpg',
    },
  ];

  slidesCo = [
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/a (2).jpg ',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/o (11).jpg',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/a (7).jpg ',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/o (15).jpg ',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/o (9).jpg ',
    },
    {
      img: './assets/Bootstrap/img/productos/importados/colombia/o (7).jpg ',
    },
  ];

  slidesMallas = [
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/bodys4Unidades.jpg',
    },
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/mallaAlmohadaLuna.png ',
    },
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/semanero21Piezas.jpg ',
    },
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/mallitaEcoNiña.png ',
    },
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/mallaAlmohadaNube.jpg ',
    },
    {
      img:
        './assets/Bootstrap/img/productos/importados/colombia/mallas/mallasSalidas.jpg ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addSlide() {
    this.slidesNac.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slidesNac.length = this.slidesNac.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
