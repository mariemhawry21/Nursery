import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Avatar, Typography, Toolbar, TextField } from '@mui/material';

const drawerWidth = 300;

const MessagesDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginLeft:"250px"
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ padding: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          sx={{ marginTop: -9 }}
        />
      </Box>
      <Box sx={{ overflow: 'auto' , marginTop:"-70px"}}>
        <List>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Sara's Team" secondary="2 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Salma's Team" secondary="1 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Habbib's Team" secondary="1 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Nursery Team" secondary="13 Staff, 17 Nursery" />
          </ListItem>
        </List>
        <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
          Other Teams
        </Typography>
        <List>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Menna's Team" secondary="1 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Asia's Team" secondary="1 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
          <ListItem button>
            <Avatar sx={{ mr: 2 }} src="https://thumbs.dreamstime.com/z/mother-her-daughter-nursery-46625071.jpg" />
            <ListItemText primary="Farida's Team" secondary="1 Parents, 3 Staff, 1 Nursery M" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MessagesDrawer;
