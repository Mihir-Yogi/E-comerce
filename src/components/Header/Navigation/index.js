import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gem, Gift, Eye, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="nav-wrapper py-4" onMouseLeave={() => setDropdownOpen(false)}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="list list-inline mb-0">
            {/* NEW DROPS with Animated Dropdown */}
            <li
              className="list-inline-item mx-3 nav-item position-relative "
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <Link to="/" className="d-flex align-items-center">
                <Sparkles size={16} className='mr-1'/> New Drops  <ChevronDown size={16} />
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
                    <Link to="/" className="d-block py-1 px-2">Blaze Born</Link>
                    <Link to="/" className="d-block py-1 px-2">Phoenix Fade</Link>
                    <Link to="/" className="d-block py-1 px-2">Inkferno</Link>
                  </motion.div>
                  
                )}
              </AnimatePresence>
              
            </li>

            {/* Other Static Links */}
            <li className="list-inline-item mx-3 nav-item">
              <Link to="/" className="d-flex align-items-center"><Gem size={16} className='mr-1' /> Premium Picks</Link>
            </li>
            <li className="list-inline-item mx-3 nav-item">
              <Link to="/" className="d-flex align-items-center"><Gift size={16} className='mr-1'/> Festivals/Deals</Link>
            </li>
            <li className="list-inline-item mx-3 nav-item">
              <Link to="/" className="d-flex align-items-center"><Eye size={16} className='mr-1'/> Find Your Vibe</Link>
            </li>
            <li className="list-inline-item mx-3 nav-item">
              <Link to="/" className="d-flex align-items-center"><Phone size={16} className='mr-1'/> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
