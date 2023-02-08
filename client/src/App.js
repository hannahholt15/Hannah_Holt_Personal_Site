import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import About from './components/shared/About';
import ContactMe from './components/shared/ContactMe';
import Thanks from './components/shared/Thanks';
import Footer from './components/shared/Footer';

const App = () => (
  <> 
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactme' element={<ContactMe />} />
      <Route path='/thanks' element={<Thanks />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>

)


export default App;