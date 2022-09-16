import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditUser from "./EditUser";
import DeleteDialog from "./DeleteDialog"
// import { useSelector} from "react-redux";

const SingleCard = ({ item, key, ...prop }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
  const refreshUser = () => {
    prop.setIsGetUser(true);
  };

  const removeUser = () => {
    prop.deleteUser(item.user_id);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>
      <Card sx={{ width: 340, m: 2 }}>
        <CardMedia component="img" image={item.img} />
        <List>
          <ListItem>
            <Typography variant="h5" enablePadding>
              {item.username}
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary= {item.email} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={item.phone} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={item.website} />
            </ListItemButton>
          </ListItem>
        </List>

        <CardActions m="20px">
          <IconButton aria-label="FavoriteBorderIcon" color="secondary">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="CreditScoreIcon" color="primary">
            <CreditScoreIcon onClick={handleClick} aria-describedby={item.id} />
          </IconButton>
          <IconButton aria-label="delete" align="right">
            <DeleteIcon onClick={handleClickOpen} />
          </IconButton>
        </CardActions>
      </Card>
      <EditUser
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        item={item}
        refreshUser={refreshUser}
        // onDone={onDone}
        // reduxName={reduxName}
        // reduxEmail={reduxEmail}
        // setReduxName={setReduxName}
        // setReduxEmail={setReduxEmail}
      />
      <DeleteDialog open={open} setOpen={setOpen}  item={item} removeUser={removeUser} />
    </>
  );
};

export default SingleCard;
