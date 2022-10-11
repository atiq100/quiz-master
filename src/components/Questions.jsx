
import React from 'react';

const Questions = ({quiz}) => {
    const { question, options, correctAnswer, id } = quiz;
    
    return (
        
             <div className="card w-6/12 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{question.slice(3,-4)}</h2>
        <div>
       
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
       
    );
};

export default Questions;