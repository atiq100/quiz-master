import React from "react";
import { useNavigate } from "react-router-dom";

const Quizes = ({ quiz }) => {
  const navigate = useNavigate();
  const navigateHandle = () => {
    navigate(`/topics/${id}`);
  };
  const { name, logo, id } = quiz;
  return (
    <div className="card w-72 p-0 mx-0 mt-5 bg-slate-800 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <div className="card-actions justify-end">
          <button onClick={navigateHandle} className="btn btn-primary">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizes;
