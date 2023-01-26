import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

constructor(private route:Router){

}

  isShown(){
    if(this.route.url == "/Auth" || this.route.url == "/inscription"){
        return false;
    }
    return true;
  }
}
  