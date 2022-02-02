import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  message: any;

  constructor(private dataHandler: DatahandlerService) { }

  ngOnInit(): void {
  }

  putMountain() {
    let data = {
      "id": 2,
      "name": "Pazifische Küstengebirge in Nordamerika",
      "location": "Nordamerika",
      "length": 6700,
      "imageUrl": "https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_960_720.jpg",
      "maxHight": 1234,
      
    }
    this.dataHandler.putData(data)
    this.dataHandler.getDataLocal().subscribe( data => {
      this.message = data;
      console.log(this.message)
    })
  }

}
