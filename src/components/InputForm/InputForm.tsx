import React, { FormEvent, useState } from "react";
import "./InputForm.css";

interface InputFormProps {
  updateName: (inputValue: string) => void;
  defaultPlaceholder: string;
}

const InputForm = (props: InputFormProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.updateName(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder={props.defaultPlaceholder}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default InputForm;
