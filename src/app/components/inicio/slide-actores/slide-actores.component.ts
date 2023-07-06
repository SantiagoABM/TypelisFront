import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide-actores',
  templateUrl: './slide-actores.component.html',
  styleUrls: ['./slide-actores.component.css']
})
export class SlideActoresComponent implements OnInit {
  actores = [
    { nombre: 'Adam Sandler', imagen: 'https://phantom-elmundo.unidadeditorial.es/048a89de97a4f0eb0a265165e1d92405/f/webp/assets/multimedia/imagenes/2020/04/24/15877161282443.jpg', id: 1 },
    { nombre: 'Thor', imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/07/chris-hemsworth-como-thor-2400571.jpg?tf=3840x', id: 2 },
    { nombre: 'South Park Post Covid', imagen: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:5044ab13-7a81-4fc8-b9d9-21c08dcbe834?quality=0.7&gen=ntrn&legacyStatusCode=true', id: 3 },
    { nombre: 'Aquaman', imagen: 'https://www.cinemascomics.com/wp-content/uploads/2023/04/aquaman-liga-de-la-justicia-1200x900.jpg', id: 4 },
    { nombre: 'Thundercats', imagen: 'https://e.rpp-noticias.io/xlarge/2022/06/07/080808_1269702.jpg', id: 5 },
    { nombre: 'Transformers', imagen: 'https://imgmedia.larepublica.pe/1200x660/larepublica/original/2021/11/11/618c78bf95a3ed0a2d2e11b8.jpg', id: 6 },
    { nombre: 'Bob Esponja', imagen: 'https://www.sopitas.com/wp-content/uploads/2015/01/fuera_agua_bob_.jpg?w=640', id: 7 }
  ]

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    $("#right").click(function () {
      var currentLeft = parseInt($('.items').css('left'));
      $('.items').css('left', (currentLeft - 800) + 'px');
    })

    $('#left').click(function () {
      var currentLeft = parseInt($('.items').css('left'));
      $('.items').css('left', (currentLeft + 800) + 'px');
    })
  }
}
