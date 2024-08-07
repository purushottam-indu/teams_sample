import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home'; // This will now be your TeamsSample component
import Chat from './Pages/Chat';
import NotFound from './Pages/NotFound'; // Create a NotFound component for unmatched routes
import './App.css';
// import * as microsoftTeams from '@microsoft/teams-js';
// import { initialize } from '@microsoft/teams-js';
import { app } from '@microsoft/teams-js';


const App: React.FC = () => {
  useEffect(() => {
    app.initialize();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/teams_sample" />} />
        <Route path="/teams_sample" element={<Home />} />
        <Route path="/teams_sample/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './Pages/home';
// import './App.css'
// import Chat from './Pages/Chat';
// // import { Box } from '@mui/material';

// function App() {


//   return (
//     <>
   
//       <Router basename="/teams_sample">
//         <Routes>
//           <Route path="/" element={<Navigate to="/teams_sample" />} />
//           <Route path="/teams_sample" element={<Home />} />
//           <Route path="/teams_sample/chat" element={<Chat />} />
//         </Routes>
//       </Router>
   

//       {/* <Chat /> */}
//     </>
//   )
// }

// export default App
