import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isJobsRoute = location.pathname === '/jobs' && '/bookmarks';
  const isBookmarkRoute = location.pathname === '/bookmarks'

  // Choose the class based on the route
  const className = isJobsRoute ? 'jobsStyle' : 'nav-container';
  const className2 = isBookmarkRoute ? 'jobsStyle2' : 'nav-container'
  const NavContainer = isJobsRoute ? 'jobsNavContainer' : 'nav-container'
  const bookmarkNav = isBookmarkRoute ? ' bookNavContainer' : 'nav-container'

  console.log("Current Path", currentPath)
  return (
    <nav className={`${className} ${className2}`}>
          <ul className={`${NavContainer} ${bookmarkNav}`}>
            <li>
              <Link to="/jobs" className='link'>Jobs</Link>
            </li>
            <li>
              <Link to="/bookmarks" className='link'>Bookmarks</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar