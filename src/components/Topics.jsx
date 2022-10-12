import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizes from "./Quizes";

const Topics = () => {
  const data = useLoaderData();
  const quizes = data.data;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-items-center ">
      {quizes.map((quiz) => (
        <Quizes key={quiz.id} quiz={quiz}></Quizes>
      ))}
    </div>
  );
};

export default Topics;
