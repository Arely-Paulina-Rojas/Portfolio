import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
  const [active, setActive] = useState('´')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-secondary`}>
      <div>
        <Link 
          to="/" 
          className='flex items-center gap-2' 
          onClick={() => { 
            setActive(""); 
            window.scroll(0, 0); 
          }}>

        </Link>
      </div>
    </nav>
  )
}

export default Navbar