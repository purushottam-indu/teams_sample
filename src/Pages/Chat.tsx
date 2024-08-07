// // import { Box, IconButton } from '@mui/material';
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import HomeIcon from '@mui/icons-material/Home';

// // const Chat: React.FC = () => {
// //   const navigate = useNavigate();

// //   const handleHomeButtonClick = () => {
// //     navigate('/');
// //   };

// //   return (
// //     <Box sx={{
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //     }}>
// //       <IconButton
// //         onClick={handleHomeButtonClick}
// //         sx={{
// //           position: 'absolute',
// //           top: '10px',
// //           left: '10px',
// //           cursor: 'pointer',
// //           border: '1px solid #ccc',
// //           padding: '10px',
// //           borderRadius: '5px',
// //           transition: 'transform 0.2s ease-in-out',
// //           '&:hover': {
// //             transform: 'scale(1.05)',
// //           }
// //         }}
// //       >
// //         <HomeIcon />
// //       </IconButton>
// //       <Box sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         width: '100%',
// //         textAlign: 'center'
// //       }}>
// //         <h1>Chat Page</h1>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Chat;


// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   Typography,
// } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';

// const Chat: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const navigate = useNavigate();


//   const handleHomeButtonClick = () => {
//     navigate('/');
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedFile(null);
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedFile) {
//       console.log('File uploaded:', selectedFile);
//       // Add your file handling logic here
//     }
//     handleClose();
//   };

//   return (
//     <Box sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       position: 'relative',
//     }}>
//       <IconButton
//         onClick={handleHomeButtonClick}
//         sx={{
//           position: 'absolute',
//           top: '10px',
//           left: '10px',
//           cursor: 'pointer',
//           border: '1px solid #ccc',
//           padding: '10px',
//           borderRadius: '5px',
//           transition: 'transform 0.2s ease-in-out',
//           '&:hover': {
//             transform: 'scale(1.05)',
//           }
//         }}
//       >
//         <HomeIcon />
//       </IconButton>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         textAlign: 'center',
//         position: 'relative',
//       }}>
//         <h1>Chat Page</h1>
//       </Box>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         marginTop: '20px',
//         position: 'relative',
//       }}>
//         <Button
//           variant="contained"
//           onClick={handleClickOpen}
//           startIcon={<UploadFileIcon />}
//           sx={{
//             backgroundColor: '#3f51b5',
//             color: '#fff',
//             '&:hover': {
//               backgroundColor: '#303f9f',
//             },
//           }}
//         >
//           Upload File
//         </Button>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>
//             Upload Document
//             <IconButton
//               aria-label="close"
//               onClick={handleClose}
//               sx={{
//                 position: 'absolute',
//                 right: 8,
//                 top: 8,
//                 color: (theme) => theme.palette.grey[500],
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>
//           <DialogContent dividers>
//             <Box
//               sx={{
//                 border: '1px dashed #ccc',
//                 padding: '20px',
//                 textAlign: 'center',
//                 cursor: 'pointer',
//                 borderRadius: '4px',
//                 '&:hover': {
//                   borderColor: '#3f51b5',
//                 },
//               }}
//             >
//               <input
//                 type="file"
//                 accept=".pdf,.txt,.docx,.pptx,.csv,.xlsx"
//                 style={{ display: 'none' }}
//                 id="file-input"
//                 onChange={handleFileUpload}
//               />
//               <label htmlFor="file-input">
//                 <Typography variant="body2">
//                   Drag and drop a PDF/TXT/DOCX/PPTX/CSV/XLSX file here or Click to browse
//                 </Typography>
//                 <Typography variant="caption">
//                   [Total File Size Limit: 10MB]
//                 </Typography>
//               </label>
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleSubmit} variant="contained" color="primary">
//               Submit
//             </Button>
//             <Button onClick={handleClose} color="secondary">
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Box>
//   );
// };

// export default Chat;


import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

const Chat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [chatInput, setChatInput] = useState('');
  const navigate = useNavigate();

  const examplePrompts = [
    "How can I reset my password?",
    "What is the weather like today?",
    "Tell me a joke.",
  ];

  const handleHomeButtonClick = () => {
    navigate('/teams_sample');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    handleClose();
  };
  
  

  const handleChatInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  const handlePromptClick = (prompt: string) => {
    setChatInput(prompt);
  };

  const handleSendMessage = () => {
    console.log('User message:', chatInput);
    // Logic to handle sending a message
    setChatInput('');
  };

  return (
    <Box className= "chat-container">
      <IconButton
        onClick={handleHomeButtonClick}
        className="chat-home-button"
        > 
        <HomeIcon />
      </IconButton>
      <Box className="chat-header">
        <h1>Chat Page</h1>
      </Box>
      <Box className="chat-content">
        <Box className="chat-prompt-buttons">
          {examplePrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handlePromptClick(prompt)}
              sx={{ margin: '5px' }}
            >
              {prompt}
            </Button>
          ))}
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message here..."
          value={chatInput}
          onChange={handleChatInputChange}
          className="chat-input-box"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          className="chat-submit-button"
        >
          Send Message
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<UploadFileIcon />}
          className="upload-button"
        >
          Upload File
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Upload Document
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box className="dialog-file-upload">
              <input
                type="file"
                accept=".pdf,.txt,.docx,.pptx,.csv,.xlsx"
                style={{ display: 'none' }}
                id="file-input"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-input">
                <Typography variant="body2">
                  Drag and drop a PDF/TXT/DOCX/PPTX/CSV/XLSX file here or Click to browse
                </Typography>
                <Typography variant="caption">
                  [Total File Size Limit: 10MB]
                </Typography>
              </label>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Chat;

