import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  
  reservationForm:FormGroup= new FormGroup({});
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.reservationForm=this.formBuilder.group({
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required],
      GuestName:['', Validators.required],
      GuestEmail:['', Validators.required],
      RoomNumber:['', Validators.required]
    })
  }
  onSubmit(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm)
    }else{
      console.log("not valid")
    }
  }
}
