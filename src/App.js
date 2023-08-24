import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
   <>
   <Header />

   <main>
      <Outlet />
   </main>
   
   <Footer />
   </>
  );
}

export default App;
