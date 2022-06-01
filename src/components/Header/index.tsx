import React from 'react';
import Style from './Header.module.css'
const Header = (props:{toggleReset:()=>void;}) => {
  return (
    <nav className={Style.Header}>
        <h1>Countdown Counter</h1>
        <button onClick={props.toggleReset}>Reset</button>
    </nav>
  );
}

export default Header;
