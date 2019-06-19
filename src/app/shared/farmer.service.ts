import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private firebase: AngularFireDatabase) { }
  farmerList: AngularFireList<any>;
  
  form = new FormGroup({
    $key: new FormControl(new FormControl('',Validators.email)),
    // fullName: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10)]),
    age: new FormControl(''),
    address: new FormControl(''),
    location: new FormControl('')
  });

  getFarmers(){
    this.farmerList = this.firebase.list('farmers');
    return this.farmerList.snapshotChanges();
  }

  insertFarmer(farmer){
    this.farmerList.push({
      // fullName: farmer.fullName,
      firstName: farmer.firstName,
      lastName: farmer.lastName,
      email: farmer.email,
      mobile: farmer.mobile,
      age: farmer.age,
      address: farmer.address,
      location: farmer.location
    });
    // console.log("inserting");
    // console.log(farmer.fullName);
    // console.log(farmer.location);
  }

  populateForm(farmer){
    this.form.setValue(farmer);
  }

  updateFarmer(farmer){
    this.farmerList.update(farmer.$key, 
    {
      // fullName: farmer.fullName,
      firstName: farmer.firstName,
      lastName: farmer.lastName,
      email: farmer.email,
      mobile: farmer.mobile,
      age: farmer.age,
      address: farmer.address,
      location: farmer.location
    });
  }

  deleteFarmer($key: string){
    this.farmerList.remove($key);
  }
}
