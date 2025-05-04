import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <div className='navbar bg-primary sticky top-0 z-50 shadow-lg'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            <span className='text-amber-600'>Q</span> uizzily
          </Link>
        </div>
        <div className='flex-none'>
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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link
                  to='/home'
                  className='hover:bg-primary px-4 py-2 rounded-lg transition duration-200'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/topic'
                  className='hover:bg-primary px-4 py-2 rounded-lg transition duration-200'
                >
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  to='/statistics'
                  className='hover:bg-primary px-4 py-2 rounded-lg transition duration-200'
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  to='/blogs'
                  className='hover:bg-primary px-4 py-2 rounded-lg transition duration-200'
                >
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
