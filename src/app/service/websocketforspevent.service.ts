import {Injectable} from '@angular/core';
import {Spevent} from '../model/Spevent';
import {SpeventService} from './spevent.service';
import {Subject} from 'rxjs';

/**
 * A WebSocket service allowing subscription to a broker.
 */
@Injectable()
export class WebsocketforspeventService {
    ws = new WebSocket('ws://127.0.0.1:8090');
    defaultChannel = 'general';
    botName = 'ChatBot';
    userName = 'general user';
    _ici;
    spevents: Spevent[];
    speventChange: Subject<Spevent[]> = new Subject<Spevent[]>();

    constructor(public speventService: SpeventService) {

        this.ws.onmessage = (event) => {
            console.log(event);
              this.addMessageToChannel(event)
        };

        this.ws.onclose = (event) => {
            //  botMessageToGeneral('Connection closed');
            console.log(event);
        };

        this.ws.onerror = (event) => {
            // botMessageToGeneral('An error occured!');
            console.log(event);
        };

        this.ws.onopen = (event) => {
            this.ws.send(JSON.stringify({
                action: 'subscribe',
                channel: this.defaultChannel,
                user: this.userName,
                message: 'spevent websocket on line'
            }));
         this.addMessageToChannel(event)
           // this.speventChange.next(this.spevents);
            console.log(event);
            console.log('hello');
        };
        //  this._reciever = document.getElementById('ws-content-receiver');
    }


    addMessageToChannel(message) {
        this.speventService.getSpeventFromDate().subscribe(
            (data: Spevent[]) => {
                this.spevents = data;
                this.speventChange.next(this.spevents)
            } );
       // this.speventChange.next(this.spevents);
        console.log('message sended');
    }


}
