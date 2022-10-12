import React from "react";
import { toast } from "react-toastify";
const Options = ({ multiple, quiz }) => {
  //console.log(typeof multiple);
  const { correctAnswer } = quiz;
  //console.log(correctAnswer);
  const correct = () => {
    if (correctAnswer === multiple) {
      toast.success("Your answer is correct!");
    } else {
        toast.error("Your answer is wrong!");
    }
  };
  return (
    <label className="cursor-pointer label">
      <input
        onClick={correct}
        type="radio"
        name="radio"
        className="radio radio-secondary"
        value={multiple}
      />
      <span className="label-text ml-2">{multiple}</span>
    </label>
  );
};

export default Options;
