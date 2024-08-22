'use client';
import { useEffect, useState } from 'react';
import Logout from '../logout/LogoutComponent';
import LoginComponent from '../login/LoginComponent';
import { RiAddLargeLine } from '@remixicon/react';
const NavbarComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [activeLoginForm, setActiveLoginForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem('isAuth') || 'null'));
  }, []);

  const toggleLoginComponent = () => {
    if (!activeLoginForm) {
      setActiveLoginForm(true);
    } else {
      setActiveLoginForm(false);
    }
  };

  const toggleMenuHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <>
      <p className='fixed'>Logotyp🫠</p>
      <div
        className={`fixed right-4 top-4 p-4 rounded-xl ${
          menuOpen
            ? 'bg-white bg-opacity-100 transition-all ease-in duration-200 w-full max-h-[400px] max-w-[300px]'
            : 'bg-opacity-0 transition-all ease-in duration-200 delay-500 max-w-0 max-h-0'
        }`}
      >
        <div className='w-full flex flex-row justify-end'>
          <button
            className='border-2 border-black border-solid p-2 bg-transparent rounded-full'
            type='button'
            onClick={toggleMenuHandler}
          >
            <RiAddLargeLine className={menuOpen ? 'rotate-45' : ''} />
          </button>
        </div>
        <nav>
          <ul
            className={`text-lg leading-10 list-none transition-all ease-in w-[300px] ${
              menuOpen ? 'opacity-100 delay-200 duration-500' : 'opacity-0'
            }`}
          >
            <li>Log In / Sign Up</li>
            <li>About</li>
            <li>Rules</li>
            <li className='mb-10'>Dark Mode</li>
            {isAuth === true ? (
              <button>sign out</button>
            ) : (
              <button onClick={toggleLoginComponent}>sign in</button>
            )}
            <Logout />
          </ul>
        </nav>
      </div>
      {activeLoginForm ? (
        <LoginComponent toggleFunction={toggleLoginComponent} />
      ) : null}
    </>
  );
};
export default NavbarComponent;
