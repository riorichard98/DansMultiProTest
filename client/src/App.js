//module yang diimport
import './App.css';
import { Route, Routes } from 'react-router-dom';

//page yang diimport
import LoginPage from './views/LoginPage';

//component yang diimport
import NavBar from './components/NavBar.js'


//helper yang diimport
import IdentifyRoute from './helper/identifyRoute'
import PreventLogin from './helper/preventLogin';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      {/* <Route path="/" element={<RequireAuth> <Job /> </RequireAuth>}></Route> */}
        <Route path="/" element={<IdentifyRoute />}></Route>
        <Route path="/login" element={<PreventLogin> <LoginPage /> </PreventLogin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
