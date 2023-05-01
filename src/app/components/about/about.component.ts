import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangCatServiceService } from 'src/app/services/lang-cat-service.service';
import { LangEnServiceService } from 'src/app/services/lang-en-service.service';
import { LangESServiceService } from 'src/app/services/lang-es-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data :any
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

    // console.log(this.data)
  }
}
