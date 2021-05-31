import React,{useState}from 'react';
import './index.scss'
import './mobileIndex.scss'
import Header from './Header';
import HomeList from './HomeList'
import Awards from './Awards'
import SingleItem from './SingleItem'
import Footer from './Footer'

import Data from "./data.json"
function App() {
  const [isOpen , setIsOpen] = useState(false)
  const [Number , setNumber] = useState(0)
  const handleAddClick = (index) => {
    setNumber(index)
    setIsOpen(!isOpen)
  };
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className="App">
      {
        isOpen ?  <SingleItem data={Data[Number]} handler={handleOpen} visible={isOpen} /> : null
      }
      
      <Header slides={Data}/>
      {/* <Awards/> */}
      <div className="container">
        {/* <Awards/> */}

        <HomeList  data={Data} handler={handleAddClick}/>
      </div>
      <div className="container">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
