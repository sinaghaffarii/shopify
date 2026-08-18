import Kavenegar from 'kavenegar';
import { env } from '@/config/env.js';

const kavenegarApi = Kavenegar.KavenegarApi({
  apikey: env.kavenegarApiKey,
});

export async function sendOtpSms(phone: string, code: string): Promise<void> {
  if (env.isDevelopment || env.isTest) {
    console.log(`📱 [DEV OTP] Sending code ${code} to ${phone}`);
    return;
  }

  await new Promise<void>((resolve, reject) => {
    kavenegarApi.VerifyLookup(
      {
        receptor: phone,
        token: code,
        template: env.kavenegarSenderTemplate,
      },
      (response: unknown, status: number) => {
        if (status !== 200) {
          reject(new Error(`Kavenegar SMS failed with status ${status}`));
          return;
        }
        resolve();
      },
    );
  });
}
