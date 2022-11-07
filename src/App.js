import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
