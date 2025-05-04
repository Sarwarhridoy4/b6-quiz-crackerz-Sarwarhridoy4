import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className='bg-base-200 w-full h-screen flex flex-col items-center justify-center px-4 text-center'>
      <img
        className='w-64 sm:w-72 md:w-80 lg:w-96 mb-6'
        src='https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png'
        alt='Page Not Found'
      />
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-error mb-4'>
        Sorry! Page Not Found!
      </h1>
      <Link to='/'>
        <button className='btn btn-primary'>Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
