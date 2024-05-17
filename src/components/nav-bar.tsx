// import { MoonStars, Sun } from '@phosphor-icons/react/dist/ssr';
// import { useState } from 'react';
// import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

// export default function Navbar() {
//   const [theme, setTheme] = useState('dark');
//   return (
//     <div className="navbar bg-base-200 z-10">
//       <div className="flex-1 text-xl">
//         <a className="btn btn-ghost text-xl" href="/">
//           jagger.dev
//         </a>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal px-1 gap-8 items-center">
//           {theme == 'dark' ? (
//             <MoonStars
//               weight="duotone"
//               size={24}
//               onClick={() => {
//                 setTheme('light');
//                 document.documentElement.setAttribute('data-theme', 'emerald');
//               }}
//             />
//           ) : (
//             <Sun
//               weight="duotone"
//               size={24}
//               onClick={() => {
//                 setTheme('dark');
//                 document.documentElement.setAttribute('data-theme', 'dim');
//               }}
//             />
//           )}
//           <Link to="home" spy={true} smooth={true}>
//             <button className="hover:text-primary">home</button>
//           </Link>
//           <Link to="aboutMe" spy={true} smooth={true}>
//             <button className="hover:text-secondary">about</button>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }
