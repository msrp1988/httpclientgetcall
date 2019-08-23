import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class MediaService {

  languages:string = "https://www.w3schools.com/angular/customers.php";

  constructor( private httpClient: HttpClient) { }

  getData(){  
    return this.httpClient.get(this.languages);  
  }
}


