import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  // add message to array
  add(message: string){
    this.messages.push(message);
  }
  // clear message array
  clear(){
    this.messages = [];
  }

  constructor() { }
}
