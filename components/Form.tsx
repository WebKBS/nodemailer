const Form = () => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">이름: </label>
          <input type="text" id="name" name="name" placeholder="이름" />
        </div>
        <div>
          <label htmlFor="email">이메일: </label>
          <input type="email" id="email" placeholder="이메일" />
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
