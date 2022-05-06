import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import { Photo } from '../Interfaces/photo.interface';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo!: Photo;

  jsonData:Photo =
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }




  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get("id"));

    this.photo = this.jsonData;
  }

}
