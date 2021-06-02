import React,{useState}from 'react';
import './index.scss'
import './mobileIndex.scss'
import Header from './Header';
import HomeList from './HomeList'
import Awards from './Awards'
import SingleItem from './SingleItem'
import Footer from './Footer'

import Data from "./data.json"
import AwardJson from "./award.json"
function App() {
  const [isOpen , setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);

  const handleAddClick = (dataId) => {
    const results  =   Data.find((d)=>{
      return d.id === dataId
    })
    setSearchResults(results)

    setIsOpen(!isOpen)
  };
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className="App">
      {
        isOpen ?  <SingleItem data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
      
      <Header slides={Data}/>
      {/* <Awards/> */}
      <div className="container">
        <Awards  data={AwardJson} handler={handleAddClick}/>

        <HomeList  data={Data} handler={handleAddClick}/>
      </div>
      <div className="container">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
