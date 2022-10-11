import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='bg-amber-400 w-full h-[100vh] flex flex-col items-center justify-center'>
      <img className="w-1/4" src="https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png" alt='Page Not Found' />
          <h1 className='text-6xl font-bold'>Sorry! Page Not Found!</h1>
          <Link to='/'>
          <button className="btn btn-error m-10">Back Home</button>
          </Link>
    </div>
  );
};

export default NotFound;
