import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-dataset',
  templateUrl: './manage-dataset.component.html',
  styleUrls: ['./manage-dataset.component.css']
})
export class ManageDatasetComponent implements OnInit{
  itemList: string[] = [];
  
  ngOnInit(): void {
    this.a();
  }
      
  a() : void {
    for (let i = 0; i < 100; i++) {
      this.itemList.push("Item #"+i);
    }  
  }
 
}
