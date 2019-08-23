import { Component } from '@angular/core';
import { MediaService } from './media.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: '<p>{{ someProperty}} , {{addDetails}}</p>',
  styles: ['p{color:green; }']
})

export class AppComponent {
  constructor(private mediaService: MediaService){}


  ngOnInit(){
    this.mediaService.getData().subscribe((data) => {
      console.log("Languages" , data);
    })
  } 
}
