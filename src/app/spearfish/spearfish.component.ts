import {Component, OnInit} from '@angular/core';
import {Spot} from '../model/Spot';
import {SpotService} from '../service/spot.service';
import {Fish} from '../model/Fish';

declare var ol: any;

@Component({
  selector: 'app-spearfish',
  templateUrl: './spearfish.component.html',
  styleUrls: ['./spearfish.component.css']
})
export class SpearfishComponent implements OnInit {

  latitude = 18.5204;
  longitude = 73.8567;
  title = 'AngularSpark';
  map: any;
  vectorLayer;
  spots: Spot[];
  fish: Fish = new Fish();
  fishs: Fish[];
  private info: HTMLElement;
  private highlight: any;
  myStyle;

  constructor(private spotService: SpotService) {
  }

  ngOnInit() {
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
      (data: Spot[]) => this.spots = data
    );
    this.spotService.getAllFish().subscribe(
        (data: Fish[]) => this.fishs = data
    );
    this.map.on('pointermove', (evt) => {
      if (evt.dragging) {
        return;
      }
      const pixel = this.map.getEventPixel(evt.originalEvent);
      this.displayFeatureInfo(pixel);
    });

  }

  add_map_point(lat, lng, name) {
    this.myStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255,100,50,0.5)'
      }),
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
      }),
      text: new ol.style.Text({
        textAlign: 'Start',
        textBaseline: 'Middle',
        font: 'Normal 12px Arial',
        text: 'Approximate Area',
        fill: new ol.style.Fill({
          color: '#ffa500'
        }),
        stroke: new ol.style.Stroke({
          color: '#000000',
          width: 3
        }),
        offsetX: -45,
        offsetY: 0,
        rotation: 0
      })
    });
    this.vectorLayer = new ol.layer.Vector({
     // style: this.myStyle,
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
          label: name
        })]
      }),
      /*   text: new ol.style.Text({
           textAlign: 'Start',
           textBaseline: 'Middle',
           font: 'Normal 12px Arial',
           text: 'Approximate Area',
           fill: new ol.style.Fill({
             color: '#ffa500'
           }),
           stroke: new ol.style.Stroke({
             color: '#000000',
             width: 3
           }),
           offsetX: -45,
           offsetY: 0,
           rotation: 0
         }), */
         style: new ol.style.Style({
           image: new ol.style.Icon({
             anchor: [0.5, 0.5],
             anchorXUnits: 'fraction',
             anchorYUnits: 'fraction',
            // src: 'https\\Fish_Food_icon-icons.com_68747.svg'
             src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg'
           })
         }),
    });

    this.map.addLayer(this.vectorLayer);
  }

  actualiseSpots() {
    for (const s of this.spots) {
      this.add_map_point(s.latitude, s.longitude, s.id);
    }
  }

  displayFeatureInfo = (pixel) => {

    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => {
      console.log(feature);
      return feature;
    });

    const info = document.getElementById('info');
    if (feature) {
      info.innerHTML = feature.getId() + ': ' + feature.get('label');
    } else {
      info.innerHTML = '&nbsp;';
    }
  }
}
