import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'

const SingleCard = ({ item , key, ...prop}) => {

  console.log(prop)
  const [userImg, setUserImg] = useState("");

  const getUserImg = async () => {
    try {
      await axios.get(
        "https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy"
      );
      setUserImg(
        `https://avatars.dicebear.com/v2/avataaars/%7B%7B${item.name}%7D%7D.svg?options[mood][]=happy`
      );
    } catch (err) {
      console.log(err);
    }
  };

  getUserImg();

  const removeUser = () => {
    prop.removeUser(item.id);
  }
 

  return (
    <Card sx={{ width: 340, m: 2 }}>
      <CardMedia component="img" image={userImg} />
      <List>
      <ListItem >
      <Typography variant="h5" enablePadding>{item.name}</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary={item.email} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneIcon  />
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
          <CreditScoreIcon />
        </IconButton>
        <IconButton aria-label="delete" align="right">
          <DeleteIcon  onClick={removeUser}/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
