import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  devolver(){

    let personajes = "";
    let numeros:any = [];

    while(numeros.length!=9){
      let num = Math.floor(Math.random() * (826 - 1) + 1);
      if(!(numeros.includes(num))){
        numeros.push(num);
        personajes += num + ",";
      }
    }  

    console.log(personajes);

    return this.http.get("https://rickandmortyapi.com/api/character/" + personajes);
  }

}
