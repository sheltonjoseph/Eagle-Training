import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/userSlice";

const EditUser = ({
  anchorEl,
  setAnchorEl,
  // name,
  // email,
  phone,
  website,
  // setName,
  // setEmail,
  setPhone,
  setWebsite,
  setReduxEmail,
  setReduxName,
  reduxName,
  reduxEmail,
}) => {
  
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({reduxName,reduxEmail}));
    setAnchorEl(null);
  };

  return (
    <Popover
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={handleUpdate}
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
            defaultValue={user.reduxName}
            variant="standard"
            onChange={(e) => setReduxName(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Email"
            defaultValue={user.reduxEmail}
            variant="standard"
            onChange={(e) => setReduxEmail(e.target.value)}
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
          <Button variant="contained" onClick={handleUpdate}>
            Done
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

export default EditUser;
