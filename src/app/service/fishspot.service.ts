import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gallery} from '../model/Gallery';
import {Fishspot} from '../model/Fishspot';

@Injectable({
  providedIn: 'root'
})
export class FishspotService {

  constructor(private http: HttpClient) { }

  addFishspot (fishSpot: Fishspot) {
    return this.http.post<Gallery>('http://127.0.0.1:8000/addfsp', fishSpot);
  }
}
