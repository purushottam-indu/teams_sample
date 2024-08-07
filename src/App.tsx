
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import './App.css'
import Chat from './Pages/Chat';
import { Box } from '@mui/material';

function App() {


  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
   

      {/* <Chat /> */}
    </>
  )
}

export default App
