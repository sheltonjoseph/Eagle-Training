import React from "react";
// import Modal from "react-modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";

const EditUser = ({
  anchorEl,
  setAnchorEl,
  name,
  email,
  phone,
  website,
  setName,
  setEmail,
  setPhone,
  setWebsite,
}) => {

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Popover
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      BackdropProps={{ invisible: false }}
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" justifyContent="center">
            EDIT
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Name"
            defaultValue={name}
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Email"
            defaultValue={email}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Phone"
            defaultValue={phone}
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Website"
            defaultValue={website}
            variant="standard"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </ListItem>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          <Button variant="contained" onClick={handleClose}>
            Done
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

export default EditUser;
