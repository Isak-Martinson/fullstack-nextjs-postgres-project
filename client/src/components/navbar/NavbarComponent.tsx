'use client';
import { useEffect, useState } from 'react';
import Logout from '../logout/LogoutComponent';
const NavbarComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem('isAuth') || 'null'));
  }, []);
  return (
    <nav>
      <div className='flex justify-between'>
        <p>Logotyp🫠</p>
        <div className='flex'>
          {isAuth === true ? (
            <button>sign out</button>
          ) : (
            <button>sign in</button>
          )}
          <p>🍔</p>
          <Logout />
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponent;
