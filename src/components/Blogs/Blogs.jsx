const Blogs = () => {
  const blogItems = [
    {
      question: "Purpose of React Router?",
      answer:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
    },
    {
      question: "How Context API works?",
      answer:
        "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
    },
    {
      question: "Purpose of useRef?",
      note: "Refs provide a way to access DOM nodes or React elements created in the render method.",
      answer:
        "The useRef hook allows you to persist values across renders without causing a re-render. It's often used to directly access a DOM element or to keep a mutable variable that doesn’t trigger re-renders when updated.",
    },
  ];

  return (
    <div className='relative overflow-hidden w-full min-h-screen bg-base-200/60 page-aurora py-12 px-4 sm:px-6 lg:px-12'>
      <div className='max-w-5xl mx-auto space-y-10'>
        <header className='text-center space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
            Developer Notes
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content'>
            Blog & Knowledge Base
          </h1>
          <p className='text-base text-base-content/70 max-w-2xl mx-auto'>
            Quick explanations and practical answers to the questions that show
            up in every interview or daily build.
          </p>
        </header>

        <div className='grid gap-6'>
          {blogItems.map((item, index) => (
            <article
              key={index}
              className='card-sheen rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-base-300/50 transition hover:-translate-y-1 hover:shadow-2xl'
            >
              <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
                <div className='space-y-3'>
                  <h2 className='text-2xl md:text-3xl font-bold text-base-content'>
                    {item.question}
                  </h2>
                  {item.note && (
                    <p className='text-sm md:text-base font-medium text-primary/80'>
                      {item.note}
                    </p>
                  )}
                </div>
                <span className='inline-flex items-center rounded-full bg-base-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-base-content/60 ring-1 ring-base-300/60'>
                  Guide
                </span>
              </div>
              <p className='mt-4 text-base md:text-lg leading-relaxed text-base-content/80'>
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
