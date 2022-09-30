// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import AddStudent from './components/AddStudent';



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/ContactUs" element = {<ContactUs/>}/>
      <Route path ='/Students' element = {<Students/>}/>
      <Route path ='/AddStudent' component = {<AddStudent/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
