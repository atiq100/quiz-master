import React from "react";

const Quizes = ({ quiz }) => {
  const { name, logo } = quiz;
  return (
   
     <div className="card w-72 p-0 mx-0 mt-5 bg-slate-800 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Topics</button>
        </div>
      </div>
    </div>
   
  );
};

export default Quizes;
