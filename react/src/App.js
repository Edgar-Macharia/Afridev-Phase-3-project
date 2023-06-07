import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'
import About from './pages/About';
import Search from './pages/Search';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path= '/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path= 'jobs' element={<Jobs />} />
          <Route path= 'about' element={<About />} />
          <Route path= 'search' element={<Search />} />
          <Route path= 'signup' element={<SignUp />} />
          <Route path= 'login' element={<Login />} />
          <Route path= 'contact' element={<Contact />} />
          <Route path= 'profile' element={<Profile />} />
        </Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
