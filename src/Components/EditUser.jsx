import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import FileBase64 from "react-file-base64";

const EditUser = ({ anchorEl, setAnchorEl, item, isFromNamebar, refreshUser }) => {
  const [username, setUsername] = useState(isFromNamebar ? "" : item.username);
  const [email, setEmail] = useState(isFromNamebar ? "" : item.email);
  const [phone, setPhone] = useState(isFromNamebar ? "" : item.phone);
  const [website, setWebsite] = useState(isFromNamebar ? "" : item.website);
  const [img, setImg] = useState(isFromNamebar ? "" : item.img);

  const [userNameErr, setUserNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [websiteErr, setWebsiteErr] = useState("");
  const[imgErr,setImgErr] = useState('')

  const [isImgError,setImageError] = useState(false)


  const open = Boolean(anchorEl);

  const onDone = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
      try {
        const body = { username, email, phone, website, img };
        console.log(body);
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        setAnchorEl(null);
        setUsername("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setImg("");
        setUserNameErr("");
        setEmailErr("");
        setPhoneErr("");
        setWebsiteErr("");
        setImgErr("")
        console.log(response);
        refreshUser();
      } catch (err) {
        console.error(err.message);
      }
  };

  const formValidation = () => {
    let isValid = true;
    if (username.trim().length <= 0) {
      setUserNameErr("USERNAME is required");
      isValid = false;
    }
    if (email.trim().length <= 0) {
      setEmailErr("email is required");
      isValid = false;
    }
    if (phone.trim().length <= 0) {
      setPhoneErr("Phone Number is required");
      isValid = false;
    }
    if (website.trim().length <= 0) {
      setWebsiteErr("Website link is required");
      isValid = false;
    }
    if (img.trim().length < 15) {
      setImgErr("Img link is required");
      setImageError(true);
      isValid = false;
    }
    return isValid;
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
      try {
        const body = { username, email, phone, website, img };
        const response = await fetch(
          `http://localhost:5000/users/${item.user_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        setUserNameErr("");
        setEmailErr("");
        setPhoneErr("");
        setWebsiteErr("");
        setImgErr("")
        console.log(response);
        setAnchorEl(null);
        refreshUser();
      } catch (err) {
        console.error(err.message);
      }
  };
  const handleClose = (e) => {
    e.preventDefault();
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
      onClose={handleClose}
      BackdropProps={{ invisible: false }}
      PaperProps={{
        style: { width: "25%" },
      }}
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" justifyContent="center">
            {isFromNamebar ? "Add" : "EDIT"}
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Name"
            value={username}
            // defaultValue={username}
            helperText={userNameErr}
            variant="standard"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Email"
            defaultValue={email}
            helperText={emailErr}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Phone"
            defaultValue={phone}
            helperText={phoneErr}
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Website"
            defaultValue={website}
            helperText={websiteErr}
            variant="standard"
            onChange={(e) => setWebsite(e.target.value)}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Image URL"
            defaultValue={img}
            error={isImgError}
            helperText={isImgError ? imgErr : ''}
            variant="standard"
            onChange={(e) => {setImg(e.target.value); setImageError(e.target.value === ''? true : false);} }
            sx={{ width: "100%" }}
          />
        </ListItem>
        {/* <FileBase64
          type="file"
          multiple={false}
          onDone={(base64) => setImg(base64)}
        /> */}
        <ListItem
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          <Button
            variant="contained"
            onClick={isFromNamebar ? onDone : onUpdate}
          >
            Done
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

export default EditUser;
