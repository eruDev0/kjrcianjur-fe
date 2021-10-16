import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathUrl = router.pathname;
  const navLinks = [
    {
      name: 'Beranda',
      path: '/',
    },
    {
      name: 'Tentang',
      path: '/about',
    },
    {
      name: 'Artikel',
      path: '/articles',
    },
    {
      name: 'Kontak',
      path: '/contact',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center text-white justify-between w-full md:w-auto">
        <Link href="/">
          <a className="flex items-center">
            <div className="w-8 h-8 overflow-hidden">
              <img
                src="/images/logo-kjr-circle.png"
                alt="Logo KJR"
                className="object-cover object-center"
              />
            </div>
            <h2 className="ml-2 font-bold text-base">KJR Cianjur</h2>
          </a>
        </Link>
        <button className="block md:hidden" onClick={hamburgerClickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      <div className={`overlay ${isOpen && 'show'}`}></div>
      <div
        className={`nav-menu ${
          isOpen ? 'show' : ''
        } bg-primary-200 shadow-lg text-center uppercase fixed left-0 right-0 m-2 rounded-md md:shadow-none md:capitalize md:text-left md:rounded-none md:bg-transparent md:relative md:flex md:items-center`}
      >
        <div className="flex items-center justify-between px-2 py-3 md:hidden">
          <Link href="/">
            <a className="w-8 h-8 overflow-hidden">
              <img
                src="/images/logo-kjr-circle.png"
                alt="Logo KJR"
                className="object-cover object-center"
              />
            </a>
          </Link>
          <button className="close" onClick={hamburgerClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-2 flex flex-col border-t border-primary-100 md:flex-row md:p-0 md:border-none">
          {navLinks.map((navLink, i) => (
            <Link href={navLink.path} key={i}>
              <a
                className={`${
                  navLink.path === pathUrl ? 'active' : ''
                } nav-link block my-2 mx-0 md:my-0 md:mx-2 p-2 rounded`}
                onClick={() => setIsOpen(false)}
              >
                {navLink.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
