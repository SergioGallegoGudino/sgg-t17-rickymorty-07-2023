import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  devolver(){

    // Creamos una variable vacía donde iremos añadiendo cada numero aleatorio separado de una coma
    let personajes = "";
    // Creamos una variable auxiliar para comprobar la cantidad de numeros 
    let numeros:any = [];
    // Creamos un bucle que almacene numero hasta llegar a la longitud deseada
    while(numeros.length!=9){
      // Creamos un numero aleatorio entre dos rangos. En este caso será el total de personajes de la API
      let num = Math.floor(Math.random() * (826 - 1) + 1);
      // Comprobamos si el numero generado ya se encuentra dentro. En caso de que no esté, lo añade
      if(!(numeros.includes(num))){
        numeros.push(num);
        // Separamos cada número con una coma
        personajes += num + ",";
      }
    }  
    // Devolvemos la petición get de la API con los numeros concatenados para que nos devuelva personajes aleatorios
    return this.http.get("https://rickandmortyapi.com/api/character/" + personajes);
  }

}
