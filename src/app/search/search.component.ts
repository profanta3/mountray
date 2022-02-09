import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  mList: any;

  searchForm = this.formBuilder.group({
    search: ''
  })

  onSubmit() {
    for (let item of this.mList) {
      for (const [key, value] of Object.entries(item)) {
        //console.log(`${key}: ${value}`);
        if (`${value}`.includes(this.searchForm.value.search)) {
          console.log("Hit with Values: ", `${value}`);
          this.message += item;
          break;
        }
      }
    }
    this.dataHandler.currentFilteredList = this.message;
    window.location.reload();
    console.log("searched....")
    //this.message = '<div><ul class="list-group"><ng-container *ngIf="mList"><li class="list-group-item shadow mb-4" *ngFor="let item of mList"><div class="row"><div class="col">      <p>Name: {{ item.name }}</p><p>Ort: {{ item.location }}</p><p>Länge: {{ item.length }}</p><p>Maximale Höhe: {{ item.maxHight }}</p></div><div class="col-3"><img src="{{item.imageUrl}}" alt="{{item.name}}-Image" class="img-thumbnail"></div></div></li></ng-container></ul></div>'
  }

  getData() {
    if (this.dataHandler.currentFilteredList.length == 0) {
      this.dataHandler.getDataLocal()
      .subscribe(d => {
        this.mList = d;
      });
    }
    else {
      this.mList = this.dataHandler.currentFilteredList;
    }
  }

  message = "";

}

