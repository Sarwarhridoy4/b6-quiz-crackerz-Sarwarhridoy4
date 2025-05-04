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
    <div className='w-full min-h-screen py-10 px-4'>
      <div className='max-w-3xl mx-auto space-y-8'>
        {blogItems.map((item, index) => (
          <div
            key={index}
            className='shadow-md rounded-2xl p-6 md:p-8 transition hover:shadow-lg'
          >
            <h2 className='text-2xl md:text-3xl font-bold text-amber-100 mb-2'>
              {item.question}
            </h2>
            {item.note && (
              <h4 className='text-md md:text-lg italic text-amber-300 mb-4'>
                {item.note}
              </h4>
            )}
            <p className='text-amber-200 text-base md:text-lg leading-relaxed'>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
