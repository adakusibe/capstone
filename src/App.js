import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
