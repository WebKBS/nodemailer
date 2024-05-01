'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

export const sendEmail = async (prevState: any, formData: FormData) => {
  try {
    const { name, email, subject } = Object.fromEntries(formData);

    if (!name || !email || !subject) {
      return { message: '모든 필드를 입력해주세요' };
    }

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `문의하기: ${name}(${email})`,
      html: `<p>${subject}</p>`,
    });

    console.log('이메일 전송 성공');
    return { message: '이메일 전송 성공' };
  } catch (error) {
    console.error(error);
  }
};
