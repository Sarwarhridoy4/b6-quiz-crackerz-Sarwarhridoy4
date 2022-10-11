import React from "react";
import { Link, Link as NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className='navbar bg-amber-300'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            <span className='text-red-600'>Q</span> uizzily
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
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <NavLink to='/home'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/topic'>Topics</NavLink>
              </li>
              <li>
                <NavLink to='/statistics'>Statistics</NavLink>
              </li>
              <li>
                <NavLink to='/blogs'>Blogs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
