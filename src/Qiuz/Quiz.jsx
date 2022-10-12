import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../components/Question/Question";

const Quiz = () => {
  const quizdata = useLoaderData().data;
  const questionall = quizdata.questions;
  // console.log(questionall);
  // console.log(quizdata);
  return (
    <div>
      <section className='bg-gray-800 text-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
          <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>
            Topic:{quizdata.name}
          </p>
          {questionall.map((question) => (
            <Question questionall={question}></Question>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
