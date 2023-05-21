import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LangCatServiceService } from 'src/app/services/lang-cat-service.service';
import { LangEnServiceService } from 'src/app/services/lang-en-service.service';
import { LangESServiceService } from 'src/app/services/lang-es-service.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date :any = new Date();
  copyright :String = `All Rights Reserved ${this.date.getFullYear()} ©`

  auxiliar_data_footer = {
    footer : {
      direccion: "C/ de Numancia 75,08029, Barcelona",
      link_1: "Inicio",
      link_2: "Menú",
      link_3: "¿Quienes somos?",
      link_4: "Politicas privadas",
      titulo: "Nuestro restaurante",
      titulo_botones: "¡Síguenos!"
    }
  }

  data = this.auxiliar_data_footer
  lang :any

  constructor(
    public _lang_ES: LangESServiceService,
    public _lang_EN: LangEnServiceService,
    public _lang_CAT: LangCatServiceService,
    private route: ActivatedRoute,
  ) {
    this.lang = localStorage.getItem('lang')
      ? localStorage.getItem('lang')
      : this.route.snapshot.paramMap.get("es");

    // console.log(this.lang);

    if (this.lang === 'es' ) this.data = this._lang_ES

    if (this.lang === 'en' ) this.data = this._lang_EN

    if (this.lang === 'cat' ) this.data = this._lang_CAT


    console.log(this.data, this.auxiliar_data_footer)
  }

}
