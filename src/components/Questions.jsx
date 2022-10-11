import React from "react";

const Questions = ({ quiz }) => {
  const { question, options, correctAnswer, id } = quiz;

  return (
    <div className="card w-full md:w-6/12 bg-base-100 shadow-xl">
      <div className="card-body">
      <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">View Answer</button>
        </div>
        <h2 className="card-title">{question.slice(3, -4)}</h2>
        <div>
          <div className="form-control items-start ">
           {
            options.map((p)=>
                <label className="cursor-pointer label">
              
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text ml-2">{p}</span>
              </label>)
           }
           
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Questions;
