import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Options from "./Options";
const Questions = ({ quiz }) => {
  const { question, options, correctAnswer, id } = quiz;

  return (
    <div className="card w-full md:w-6/12 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <label htmlFor={id} className=" modal-button ">
            <FontAwesomeIcon
              icon={faEye}
              title="show Answer"
              className="cursor-pointer text-indigo-500 font-bold text-xl"
            ></FontAwesomeIcon>
          </label>
        </div>
        <h2 className="card-title">{question.slice(3, -4)}</h2>
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor={id}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Answer:</h3>
            <p className="py-4">{correctAnswer}</p>
          </div>
        </div>
        <div>
          <div className="form-control items-start ">
            {options.map((p, index) => (
              <Options key={index} multiple={p} quiz={quiz}></Options>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
