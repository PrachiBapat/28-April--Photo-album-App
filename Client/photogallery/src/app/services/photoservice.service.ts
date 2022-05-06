import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../Interfaces/photo.interface';


@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {
  private url = "http://localhost:4400/photosapi"
  constructor(private http:HttpClient) { }

    // will send array of photos
    getAllPhotos(){
      return this.http.get<Photo[]>(this.url);
    }
    // It will send only one photo
    // Ask for the id first
    //http.get will talk to the server
    getPhotosById(id:number){
      return this.http.get<Photo>(this.url + "/" + id);
    }
  }



