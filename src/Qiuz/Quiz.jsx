import { useLoaderData } from "react-router";
import Question from "../components/Question/Question";

const Quiz = () => {
  const quizdata = useLoaderData().data;
  const questionall = quizdata.questions;

  return (
    <div className='relative overflow-hidden bg-base-200/60 page-aurora min-h-screen'>
      <section className='px-4 sm:px-6 lg:px-12 py-10'>
        <div className='max-w-5xl mx-auto space-y-8'>
          <header className='rounded-3xl bg-base-100/80 p-6 md:p-8 shadow-xl ring-1 ring-base-300/60'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
              Topic
            </p>
            <h1 className='text-3xl sm:text-4xl font-bold text-base-content mt-2'>
              {quizdata.name}
            </h1>
            <p className='text-base text-base-content/70 mt-3 max-w-2xl'>
              Answer each question to measure your understanding and identify
              gaps quickly.
            </p>
            <div className='mt-5 flex flex-wrap gap-3'>
              <span className='badge badge-primary badge-lg'>
                {questionall.length} Questions
              </span>
              <span className='badge badge-outline badge-lg'>
                Timed practice
              </span>
            </div>
          </header>

          <div className='space-y-6'>
            {questionall.map((question, index) => (
              <div
                key={question.id}
                className='rounded-3xl bg-base-100/80 p-4 sm:p-6 shadow-lg ring-1 ring-base-300/60'
              >
                <div className='text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50 mb-4'>
                  Question {index + 1}
                </div>
                <Question questionall={question}></Question>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
