
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './component/header';
import Home from './component/home';
import Userlist from './component/userlist';
import Adduser from './component/adduser';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/userlist" element={<Userlist/>} />
      <Route  path="/adduser" element={<Adduser/>} />

    </Routes>   
    
    <Footer/>
    </div>
  );
}

export default App;
