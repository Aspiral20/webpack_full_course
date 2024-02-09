import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import examplePng from '@/assets/example.png'
import exampleJpg from '@/assets/example.jpg'
import exampleSvg from '@/assets/example.svg'

interface AppProps {
}

const App: FC<AppProps> = ({}) => {
  // console.log(classes)
  return (
    <div>
      App
      <img src={examplePng} width={100} height={100} alt="..."/>
      <img src={exampleJpg} width={100} height={100} alt="..."/>
      {/*<img src={exampleSvg} width={100} height={100} alt="..."/>*/}
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