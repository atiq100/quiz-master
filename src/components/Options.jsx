import React from "react";
const Options = ({ multiple, quiz }) => {
  console.log(typeof multiple);
  const { correctAnswer } = quiz;
  console.log(correctAnswer);
  const correct = () => {
    if (correctAnswer === multiple) {
      alert("right");
    } else {
      alert("wrong");
    }
  };
  return (
    <label className="cursor-pointer label">
      <input
        onClick={correct}
        type="radio"
        className="radio radio-secondary"
        value={multiple}
      />
      <span className="label-text ml-2">{multiple}</span>
    </label>
  );
};

export default Options;
