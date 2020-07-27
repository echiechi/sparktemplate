import {Subject} from 'rxjs';
import {Msg} from '../model/Msg';
import {MsgService} from './msg.service';
import {Injectable} from '@angular/core';
import {User} from '../user-profile/login/model/user';
import {UserService} from './user.service';

/**
 * A WebSocket service allowing subscription to a broker.
 */
@Injectable()
export class WsocketService {
    ws = new WebSocket('ws://127.0.0.1:8080');
    defaultChannel = 'general';
    botName = 'ChatBot';
    // userName = prompt('Hi! I need your name for the Chat please :)');
    userName;
    userName2: User;
    userId: any
    _reciever;
    msgs: Msg[];
    msgChange: Subject<Msg[]> = new Subject<Msg[]>();
    users: User[];

    constructor(public msgService: MsgService, public userService: UserService) {
        this.userName2 = JSON.parse(localStorage.getItem('currentUser'));
        if (this.userName2 !== null) {
            this.userName = this.userName2.prenom;
            this.userId = this.userName2.id;
        } else {
            this.userName = 'not connected';
            this.userId = 0;
        }


        this.ws.onmessage = (event) => {
            console.log('methode on message activate');
            console.log(event);
           // this.addMessageToChannel(event.data);
            this.addMessageToChannel2(event.data)
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
                message: 'on line'
            }));
            console.log(event);
        };
        this._reciever = document.getElementById('ws-content-receiver');
    }


    addMessageToChannel(message) {
        this._reciever = document.getElementById('ws-content-receiver');
        const data = JSON.parse(message);
        const date = new Date();
        console.log(data);
        this._reciever.innerHTML += '<li class="left clearfix"> <div class="row">' +
            ' <div class="col-lg-1 col-md-12"><span class="chat-img pull-left">\n' +
            '                            <img src="http://127.0.0.1:8000/geimg/octopus.png" alt="User Avatar" class="img-circle" />\n' +
            '                        </span></div>\n' +
            '                       <div class="col-lg-10 col-md-12"><div class="chat-body clearfix"><div class="header">\n' +
            '                                    <strong class="primary-font">' + data.user + '</strong>' + ' <a>' + data.message + '</a>\n' +
            '                           </div></div></div>\n' +
            '                            </div></li>\n';

        // ' + data.message + '
    }

    addMessageToChannel2(message) {
        this.msgService.getAllMsg().subscribe(
            (data: Msg[]) => {
                this.msgs = data;
                this.msgChange.next(this.msgs)
            });
        console.log('message sended');
    }


}

