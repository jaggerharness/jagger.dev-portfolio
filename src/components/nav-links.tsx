'use client';

import { Link } from 'react-scroll';
import { MoonStars, Sun } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export default function NavLinks() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-8 items-center">
        {theme == 'dark' ? (
          <MoonStars
            weight="duotone"
            size={24}
            onClick={() => {
              setTheme('light');
              document.documentElement.setAttribute('data-theme', 'garden');
            }}
          />
        ) : (
          <Sun
            weight="duotone"
            size={24}
            onClick={() => {
              setTheme('dark');
              document.documentElement.setAttribute('data-theme', 'dim');
            }}
          />
        )}
        <Link to="home" spy={true} smooth={true} className="hidden sm:block">
          <button className="hover:text-primary">home</button>
        </Link>
        <Link to="aboutMe" spy={true} smooth={true} className="hidden sm:block">
          <button className="hover:text-secondary">about</button>
        </Link>
        <Link to="contact" spy={true} smooth={true} className="hidden sm:block">
          <button className="hover:text-accent">contact</button>
        </Link>
      </ul>
    </div>
  );
}
