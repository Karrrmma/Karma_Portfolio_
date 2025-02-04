import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PacmanLoader from "./Components/PacmanLoader";

import Home from './Components/Home'
import {BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/NavBar'
import Portfolio from './Components/Portfolio';
import Work from './Components/Work';
import Contact from './Components/Contact';

import Tools from './Components/Tools';
import Tech from './Components/tech';
const PageWrapper = ({ children, onNavigate }) => {
  const location = useLocation();

  React.useEffect(() => {
    onNavigate();
  }, [location]);

  return <>{children}</>;
};
function App(){
  const [loading, setLoading] = useState(false);

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Simulates loading time
  };
  

  
  return(
    <>
    
    <Router>
    <Navbar></Navbar>
    {loading && <PacmanLoader />}

      <Routes>
        <Route path='/' element={<PageWrapper onNavigate={handleRouteChange}><Home/></PageWrapper>}></Route>
        <Route path='/Contact' element={<PageWrapper onNavigate={handleRouteChange}><Contact/></PageWrapper>}></Route>
        <Route path='/Work' element={<PageWrapper onNavigate={handleRouteChange}><Work/></PageWrapper>}></Route>
        <Route path='/Portfolio' element={<PageWrapper onNavigate={handleRouteChange}><Portfolio/></PageWrapper>}></Route>
        
        
        <Route path='/about' element={<PageWrapper onNavigate={handleRouteChange}><About/></PageWrapper>}>
        
        <Route path='tech' element={<Tech/>}></Route>
        <Route path='tools' element={<Tools/>}></Route>


        </Route>

        
      </Routes>


    </Router>

    </>
  )
  

}
export default App;
//<Route path='/About' element={<About/>}></Route>
  //      <Route path='/Work' element ={<Work/>}></Route>
  //      <Route path='/Portfolio' element={<Portfolio/>}></Route>
   //     <Route path='/Contact' element={<Contact/>}></Route>
