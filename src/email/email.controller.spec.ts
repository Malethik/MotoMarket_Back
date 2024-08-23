import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';

describe('EmailController', () => {
  let controller: EmailController;
  let emailService: EmailService;

  const mockEmailService = {
    sendMail: jest.fn(() => Promise.resolve('Email sent')),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [EmailController],
      providers: [
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
      ],
    }).compile();

    controller = module.get<EmailController>(EmailController);
    emailService = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call EmailService to send an email', async () => {
    const from = 'test@example.com';
    const to = 'recipient@example.com';
    const subject = 'Test Subject';
    const text = 'Test message';

    const result = await controller.sendEmail(from, to, subject, text);

    expect(emailService.sendMail).toHaveBeenCalledWith(from, to, subject, text);
    expect(result).toBe('Email sent');
  });
});
