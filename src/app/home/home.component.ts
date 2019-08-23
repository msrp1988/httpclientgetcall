import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
  public mediaService:MediaService) { }

  cars:any;
  someProperty:string = '';
  addDetails:string = '';
  getData:any; 
  languages: any[];
  lang: any;
 
  ngOnInit() {       
    this.mediaService.getData().subscribe((data) => {
      let results = data['records'];
      this.languages = results;
      this.lang = this.languages[0]
    })    
  }
}
