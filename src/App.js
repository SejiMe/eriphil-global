import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/css/App.min.css';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Applicants from './pages/Applicants';

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/jobs' element={<Applicants />}/>
            <Route path='/applicants' element={<Applicants />}/>
            <Route path='/clients' element={<Applicants />}/>
            <Route path='/about' element={<Applicants />}/>
            <Route path='/contact' element={<Applicants />}/>
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
