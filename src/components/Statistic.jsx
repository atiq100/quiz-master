import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Statistic = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/quiz")

      .then((data) => {
        const quizeLoaded = data.data.data;

        const quizData = quizeLoaded.map((quiz) => {
          const quizes = {
            name: quiz.name,
            total: quiz.total,
          };
          return quizes;
        });
        setDatas(quizData);
      });
  }, []);

  return (
    <div className="md:h-screen h-96 flex justify-center items-center">
      
      <LineChart
        width={350}
        height={200}
        data={datas}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Statistic;
