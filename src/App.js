import './App.css';
import React from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import AllEvents from './pages/AllEvents';
import EventPage from './pages/EventPage';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Login from './pages/Login';
import { CreateEvent } from './pages';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventPage" element={<EventPage />} />
        <Route path="/allEvents" element={<AllEvents/>} />
        <Route path="/createEvent" element={<CreateEvent/>} />
        
      </Routes>
      <ScrollToTop />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        pauseOnHover
        theme="colored"
      />
      <Footer/>
    </div>
  );
}

export default App;
