'use client';

import { sendEmail } from '@/lib/action';
import { useFormState } from 'react-dom';

const Form = () => {
  const [actionState, formAction] = useFormState(sendEmail, null);

  console.log('Form', actionState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 text-black">
        <div>
          <label htmlFor="name">이름: </label>
          <input type="text" id="name" name="name" placeholder="이름" />
        </div>
        <div>
          <label htmlFor="email">이메일: </label>
          <input type="email" id="email" name="email" placeholder="이메일" />
        </div>
        <div>
          <label htmlFor="subject">문의 내용: </label>
          <textarea placeholder="문의 내용" id="subject" name="subject" />
        </div>
      </div>
      <button type="submit">전송</button>
    </form>
  );
};

export default Form;
