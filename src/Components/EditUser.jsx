import React from "react";
import Modal from 'react-modal'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';

const EditUser = () => {

  return (
    <Modal isOpen={true} style={{width:"250px"}}>
     <List>
        <ListItem>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </ListItem>
        <ListItem>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </ListItem>
        <ListItem>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </ListItem>
        <ListItem>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </ListItem>
     </List>
    </Modal>
  );
};

export default EditUser;
