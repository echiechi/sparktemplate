
/**
 * A WebSocket service allowing subscription to a broker.
 */
export class WsocketService {
  ws = new WebSocket('ws://127.0.0.1:8080');
  defaultChannel = 'general';
  botName = 'ChatBot';
  userName = prompt('Hi! I need your name for the Chat please :)');

  constructor() {

    this.ws.onmessage = (event) => {
      console.log('methode on message activate');
      console.log(event);
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
        user: this.userName
      }));
      console.log(event);
    };

  }


}

