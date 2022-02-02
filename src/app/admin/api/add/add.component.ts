import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../../../datahandler.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  message: any;

  constructor(private dataHandler: DatahandlerService, private formBuilder: FormBuilder) { }

  mountainForm = this.formBuilder.group({
    name: '',
    location: '',
    length: '',
    imageUrl: '',
    maxHight: ''
  })

  onSubmit(): void {
    let data = {
      "name": this.mountainForm.value.name,
      "location": this.mountainForm.value.location,
      "length": this.mountainForm.value.length,
      "imageUrl": this.mountainForm.value.imageUrl,
      "maxHight": this.mountainForm.value.maxHight,
    }
    this.dataHandler.putData(data)
    this.message = "Succesfully added Mountain: "+this.mountainForm.value.name;
    this.mountainForm.reset();
  }

  

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
