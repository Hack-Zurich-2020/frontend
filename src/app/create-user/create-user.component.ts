import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  public onFormSubmit(): void {
    console.log(this.registerForm.value);
    const createUserRequestBody = {
      ID: this.registerForm.get('ID').value,
      HP: {
        0: this.registerForm.get('BLOOD_PRESSURE').value,
        1: this.registerForm.get('DIABETES').value,
        2: this.registerForm.get('BMI').value,
        3: this.registerForm.get('AGE').value,
        4: this.registerForm.get('LACTOSE_ALLERGY').value,
        5: this.registerForm.get('HIGH_LDL').value,
      },
      IB: 3000

    };
    this.apiService.createUser(createUserRequestBody).subscribe(i => {
this.router.navigate(['/home'], {state: {userID: this.registerForm.get('ID').value}});
    });

  }

  private initFormGroup(): void {
    this.registerForm = new FormGroup({
      ID: new FormControl(''),
      BLOOD_PRESSURE: new FormControl('', Validators.min(1)),
      DIABETES: new FormControl('', [Validators.min(0), Validators.max(1)]),
      BMI: new FormControl('', Validators.min(1)),
      AGE: new FormControl('', Validators.min(1)),
      LACTOSE_ALLERGY: new FormControl('', [Validators.min(0), Validators.max(1)]),
      HIGH_LDL: new FormControl('', Validators.min(0))
    });
  }

}
