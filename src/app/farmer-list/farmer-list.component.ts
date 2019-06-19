import { Component, OnInit } from '@angular/core';

import { FarmerService } from '../shared/farmer.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css']
})
export class FarmerListComponent implements OnInit {

  constructor(private farmerService: FarmerService) { }
  farmerArray = []; 
  showDeletedMessage: boolean;
  searchText: string ="";

  ngOnInit() {
    this.farmerService.getFarmers().subscribe(
      list => {
        this.farmerArray = list.map(item => {
          return{
            $key: item.key,
           ...item.payload.val()
          };
        });
      }
    );
  }

  onDelete($key){
    if(confirm("Are you sure to delete this record ?")){
      this.farmerService.deleteFarmer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(farmer){
    // return farmer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    return farmer.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;

  }
}
