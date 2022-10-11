import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const information = useLoaderData().data;
    console.log(information);
  return (
    <div>
      <h2>This is Statistics Page</h2>
    </div>
  );
};

export default Statistics;
