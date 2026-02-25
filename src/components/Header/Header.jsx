import { Link } from "react-router";

const Header = () => {
  return (
    <nav className='sticky top-0 z-50'>
      <div className='navbar bg-base-100/80 backdrop-blur-xl shadow-lg px-4 sm:px-6 lg:px-12'>
        <div className='flex-1'>
          <Link to='/' className='flex items-center gap-2 text-xl font-semibold'>
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary font-bold'>
              Q
            </span>
            <span className='tracking-tight text-base-content'>Quizzily</span>
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-2'>
          <Link
            to='/home'
            className='btn btn-ghost rounded-full text-sm font-semibold'
          >
            Home
          </Link>
          <Link
            to='/topic'
            className='btn btn-ghost rounded-full text-sm font-semibold'
          >
            Topics
          </Link>
          <Link
            to='/statistics'
            className='btn btn-ghost rounded-full text-sm font-semibold'
          >
            Statistics
          </Link>
          <Link
            to='/blogs'
            className='btn btn-ghost rounded-full text-sm font-semibold'
          >
            Blogs
          </Link>
        </div>

        <div className='flex-none md:hidden'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost'>
              <div className='w-10'>
                <svg
                  className='mx-auto inline-block w-5 h-5 stroke-current'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </div>
            </label>
            <ul
              tabIndex={1}
              className='menu dropdown-content mt-3 w-56 rounded-2xl bg-base-100/95 p-2 shadow-xl ring-1 ring-base-300/60'
            >
              <li>
                <Link to='/home' className='rounded-lg'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/topic' className='rounded-lg'>
                  Topics
                </Link>
              </li>
              <li>
                <Link to='/statistics' className='rounded-lg'>
                  Statistics
                </Link>
              </li>
              <li>
                <Link to='/blogs' className='rounded-lg'>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
