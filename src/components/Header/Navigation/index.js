import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gem, Gift, Eye, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <nav className="nav-wrapper py-4" onMouseLeave={() => setDropdownOpen(false)}>
      <div className="container">
        <div className="d-flex centerdiv justify-content-center align-items-center">
          
          {/* LEFT SIDE — Always show New Drops + Premium Picks */}
          <ul className="list list-inline mb-0 d-flex align-items-center">
            <li
              className="list-inline-item mx-2 nav-item position-relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen(!isDropdownOpen)} // mobile support
            >
              <Link to="/" className="d-flex align-items-center">
                <Sparkles size={16} className="me-1" /> New Drops <ChevronDown size={16} />
              </Link>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="submenu shadow position-absolute mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '10px',
                      zIndex: 999,
                    }}
                  >
                    <Link to="/error" className="d-block py-1 px-2">Blaze Born</Link>
                    <Link to="/" className="d-block py-1 px-2">Phoenix Fade</Link>
                    <Link to="/" className="d-block py-1 px-2">Inkferno</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li className="list-inline-item mx-2 nav-item">
              <Link to="/" className="d-flex align-items-center">
                <Gem size={16} className="me-1" /> Premium Picks
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE — Only show on desktop */}
          <ul className="list list-inline mb-0 align-items-center d-none d-md-flex">
            <li className="list-inline-item mx-2 nav-item">
              <Link to="/" className="d-flex align-items-center">
                <Gift size={16} className="me-1" /> Festivals/Deals
              </Link>
            </li>
            <li className="list-inline-item mx-2 nav-item">
              <Link to="/" className="d-flex align-items-center">
                <Eye size={16} className="me-1" /> Find Your Vibe
              </Link>
            </li>
            <li className="list-inline-item mx-2 nav-item">
              <Link to="/" className="d-flex align-items-center">
                <Phone size={16} className="me-1" /> Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger — Only visible on mobile */}
          <button className="btn d-md-none" onClick={() => setSideNavOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {sideNavOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="mobile-side-nav position-fixed top-0 end-0 h-100 bg-white shadow p-4 d-md-none"
            style={{ width: '250px', zIndex: 1000 }}
          >
            <button className="btn mb-3" onClick={() => setSideNavOpen(false)}>
              <X />
            </button>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/" className="d-flex align-items-center">
                  <Gift size={16} className="me-2" /> Festivals/Deals
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="d-flex align-items-center">
                  <Eye size={16} className="me-2" /> Find Your Vibe
                </Link>
              </li>
              <li>
                <Link to="/" className="d-flex align-items-center">
                  <Phone size={16} className="me-2" /> Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
