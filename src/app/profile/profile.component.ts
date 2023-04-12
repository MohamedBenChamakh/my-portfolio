import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formGroup: FormGroup;
  email: any;
  isSent = false;
  isAvailable = true;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      to_name: 'Mohamed',
      from_name: ['', Validators.required],
      message: ['', Validators.required],
      reply_to: 'mohamed.ben.chamakh98@gmail.com',
    });
  }

  sendEmail() {
    this.email = this.formGroup.value;
    this.emailService.sendEmail(this.email).then((result: any) => {
      console.log(result.text);
      this.isSent = true;
    }, (error: any) => {
      console.log(error.text);
    });;
    this.initForm();
  }

  checkCv(){
    this.isAvailable = false;
  }
}
