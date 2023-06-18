import { useState } from "react";

export const HelpMessageInput = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [isInputBlur1, setIsInputBlur1] = useState(false);

  const [inputValue2, setInputValue2] = useState("");
  const [isInputBlur2, setIsInputBlur2] = useState(false);

  const handleInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  const isInvalidInputValue1 = inputValue1.length < 2 && isInputBlur1;
  const isInvalidInputValue2 = inputValue2.length < 2 && isInputBlur2;

  return (
    <>
      <div>role='alert',aria-invalid 사용 안함 </div>
      <form>
        <label htmlFor="nick">닉네임</label>
        <input
          id="nick"
          onBlur={() => setIsInputBlur2(true)}
          value={inputValue2}
          onChange={handleInput2}
        />
        {isInvalidInputValue2 && <div>닉네임은 2글자 이상입니다.</div>}
        <button type="submit">버튼</button>
      </form>
      <br />
      <br />
      <div>role='alert',aria-invalid 사용 안함 </div>
      <form>
        <label htmlFor="nick">닉네임</label>
        <input
          id="nick"
          onBlur={() => setIsInputBlur1(true)}
          value={inputValue1}
          onChange={handleInput1}
          aria-errormessage="nickError"
          aria-invalid={isInvalidInputValue1}
        />
        {isInvalidInputValue1 && (
          <div role="alert" id="nickError">
            닉네임은 2글자 이상입니다.
          </div>
        )}
        <button type="submit">버튼</button>
      </form>
    </>
  );
};
