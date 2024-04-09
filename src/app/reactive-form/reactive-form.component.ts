import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  genders = ["male", "female"];
  signUpForm!: FormGroup;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  getArray(){
    return this.signUpForm.get('hobbies') as FormArray
  }
  onAddHobby(){
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
