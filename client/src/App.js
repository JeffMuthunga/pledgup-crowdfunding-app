import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Campaign from './components/pages/Campaign';
import NewCampaign from './components/pages/NewCampaign';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer/Footer'
import CardDetails from './components/common/CardDetails/CardDetails';
import About from './components/common/About';


function App() {
  const [search,setSearch]=useState("")

   function setSearchString(str){
    setSearch(str);   
  }
  return (
    <div>
      <NavBar setSearchString={setSearchString}/>
      <Routes>
        <Route path='/' element={<Home search={search}/>}/>
        <Route path='/campaigns/new' element={<NewCampaign/>}/>
        <Route path='/campaigns' element={<Campaign search={search}/>}/>
        <Route path='/about' element={<About/>}/>  
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>        
        <Route path='/campaigns/:id' element={<CardDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
