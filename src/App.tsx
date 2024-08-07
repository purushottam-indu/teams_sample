
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import './App.css'
import Chat from './Pages/Chat';
// import { Box } from '@mui/material';

function App() {


  return (
    <>
   
      <Router basename="/teams_sample">
        <Routes>
          <Route path="/" element={<Navigate to="/teams_sample" />} />
          <Route path="/teams_sample" element={<Home />} />
          <Route path="/teams_sample/chat" element={<Chat />} />
        </Routes>
      </Router>
   

      {/* <Chat /> */}
    </>
  )
}

export default App
