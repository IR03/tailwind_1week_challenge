import logo from './logo.svg';
import './App.css';
import Taillwind from './Pages/Tailwind';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          


          <Route path="tailwind" element={<Outlet />}>
            <Route index element={<Taillwind />} />
          </Route>
          
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
