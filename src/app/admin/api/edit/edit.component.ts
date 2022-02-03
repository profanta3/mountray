import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatahandlerService } from 'src/app/datahandler.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  message: any;

  constructor(private dataHandler: DatahandlerService, private formBuilder: FormBuilder
    , private routed: ActivatedRoute) { }

  mountainForm = this.formBuilder.group({
    id: '',
    name: '',
    location: '',
    length: '',
    imageUrl: '',
    maxHight: ''
  })

  onSubmit(): void {
    if (this.mountainForm.value.name == "" || this.mountainForm.value.location == "" || this.mountainForm.value.length == "" ||
      this.mountainForm.value.imageUrl == "" || this.mountainForm.value.maxHight == "") {
        this.message = "Please fill every input";
        this.mountainForm.reset();
        return;
      }
    let data = {
      "name": this.mountainForm.value.name,
      "location": this.mountainForm.value.location,
      "length": this.mountainForm.value.length,
      "imageUrl": this.mountainForm.value.imageUrl,
      "maxHight": this.mountainForm.value.maxHight,
    }
    this.dataHandler.editData(this.mountainForm.value.id, data).subscribe(data => {
      console.log("Reveived data: ", data);
    })
    this.message = "Succesfully updated Mountain: "+this.mountainForm.value.name;
    //this.mountainForm.reset();
  }

  private current_id = 0

  ngOnInit(): void {
    let ix = this.routed.snapshot.paramMap.get('id');
    if (ix != null) {
      this.fillForm(Number(ix))
      this.current_id = Number(ix);
    }
    console.log("got id to edit: ", ix)
  }

  private fillForm(ix: number) {
    let mountain: any;

    this.dataHandler.getData(ix).subscribe(data => {
      mountain = data;
      this.mountainForm.setValue({
        id: mountain.id,
        name: mountain.name,
        location: mountain.location,
        length: mountain.length,
        imageUrl: mountain.imageUrl,
        maxHight: mountain.maxHight
      });
    });
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
