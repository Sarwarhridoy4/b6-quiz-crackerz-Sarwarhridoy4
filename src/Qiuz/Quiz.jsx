import { useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Question from "../components/Question/Question";

const Quiz = () => {
  const navigate = useNavigate();
  const quizdata = useLoaderData().data;
  const questionall = quizdata.questions.slice(0, 10);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const answeredCount = useMemo(
    () => Object.keys(selectedAnswers).length,
    [selectedAnswers]
  );

  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    const details = questionall.map((question) => {
      const selected = selectedAnswers[question.id] || null;
      const isCorrect = selected === question.correctAnswer;

      return {
        id: question.id,
        question: question.question,
        selectedAnswer: selected,
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const correctCount = details.filter((item) => item.isCorrect).length;
    const incorrectCount = details.filter(
      (item) => item.selectedAnswer && !item.isCorrect
    ).length;
    const unansweredCount = details.filter(
      (item) => !item.selectedAnswer
    ).length;

    navigate("/report-card", {
      state: {
        topicName: quizdata.name,
        totalQuestions: questionall.length,
        correctCount,
        incorrectCount,
        unansweredCount,
        details,
      },
    });
  };

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
                {answeredCount} Answered
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
                <Question
                  questionall={question}
                  selectedAnswer={selectedAnswers[question.id] || ""}
                  onSelectAnswer={handleSelectAnswer}
                />
              </div>
            ))}
          </div>

          <div className='rounded-3xl bg-base-100/80 p-6 shadow-lg ring-1 ring-base-300/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <p className='text-base-content/70'>
              Review your answers, then generate your report card.
            </p>
            <button className='btn btn-primary' onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
