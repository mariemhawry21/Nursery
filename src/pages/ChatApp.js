import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@mui/material';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Sara's Mother",
      text: 'Please can I see Sara’s Art?',
      time: '9:25',
    },
    {
      sender: 'Staff A',
      text: '',
      time: '9:25',
    },
    {
      sender: "Sara's Mother",
      text: 'Wow, She’s drawing Skill’s are Really coming a Long Thank you for every thing',
      time: '9:25',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          sender: 'Staff A',
          text: newMessage,
          time: '9:25',
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Sara's Teams</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ padding: '16px' }}>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            2 Parents, 3 Staff, 1 Nursery Manager
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Today
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                <ListItem
                  alignItems="flex-start"
                  style={{
                    backgroundColor:
                      message.sender === 'Staff A'
                        ? '#f5f5f5'
                        : '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={message.sender}
                      src={
                        message.sender === "Sara's Mother"
                          ? '/path/to/sara-mother-avatar.jpg'
                          : '/path/to/staff-a-avatar.jpg'
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: message.sender === 'Staff A' ? 'bold' : 'normal',
                        }}
                      >
                        {message.sender}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1">{message.text}</Typography>
                    }
                  />
                  <Typography variant="caption" style={{ marginLeft: 'auto' }}>
                    {message.time}
                  </Typography>
                </ListItem>
                {index < messages.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Write your message"
            value={newMessage}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} align="right">
          <Button variant="contained" onClick={handleSubmit}>
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatApp;
