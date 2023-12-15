import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import AddExpense from './pages/AddExpense';

const App = () => {
  return (
    <div>
    <Header/>
      {/* defined the routes */}
      <Routes>
        <Route path='/'element={<Home/>} exact />
        <Route path='/add-expense' element={<AddExpense/>} exact />

        {/* error route if any other routes is accessed the page will be redirected to home ie '/' */}
        <Route  path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;