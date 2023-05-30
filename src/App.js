import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'
import About from './pages/About';
import Search from './pages/Search';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path= 'about' element={<About />} />
          <Route path= 'search' element={<Search />} />
          <Route path= 'signup' element={<SignUp />} />
          <Route path= 'login' element={<Login />} />
          <Route path= 'contact' element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
