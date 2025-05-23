import { useLoaderData } from "react-router";
import Question from "../components/Question/Question";

const Quiz = () => {
  const quizdata = useLoaderData().data;
  const questionall = quizdata.questions;

  return (
    <div>
      <section className='bg-gray-800 text-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
          <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>
            Topic:{quizdata.name}
          </p>
          {questionall.map((question) => (
            <Question key={question.id} questionall={question}></Question>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
