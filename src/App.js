import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import ChartSummary from './components/ChartSummary';
import DataSummary from './components/DataSummary';
import { WebSocketData } from './components/WebSocketData';

function App() {
  return (
    <BrowserRouter>
    <WebSocketData/>
    <Navbar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/chartsummary' element={<ChartSummary/>}></Route>
      <Route path='/datasummary' element={<DataSummary/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
