import React from "react";

const Blogs = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* no:1 */}
      <div className='body max-w-lg p-5 min-h-lg mx-auto mt-5 bg-slate-200'>
        <div className='question'>
          <h2 className='text-3xl font-semibold italic'>
            Purpose of react router?
          </h2>
        </div>
        <div className='answer mt-5 text-center font-semibold italic'>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
          </div>
          
          {/* no:2 */}
      <div className='body max-w-lg p-5 min-h-lg mx-auto mt-5 bg-slate-200'>
        <div className='question'>
          <h2 className='text-3xl font-semibold italic'>
            How context API works?
          </h2>
        </div>
        <div className='answer mt-5 text-center font-semibold italic'>
          <p>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
          </p>
        </div>
          </div>
          

          {/* no:3 */}
      <div className='body max-w-lg p-5 min-h-lg mx-auto mt-5 bg-slate-200'>
        <div className='question'>
          <h2 className='text-3xl font-semibold italic'>
            Purpose of use-Ref?
                  </h2>
                  <h4 className="text-2xl italic font-thin">
                  Refs provide a way to access DOM nodes or React elements created in the render method.
                  </h4>
        </div>
        <div className='answer mt-5 text-center font-semibold italic'>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
