import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(email: any) {
    const templateParams = {
      to_name: email.to_name,
      from_name: email.from_name,
      message: email.message,
      reply_to: email.reply_to
    };

    return emailjs.send('service_vxdcqaj', 'template_iskosme', templateParams, 'zoZifVSiJPYFiigqG');
      
  }

}