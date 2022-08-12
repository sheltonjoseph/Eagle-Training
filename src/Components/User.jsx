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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditUser from "./EditUser";

const SingleCard = ({ item, key, ...prop }) => {
  const [userImg, setUserImg] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);
  const [website, setWebsite] = useState(item.website);
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
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>
      <Card sx={{ width: 340, m: 2 }}>
        <CardMedia component="img" image={userImg} />
        <List>
          <ListItem>
            <Typography variant="h5" enablePadding>
              {name}
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={phone} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={website} />
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
            <DeleteIcon onClick={removeUser} />
          </IconButton>
        </CardActions>
      </Card>
      <EditUser
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        name={name}
        email={email}
        phone={phone}
        website={website}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setWebsite={setWebsite}
      />
    </>
  );
};

export default SingleCard;
