import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private trasporter;
  constructor(private configService: ConfigService) {
    this.trasporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure: this.configService.get<boolean>('SMTP_SECURE'),
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }
  async sendMail(
    from: string,
    to: string,
    subject: string,
    text: string,
    html?: string,
  ) {
    const mailOptions = {
      from: '"Portfolio"', //mittente
      to, //destinatario
      subject, //oggetto
      text: `Email inviata da: ${from}\n\n${text}`, //testo
      html, //html
    };
    return await this.trasporter.sendMail(mailOptions);
  }
}
