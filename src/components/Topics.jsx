import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Topics = () => {
  const data = useLoaderData();
  const quizTopic = data.data.questions;
  
  return (
    <div className="grid justify-items-center gap-3 mt-5">
        <h3 className="text-xl font-bold text-center">Quiz of {data.data.name}</h3>
        {
            quizTopic.map(quiz=><Questions key={quiz.id} quiz={quiz}></Questions>
               )
        }
    </div>
    
  );
};

export default Topics;
