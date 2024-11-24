import NavLinks from './nav-links';

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 z-50 sticky top-0">
      <div className="flex-1 text-xl">
        <div className="btn btn-ghost text-xl pointer-events-none">
          jaggerharness.dev
        </div>
      </div>
      <NavLinks />
    </div>
  );
}
