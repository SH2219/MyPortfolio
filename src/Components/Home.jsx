import React from 'react'
import "../App.css";
import Navbar from './Navbar';
import Text from './Text';
const Home = () => {
  return (
    <>
    <Navbar/>
    <div id='Home' className="bg text-white">
        <Text/>
    </div>
    </>
  )
}

export default Home
