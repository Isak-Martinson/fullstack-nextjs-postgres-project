'use client';
import { useEffect, useState } from 'react';
import Logout from '../logout/LogoutComponent';
import LoginComponent from '../login/LoginComponent';
const NavbarComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [activeLoginForm, setActiveLoginForm] = useState(false);

  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem('isAuth') || 'null'));
  }, []);

  const toggleLoginComponent = () => {
    console.log('TOGGLED');
    if (!activeLoginForm) {
      setActiveLoginForm(true);
    } else {
      setActiveLoginForm(false);
    }
  };
  return (
    <>
      <nav>
        <div className='flex justify-between'>
          <p>Logotyp🫠</p>
          <div className='flex'>
            {isAuth === true ? (
              <button>sign out</button>
            ) : (
              <button onClick={toggleLoginComponent}>sign in</button>
            )}
            <p>🍔</p>
            <Logout />
          </div>
        </div>
      </nav>
      {activeLoginForm ? (
        <LoginComponent toggleFunction={toggleLoginComponent} />
      ) : null}
    </>
  );
};
export default NavbarComponent;
