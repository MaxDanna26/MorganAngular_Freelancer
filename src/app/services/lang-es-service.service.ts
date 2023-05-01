import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangESServiceService {

  uriData: string = 'https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app/idiomas/es';

  header: any = {};
  landing: any = {};
  aboutus: any = {};
  menu: any = {};
  footer: any = {};

  isLoaded = false;

  constructor( private http: HttpClient ) {
    this.get_Header()
    this.get_Landing()
    this.get_Aboutus()
    this.get_Menu()
    this.get_Footer()
  }

  private uriGeneral( endpoint: string ) {
    return `${this.uriData}${endpoint}.json`
  }

  private get_Header() {
    this.http
      .get( this.uriGeneral('/header') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.header = res;
        // console.log(res);
      } )
  }

  private get_Landing() {
    this.http
      .get( this.uriGeneral('/landing') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.landing = res;
        // console.log(res);
      } )
  }

  private get_Aboutus() {
    this.http
      .get( this.uriGeneral('/aboutus') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.aboutus = res;
        // console.log(res);
      } )
  }

  private get_Menu() {
    this.http
      .get( this.uriGeneral('/menu') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.menu = res;
        console.log(res);
      } )
  }

  private get_Footer() {
    this.http
      .get( this.uriGeneral('/footer') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.footer = res;
        // console.log(res);
      } )
  }
}
