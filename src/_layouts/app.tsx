import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

interface AppProps {
}

const App: FC<AppProps> = ({}) => {
  // console.log(classes)
  return (
    <div>
      App
      <Link to='/about'>
        About
      </Link>
      <Link to='/shop'>
        Shop
      </Link>
      <Outlet/>
    </div>
  );
};

export default App;