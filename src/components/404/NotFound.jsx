import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-base-200 px-4 py-12'>
      <div className='absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl' />
      <div className='absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl' />

      <div className='mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center gap-10 text-center'>
        <div className='relative'>
          <div className='absolute -inset-6 rounded-full bg-base-100/70 blur-xl' />
          <img
            className='relative w-60 sm:w-72 md:w-80 lg:w-96 drop-shadow-xl'
            src='https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png'
            alt='Page Not Found'
            width='960'
            height='720'
            loading='lazy'
            decoding='async'
          />
        </div>

        <div className='space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60'>
            Error 404
          </p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-base-content'>
            Page not found
          </h1>
          <p className='text-base text-base-content/70 max-w-xl mx-auto'>
            The page you are looking for might have been moved or no longer
            exists. Try heading back to the homepage.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link to='/'>
            <button className='btn btn-primary'>Back to Home</button>
          </Link>
          <Link to='/topic'>
            <button className='btn btn-ghost'>Browse Topics</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
