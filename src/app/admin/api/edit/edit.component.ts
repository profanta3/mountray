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

  //the Form for updating a mountain entry  
  mountainForm = this.formBuilder.group({
    id: '',
    name: '',
    location: '',
    length: '',
    imageUrl: '',
    maxHight: ''
  })

  /**
   * Called when the Update Button is pressed to save the updated values to backend
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
    this.dataHandler.editData(this.mountainForm.value.id, data).subscribe(data => {
      console.log("Reveived data: ", data);
    })
    this.message = "Succesfully updated Mountain: "+this.mountainForm.value.name;
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

  /**
   * Called when the EDIT Page is opened with a id as suffix.
   * Fills the form with specific mountain entries
   * @param ix id of mountain
   */
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
}
