import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 fixed">
      <div className="flex-1 text-xl">
        <a className="btn btn-ghost text-xl" href="/">
          jagger.dev
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link key={'/'} href={'/'} className="hover:text-primary">
              home
            </Link>
          </li>
          <li>
            <Link
              key={'/about'}
              href={'/about'}
              className="hover:text-secondary"
            >
              about
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
