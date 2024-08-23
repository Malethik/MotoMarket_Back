import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import * as nodemailer from 'nodemailer';
import { ConfigModule } from '@nestjs/config';

jest.mock('nodemailer');

describe('EmailService', () => {
  let service: EmailService;

  const mockSendMail = jest.fn(() => Promise.resolve('Email sent'));

  beforeEach(async () => {
    nodemailer.createTransport.mockReturnValue({
      sendMail: mockSendMail,
    });

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [EmailService],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should send an email', async () => {
    const result = await service.sendMail(
      'test@example.com',
      'recipient@example.com',
      'Test Subject',
      'Test text',
    );

    expect(mockSendMail).toHaveBeenCalled();
    expect(result).toBe('Email sent');
  });
});
