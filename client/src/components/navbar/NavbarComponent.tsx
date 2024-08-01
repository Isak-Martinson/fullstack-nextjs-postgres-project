'use client';
import { useEffect, useState } from 'react';
const NavbarComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem('isAuth') || 'null'));
  }, []);
  return (
    <nav>
      <div>
        <p>Logotyp🫠</p>
        <div>
          {isAuth === true ? <button>log out</button> : <button>log in</button>}
          <p>🍔</p>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponent;
