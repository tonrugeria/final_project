import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentsComponent from './components/ListStudentsComponent';
import AddStudentComponent from './components/AddStudentComponent';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>
              localhost:3000/students
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/students" element={<ListStudentsComponent/>}></Route>
              <Route path="/add-student" element={<AddStudentComponent/>}></Route>
              <Route path="/edit-student/:id" element={<AddStudentComponent/>}></Route>
            </Routes>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
