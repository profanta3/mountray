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

  //the Form for adding a new mountain entry  
  mountainForm = this.formBuilder.group({
    name: '',
    location: '',
    length: '',
    imageUrl: '',
    maxHight: ''
  })

  /**
   * Called when the Add Button is pressed to save the new values to backend
   * @returns 
   */
  onSubmit(): void {
    if (this.mountainForm.value.name == "" || this.mountainForm.value.location == "" || this.mountainForm.value.length == "" ||
      this.mountainForm.value.imageUrl == "" || this.mountainForm.value.maxHight == "") {
        this.message = "Please fill every input";
        this.mountainForm.reset();
        return;
      }
    
    //Prepare JSON Body for API call...
    let data = {
      "name": this.mountainForm.value.name,
      "location": this.mountainForm.value.location,
      "length": this.mountainForm.value.length,
      "imageUrl": this.mountainForm.value.imageUrl,
      "maxHight": this.mountainForm.value.maxHight,
    }

    //send the JSON Object to datahandler service and init API call
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
