import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Quizes from "./Quizes";

const Home = () => {
  const data = useLoaderData();
  const quizes = data.data;
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=740&t=st=1665423289~exp=1665423889~hmac=b2a1304226cc487ee9a26b2ffb6635ebe847fe54144e6d7defe7c47a4745b2d9")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Test Your Knowledge In Minutes
            </h1>
            <p className="mb-5">
              Play our amazing 'Programming language quiz' that will test your
              knowledge about the concepts of HTML,CSS,JS,React
            </p>
            <button className="btn btn-primary"><Link to='/topics'>Let's Start</Link></button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold ml-6 mt-4 ">Topic Lists</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-items-center ">
        {quizes.map((quiz) => (
          <Quizes key={quiz.id} quiz={quiz}></Quizes>
        ))}
      </div>
    </div>
  );
};

export default Home;
