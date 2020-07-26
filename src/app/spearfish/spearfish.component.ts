import {Component, OnInit} from '@angular/core';
import {Spot} from '../model/Spot';
import {SpotService} from '../service/spot.service';
import {Fish} from '../model/Fish';
import {WsocketService} from '../service/wsocket.service';
import {Spevent} from '../model/Spevent';
import {SpeventService} from '../service/spevent.service';
import {WebsocketforspeventService} from '../service/websocketforspevent.service';
import {Participantspevent} from '../model/Participantspevent';
import {ParticipantspeventService} from '../service/participantspevent.service';
import {Fishspot} from '../model/Fishspot';
import {FishspotService} from '../service/fishspot.service';


declare var ol: any;

@Component({
    selector: 'app-spearfish',
    templateUrl: './spearfish.component.html',
    styleUrls: ['./spearfish.component.css'],
})
export class SpearfishComponent implements OnInit {
    iconSpot = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg';
    iconFish = 'http://127.0.0.1:8001/geimg/Fish_Food_icon-icons.com_68747.svg';
    getImgUrl = 'http://127.0.0.1:8001/geimg/'
    title = 'AngularSpark';
    map: any;
    vectorSource = new ol.source.Vector({});
    style = new ol.style.Style({});
    vectorLayer;
    spots: Spot[] = [{
        'id': 1,
        'idRegion': 'Rafraf',
        'longitude': 10.325275,
        'latitude': 37.177562,
        'accesRoute': true,
        'depth': 8,
        'spotDescription': 'xxxx',
        'lvl': 1
    }];
    fish: Fish = new Fish();
    fish2: Fish = new Fish();
    fishs: Fish[];
    private info: HTMLElement;
    private highlight: any;
    private features: any;
    imageDot;
    imageFish;
    inputText = '';
    nbrFishSotted: any[];
    nbrSpot: any[];
    spevent: Spevent = new Spevent();
    fishSpot: Fishspot = new Fishspot();
    spevents: Spevent[] = null;
    participantspevent: Participantspevent[] = null;
    s = '';
    userId;
    _subscription: any;

    constructor(private spotService: SpotService, private webSocket: WsocketService,
                private speventService: SpeventService, private participantspeventService: ParticipantspeventService,
                private websocketforspevent: WebsocketforspeventService,
                private  fishspotService: FishspotService) {
        this.spevents = websocketforspevent.spevents;
        // spevent change est un observable qui suit la mise à jour de la liste des event
        this._subscription = websocketforspevent.speventChange.subscribe((value) => {
            this.spevents = value
        })
    }

