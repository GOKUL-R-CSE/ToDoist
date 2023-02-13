
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'

import Main from './Components/Main'
import Inbox from './pages/Inbox';
import Upcoming from './pages/Upcoming';
import Today from './pages/Today';
import Completed from './pages/Completed';
import About from './pages/About';
import Documentation from './pages/Documentation'
import Expired from './pages/Expired';




// import About from './pages/About.jsx'
// import Blog from './pages/Blog'
// import Home from './pages/Home'


function App() {
  const user = useAuthContext()
  console.log(user);

  return (
    <>
      <Routes>
        <Route path='/' exact element={!user.user ? <Main /> : <Navigate to='/home' />} ></Route>
        <Route path='/login' exact element={!user.user ? <Login /> : <Navigate to='/home' />} ></Route>
        <Route path='/signup' exact element={!user.user ? <Signup /> : <Navigate to='/home' />} ></Route>
        <Route path='/home' exact element={user.user ? <Home /> : <Navigate to='/' />}></Route>
        <Route path='/inbox' exact element={user.user ? <Inbox /> : <Navigate to='/' />}></Route>
        <Route path='/tomorrow' exact element={user.user ? <Upcoming /> : <Navigate to='/' />}></Route>
        <Route path='/today' exact element={user.user ? <Today /> : <Navigate to='/' />}></Route>
        <Route path='/completed' exact element={user.user ? <Completed /> : <Navigate to='/' />}></Route>
        <Route path='/about' exact element={user.user ? <About /> : <Navigate to='/' />}></Route>
        <Route path='/documentation' exact element={user.user ? <Documentation /> : <Navigate to='/' />}></Route>
        <Route path='/expired' exact element={user.user ? <Expired /> : <Navigate to='/' />}></Route>
      </Routes>
    </>
  );
}

export default App;
