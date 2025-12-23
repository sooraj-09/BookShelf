import { Routes, Route } from 'react-router-dom';
// import Mainpage from './Components/Mainpage';
import Loginpage from './Loginpage';
import Adminlogin from './Components/Adminlogin';
import Userlogin from './Components/Userlogin';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Loginpage/>}/>
            <Route path='/Loginpage/Adminlogin' element={<Adminlogin/>}/>
            <Route path='/Loginpage/Userlogin' element={<Userlogin/>}/>
            <Route path='/Admin/*' element={<Admin/>}/>
            <Route path='/User/*' element={<User/>}/>
        </Routes>
    </div>
  );
  
}

export default App;
