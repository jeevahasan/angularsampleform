import { Component, OnInit } from '@angular/core';

import { FarmerService } from '../shared/farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  constructor(private farmerService: FarmerService) { }
  
 // data: any;
  //cropperSettings: CropperSettings;

  changingImage: boolean;
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.farmerService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.farmerService.form.valid){
     if (this.farmerService.form.get('$key').value == null)
       this.farmerService.insertFarmer(this.farmerService.form.value);
       else
       this.farmerService.updateFarmer(this.farmerService.form.value);
       this.showSuccessMessage = true;
       setTimeout(() => this.showSuccessMessage = false, 3000);
     this.submitted = false;
     this.farmerService.form.reset();
     this.farmerService.form.setValue({
      $key: null,
      // fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      age: '',
      address: '',
      location: ''
    });
    }
    //console.log(this.farmerService.form.value);
  }
  changingImageClick(){
    this.changingImage = true;
  }
  saveNewImage(){
    this.changingImage = false;
  }
}
