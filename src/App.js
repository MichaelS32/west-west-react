import { Routes, Route } from 'react-router-dom';
import "@fontsource/libre-baskerville"
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
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
