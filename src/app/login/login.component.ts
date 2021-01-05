import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import swal from "sweetalert2";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  minute = 2;
  second = 0;
  dayofweek = "شنبه"
  year = "1400"
  month = "10"
  day = "5"
  hour = "17"
  minutet="20"

  loginform = this.fb.group({
    tellnum:['',Validators.required,Validators.pattern(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/)],
    nc: [''],
    password:['',Validators.required],
  })

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    let xtimer = setInterval(() => {
      if (this.second === 0) {
        this.minute--;

        this.second = 59;
      } else {
        this.second--;
        if (this.second <= 0) {
          clearInterval(xtimer);
          swal.fire(
            'پایان نوبت گیری',
            'وقت نوبت گیری شما به پایان رسید',
            'error'
          )
        }

      }
    }, 1000)

  }

  onSubmit() {
    if (this.loginform.valid) {
      console.log('success!')

    }
    else {
     console.log('fuckkk');

    }
  }

}
