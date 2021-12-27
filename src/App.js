import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Counter from './pages/Counter'
import ReduxEx from './pages/ReduxEx'
import NavBar from './components/NavBar'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
     <Routes>
      <Route path="/Counter" element={<Counter></Counter>}></Route>
      <Route path="/Products" element={<Products></Products>}></Route>
      <Route path="/Redux" element={<ReduxEx></ReduxEx>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
