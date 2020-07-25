import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Spot} from '../model/Spot';
import {Fish} from '../model/Fish';
declare var ol: any;
@Injectable({
  providedIn: 'root'
})
export class SpotService {
  map = new ol.Map({
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
  constructor(private http: HttpClient) {
    this.map.on('pointermove', (evt) => {
      if (evt.dragging) {
        return;
      }
      const  pixel = this.map.getEventPixel(evt.originalEvent);
      this.displayFeatureInfo(pixel);
    });
  }

  getAllSpots() {
    return this.http.get<Spot[]>('http://127.0.0.1:8001/gespo');
  }

  getAllFish() {
    return this.http.get<Fish[]>('http://127.0.0.1:8001/geallf');
  }

  getSpotsByFish(idFish: string) {
    return this.http.get<Spot[]>('http://127.0.0.1:8001/gespf/' + idFish);
  }

  getNbrFisfSpotted() {
    return this.http.get<[1]>('http://127.0.0.1:8001/gefnbr');
  }

  getNbrSpot() {
    return this.http.get<[1]>('http://127.0.0.1:8001/gesponbr');
  }

  displayFeatureInfo = (pixel) => {

    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => {
      return feature;
    });

    const info = document.getElementById('info');
    if (feature) {
      info.innerHTML = feature.getId() + ': ' + feature.get('name');
    } else {
      info.innerHTML = '&nbsp;';
    }
  }

}
