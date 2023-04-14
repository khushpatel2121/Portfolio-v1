import {Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/home'
import Footer from './components/Footer/footer'
import Projects from './components/myprojects/projects'

function App() {
  return (
    <div className="App">
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
