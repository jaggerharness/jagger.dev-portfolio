'use client';

import { MoonStars, Sun } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className="navbar bg-base-200 z-10">
      <div className="flex-1 text-xl">
        <a className="btn btn-ghost text-xl" href="/">
          jagger.dev
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-8 items-center">
          {theme == 'dark' ? (
            <MoonStars
              weight="duotone"
              size={24}
              onClick={() => {
                setTheme('light');
                document.documentElement.setAttribute('data-theme', 'pastel');
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
          <Link key={'/'} href={'/'} className="hover:text-primary">
            home
          </Link>
          <Link key={'/about'} href={'/about'} className="hover:text-secondary">
            about
          </Link>
        </ul>
      </div>
    </div>
  );
}