    ngOnInit() {
        setTimeout(() => {
            this.spevents = this.websocketforspevent.spevents;
        }, 6000);
        this.userId = prompt('Hi! I need your userId for event :)');
        this.imageFish = new ol.style.Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            scale: 0.05,
            src: this.iconFish
        });
        this.imageDot = new ol.style.Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            src: this.iconSpot
        });
        this.style.setImage(this.imageDot);
        this.vectorLayer = new ol.layer.Vector({source: this.vectorSource});
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([9.692120, 35.622071]),
                zoom: 6
            }),
        });
        this.spotService.getAllSpots().subscribe(
            (data: Spot[]) => {
                this.spots = data;
                this.actualiserFishSpot();
            });
        /*    setTimeout(() => {
                this.actualiserFishSpot();
            }, 2000); */
        this.spotService.getAllFish().subscribe(
            (data: Fish[]) => this.fishs = data
        );
        this.nbrFishSotted = [{'1': '0'}];
        this.nbrSpot = [{'1': '0'}];
        this.spotService.getNbrFisfSpotted().subscribe(
            (data: any[]) => this.nbrFishSotted = data
        );
        this.spotService.getNbrSpot().subscribe(
            (data: any[]) => this.nbrSpot = data
        );
        this.map.on('pointermove', (evt) => {
            if (evt.dragging) {
                return;
            }
            const pixel = this.map.getEventPixel(evt.originalEvent);
            this.displayFeatureInfo(pixel);
        });
        this.participantspeventService.getSpeventByUserId(this.userId).subscribe(
            (data: Participantspevent[]) => this.participantspevent = data
        );
        /*   this.speventService.getSpeventFromDate().subscribe(
               (data: Spevent[]) => this.spevents = data
           ); */
    }


    ngOnDestroy() {
        //prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    }

    add_map_point(lat, lng, name, image) {
        const features = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            label: name
        });
        this.style.setImage(image)
        features.setStyle(this.style);

        this.vectorSource.addFeature(features, this.style);
    }

    actualiseSpots() {
        this.vectorLayer.getSource().clear();
        for (const s of this.spots) {
            this.add_map_point(s.latitude, s.longitude, s.id, this.imageDot);
        }
        this.map.addLayer(this.vectorLayer);
    }

    displayFeatureInfo = (pixel) => {

        const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => {
            console.log(feature);
            return feature;
        });

        const info = document.getElementById('info');
        if (feature) {
            info.innerHTML =  'Spot id: ' + feature.get('label');
        } else {
            info.innerHTML = '&nbsp;';
        }
    }

    affecterFishAFish2() {
        this.fish2 = this.fishs.find(i => i.idFish === this.fish.idFish);
        console.log(this.fish2.idFish);
        this.spotService.getSpotsByFish(this.fish2.idFish).subscribe(
            (data: Spot[]) => {
                this.spots = data;
                this.actualiserFishSpot();
            });
    }
    removeFeature() {
        this.vectorLayer.getSource().clear();
    }

    actualiserFishSpot() {
        console.log('actualiser method');
        this.removeFeature();
        //   this.getFishSpot(idFish);
        //   setTimeout(() => {
        for (const s of this.spots) {
            this.add_map_point(s.latitude, s.longitude, s.id, this.imageFish);
        }
        this.map.addLayer(this.vectorLayer);
        //   }, 6000)
    }

    sendTextInputContent() {
        // Send it to WS
        this.webSocket.ws.send(JSON.stringify({
            action: 'message',
            user: this.webSocket.userName,
            message: this.inputText,
            channel: 'general'
        }));
    }

    sendSpeventInputContent() {
        // Send it to WS
        this.s = JSON.stringify(this.spevent);
        console.log('stringified object' + this.s);
        this.websocketforspevent.ws.send(JSON.stringify({
            action: 'message',
            user: this.webSocket.userName,
            message: this.s,
            channel: 'general',
        }));
        this.speventService.getSpeventFromDate().subscribe(
            (data: Spevent[]) => this.spevents = data
        );
    }

    sendAddParticipantInputContent(idEvent) {
        // Send it to WS
        const participantspevent = new Participantspevent();
        participantspevent.userId = this.userId;
        participantspevent.id_event = idEvent;
        this.s = '' + JSON.stringify(participantspevent) + '';
        console.log('stringified object' + this.s);
        this.websocketforspevent.ws.send(JSON.stringify({
            action: 'addParticipant',
            channel: 'general',
            message: this.s
        }));
        //    this.speventService.getSpeventFromDate().subscribe(
        //      (data: Spevent[]) => this.spevents = data
        //);
        this.participantspeventService.getSpeventByUserId(this.userId).subscribe(
            (data: Participantspevent[]) => this.participantspevent = data
        );
    }

    sendRemoveParticipantInputContent(idEvent) {
        // Send it to WS
        const participantspevent = new Participantspevent();
        participantspevent.userId = this.userId;
        participantspevent.id_event = idEvent;
        this.s = '' + JSON.stringify(participantspevent) + '';
        console.log('stringified object' + this.s);
        this.websocketforspevent.ws.send(JSON.stringify({
            action: 'removeParticipant',
            channel: 'general',
            message: this.s
        }));
        //    this.speventService.getSpeventFromDate().subscribe(
        //      (data: Spevent[]) => this.spevents = data
        //);
        this.participantspeventService.getSpeventByUserId(this.userId).subscribe(
            (data: Participantspevent[]) => this.participantspevent = data
        );
    }

// user: this.webSocket.userName,
    pushSpevent() {

        this.speventService
            .addSpevent(this.spevent)
            .subscribe(spevent => this.spevents.push(spevent));
    }

    getUserByEvent(idEvent) {
        //  console.log(this.participantspevent.find(i => i.id_event === idEvent.toString()));
        return this.participantspevent.find(i => i.id_event === idEvent.toString()) !== undefined;
    }

    addFishSpot() {
        this.fishSpot.userId = this.userId;
        console.log(this.fishSpot)
        this.fishspotService.addFishspot(this.fishSpot).subscribe()
    }
}
