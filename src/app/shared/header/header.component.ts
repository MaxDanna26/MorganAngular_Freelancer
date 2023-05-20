import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangCatServiceService } from 'src/app/services/lang-cat-service.service';
import { LangEnServiceService } from 'src/app/services/lang-en-service.service';
import { LangESServiceService } from 'src/app/services/lang-es-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    //Styles header
  header: string = "header";
  @Input () header_about: string = "";

  data :any
  lang :any

  constructor(
    public _lang_ES: LangESServiceService,
    public _lang_EN: LangEnServiceService,
    public _lang_CAT: LangCatServiceService,
    private route: ActivatedRoute,
    private router: Router
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

  langES() {
    localStorage.setItem('lang', 'es');
    this.router.navigate(['/', 'es', 'home']);
    window.location.reload()
  }

  langEN() {
    localStorage.setItem('lang', 'en');
    this.router.navigate(['/', 'en', 'home']);
    window.location.reload()
  }

  langCAT() {
    localStorage.setItem('lang', 'cat');
    this.router.navigate(['/', 'cat', 'home']);
    window.location.reload()
  }

  openNavMobile() {
    const nav = document.querySelector("#nav")
    const abrir = document.querySelector("#abrir")
    abrir?.addEventListener('click', () => {
      nav?.classList.add("visible")
      nav?.classList.add("animate__fadeInRight")
      setTimeout(()=>{
        nav?.classList.remove("animate__fadeInRight")
      }, 1000)
    })
  }

  closeNavMobile() {
    const nav = document.querySelector("#nav")
    const cerrar = document.querySelector("#cerrar")
    cerrar?.addEventListener('click', () => {
      nav?.classList.add("animate__fadeOutRight")
      setTimeout(()=>{
        nav?.classList.remove("animate__fadeOutRight")
        nav?.classList.remove("visible")
      }, 1000)
    })

    // console.log('ocultando');
  }

  fadeLangList() {
    const langsList = document.querySelector("#langList")
    const abrir = document.querySelector(".lenguage-menu")
    abrir?.addEventListener('click', () => {
      langsList?.classList.add("animate__fadeInDown")

    // console.log('ocultando');
    })

    // console.log('ocultando');
  }
}
