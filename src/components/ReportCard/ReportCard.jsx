import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";

const ReportCard = () => {
  const { state } = useLocation();
  const [advice, setAdvice] = useState("");
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const scorePercent = useMemo(() => {
    if (!state?.totalQuestions) return 0;
    return Math.round((state.correctCount / state.totalQuestions) * 100);
  }, [state]);

  useEffect(() => {
    let ignore = false;

    const loadAdvice = async () => {
      setLoadingAdvice(true);
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        if (!ignore) {
          setAdvice(data?.slip?.advice || "Keep practicing one quiz daily.");
        }
      } catch {
        if (!ignore) {
          setAdvice("Keep practicing one quiz daily.");
        }
      } finally {
        if (!ignore) setLoadingAdvice(false);
      }
    };

    loadAdvice();
    return () => {
      ignore = true;
    };
  }, []);

  if (!state) {
    return (
      <div className='relative overflow-hidden bg-base-200/60 page-aurora min-h-screen px-4 py-12'>
        <div className='max-w-3xl mx-auto rounded-3xl bg-base-100/80 p-8 shadow-xl ring-1 ring-base-300/60 text-center space-y-4'>
          <h1 className='text-3xl font-bold text-base-content'>
            No Report Data Found
          </h1>
          <p className='text-base-content/70'>
            Complete a quiz first to generate your report card.
          </p>
          <Link className='btn btn-primary' to='/topic'>
            Go to Topics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='relative overflow-hidden bg-base-200/60 page-aurora min-h-screen px-4 py-10 sm:px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto space-y-8'>
        <header className='rounded-3xl bg-base-100/80 p-6 md:p-8 shadow-xl ring-1 ring-base-300/60'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
            Report Card
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-base-content mt-2'>
            {state.topicName}
          </h1>
          <p className='text-base-content/70 mt-3'>
            Final Score: <span className='font-semibold'>{scorePercent}%</span>
          </p>
        </header>

        <section className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs uppercase tracking-[0.3em] text-base-content/60'>
              Correct
            </p>
            <p className='text-3xl font-bold text-success'>{state.correctCount}</p>
          </div>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs uppercase tracking-[0.3em] text-base-content/60'>
              Incorrect
            </p>
            <p className='text-3xl font-bold text-error'>
              {state.incorrectCount}
            </p>
          </div>
          <div className='rounded-2xl bg-base-100/80 p-5 shadow-lg ring-1 ring-base-300/60'>
            <p className='text-xs uppercase tracking-[0.3em] text-base-content/60'>
              Unanswered
            </p>
            <p className='text-3xl font-bold text-warning'>
              {state.unansweredCount}
            </p>
          </div>
        </section>

        <section className='rounded-3xl bg-base-100/80 p-6 shadow-xl ring-1 ring-base-300/60 space-y-4'>
          <h2 className='text-2xl font-bold text-base-content'>Question Review</h2>
          <div className='space-y-4'>
            {state.details.map((item, index) => (
              <article
                key={item.id}
                className='rounded-2xl border border-base-300/60 bg-base-100/70 p-4'
              >
                <p className='text-xs uppercase tracking-[0.3em] text-base-content/60 mb-2'>
                  Question {index + 1}
                </p>
                <h3
                  className='font-semibold text-base-content mb-3'
                  dangerouslySetInnerHTML={{ __html: item.question }}
                />
                <p className='text-sm text-base-content/70'>
                  Your answer:{" "}
                  <span className='font-medium'>
                    {item.selectedAnswer || "Not answered"}
                  </span>
                </p>
                <p className='text-sm text-base-content/70'>
                  Correct answer:{" "}
                  <span className='font-medium'>{item.correctAnswer}</span>
                </p>
                <span
                  className={`badge mt-3 ${
                    item.selectedAnswer
                      ? item.isCorrect
                        ? "badge-success"
                        : "badge-error"
                      : "badge-warning"
                  }`}
                >
                  {item.selectedAnswer
                    ? item.isCorrect
                      ? "Correct"
                      : "Incorrect"
                    : "Unanswered"}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className='rounded-3xl bg-base-100/80 p-6 shadow-lg ring-1 ring-base-300/60'>
          <h2 className='text-xl font-semibold text-base-content'>Coach Tip (Free API)</h2>
          <p className='text-base-content/70 mt-2'>
            {loadingAdvice ? "Loading advice..." : advice}
          </p>
        </section>

        <div className='flex flex-wrap gap-3'>
          <Link to='/topic' className='btn btn-primary'>
            Try Another Topic
          </Link>
          <Link to='/' className='btn btn-ghost'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
