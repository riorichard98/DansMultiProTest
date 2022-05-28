//module yang diimport
import './App.css';
import { Route, Routes } from 'react-router-dom';

//page yang diimport
import LoginPage from './views/LoginPage';
import JobListPage from './views/JobListPage';
import JobDetailPage from './views/JobDetailPage';
//component yang diimport
import NavBar from './components/NavBar.js'

//helper yang diimport
import IdentifyRoute from './helper/identifyRoute'
import PreventLogin from './helper/preventLogin';
import RequireAuth from './helper/ReqAuth';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<IdentifyRoute />}></Route>
        <Route path="/login" element={<PreventLogin> <LoginPage /> </PreventLogin>}></Route>
        <Route path="/jobs" element={<RequireAuth> <JobListPage /> </RequireAuth>}></Route>
        <Route path="/jobs/:id" element={<RequireAuth> <JobDetailPage /> </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
