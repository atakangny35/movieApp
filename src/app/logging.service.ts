import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages!:string[];

  

  clear(){
    this.messages= []
  }

  constructor() { }
}
