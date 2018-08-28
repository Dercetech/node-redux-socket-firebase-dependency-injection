import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';

import { environment } from '../../../environments/environment';

@Injectable()
export class ChatService {
  private _socket;

  constructor() {}

  public initSocket(): void {
    console.log('caca');
    this._socket = socketIo(environment.socket.url);
    this._socket.emit('message', 'test');
  }
}
