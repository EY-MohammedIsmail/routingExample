import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingExample';

  constructor(private route:Router){}

  navigateTo(url:string){
    this.route.navigateByUrl(url);
  }
}
