import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteDialog = ({open, setOpen,item, removeUser}) => {

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
    {/* <Button variant="outlined" onClick={handleClickOpen}>
      Open alert dialog
    </Button> */}
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Are You Sure You Want to Delete ${item.username}?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={removeUser}>Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
};

export default DeleteDialog;


