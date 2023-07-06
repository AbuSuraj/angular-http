import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-http';

  constructor(){
    type HttpResponse = {code:number, data : string}
    const observable = new Observable<HttpResponse>(subscriber =>{
      console.log('inside subscriber...');
      subscriber.next({code:200, data: 'this is data 1'})
      subscriber.next({code:200, data: 'this is data 2'})
      subscriber.next({code:200, data: 'this is data 3'})
      subscriber.error({code:500, data: 'an error occurred'})
      setTimeout(() =>{
        subscriber.next({code:200, data: 'this is data is more from setTimeout'});
        subscriber.complete();
      }, 1000)
      console.log('subscriber is done emmeting...')
    });
    observable.subscribe({
      next(response: HttpResponse){
        console.log('got response ', response)
      },
      error(error:any){
        console.log('error ', error)
      }
    })
  }

}
