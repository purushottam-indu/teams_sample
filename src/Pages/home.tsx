
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { Box } from '@mui/material';
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/chat');
  };

  return (
    <Box sx={{
        marginLeft:"25px"
    }}>
        <h1>Home Page</h1>
        <Box onClick={handleButtonClick} sx={{
            color:'lightgray',
            marginTop:"200px"
        }}>
            <ServiceCard />
        </Box>
        
        {/* <button >Go to Chat</button> */}
    </Box>
  );
};

export default Home;