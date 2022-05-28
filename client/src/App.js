//module yang diimport
import './App.css';
import { Route, Routes } from 'react-router-dom';

//page yang diimport

//component yang diimport
import NavBar from './components/NavBar.js'


//helper yang diimport
import IdentifyRoute from './helper/identifyRoute'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      {/* <Route index path="/" element={<RequireAuth> <Job /> </RequireAuth>}></Route> */}
        <Route index path="/" element={<IdentifyRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
