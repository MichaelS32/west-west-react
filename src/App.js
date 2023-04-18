import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='about' element={<About />} /> */}
          

        </Route>

      </Routes>
    </>
  );
}

export default App;
