import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import FileBase64 from "react-file-base64";

// const [userNameErr, setUserNameErr] = useState("");
// const [emailErr, setEmailErr] = useState("");
// const [phoneErr, setPhoneErr] = useState("");
// const [websiteErr, setWebsiteErr] = useState("");
// const [imgErr, setImgErr] = useState("");

const EditUser = ({
  anchorEl,
  setAnchorEl,
  item,
  isFromNamebar,
  refreshUser,
}) => {
  const [username, setUsername] = useState(isFromNamebar ? "" : item.username);
  const [email, setEmail] = useState(isFromNamebar ? "" : item.email);
  const [phone, setPhone] = useState(isFromNamebar ? "" : item.phone);
  const [website, setWebsite] = useState(isFromNamebar ? "" : item.website);
  const [img, setImg] = useState(isFromNamebar ? "" : item.img);

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isWebsiteError, setIsWebsiteError] = useState(false);
  const [isImgError, setIsImgError] = useState(false);

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
        refreshUser();
        setUsername("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setImg("");
        setIsUsernameError(false)
        setIsEmailError(false)
        setIsPhoneError(false)
        setIsWebsiteError(false)
        setIsImgError(false)
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePhno = (phone) => {
    return String(phone).match(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
  };

  const validateImgUrl = (url) => {
    return String(url).match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
  };

  // const validateWebsite = (url) => {
  //   return String(url).match((www.)?[a-zA-Z0-9@:%._\\+~#?&=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&=]*));
  // };


  const formValidation = () => {
    let isValid = true;
    if (username.trim().length <= 0) {
      isValid = false;
    } else {
      setIsUsernameError(true);
    }
    if (!validateEmail(email)) {
      setIsEmailError(true);
      isValid = false;
    } else {
      setIsEmailError(false);
    }
    if (!validatePhno(phone)) {
      isValid = true;
      setIsPhoneError(true)
    } else {
      setIsPhoneError(false);
    }
    if (website.trim().length <= 5) {
      isValid = false;
    } else {
      setIsWebsiteError(false);
    }
    if (!validateImgUrl(img)) {
      isValid = false;
      setIsImgError(true)
    } else {
      setIsImgError(false);
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
        console.log(response);
        setAnchorEl(null);
        refreshUser();
        setIsUsernameError(false)
        setIsEmailError(false)
        setIsPhoneError(false)
        setIsWebsiteError(false)
        // setIsImgError(false)
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
            error={isUsernameError}
            // defaultValue={username}
            helperText={isUsernameError ? "Usename is Required" : ""}
            variant="standard"
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernameError(e.target.value === "" ? true : false);
            }}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Email"
            defaultValue={email}
            error={isEmailError}
            helperText={isEmailError ? "Ivalid email": ""}
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailError(e.target.value === "" ? true : false);
            }}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Phone"
            defaultValue={phone}
            error={isPhoneError}
            helperText={isPhoneError? "Invalid phone number " : ""}
            variant="standard"
            onChange={(e) => {
              setPhone(e.target.value);
              setIsPhoneError(e.target.value === "" ? true : false);
            }}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Website"
            defaultValue={website}
            error={isWebsiteError}
            helperText={isWebsiteError ? "Invalid Website Link" : ""}
            variant="standard"
            onChange={(e) => {
              setWebsite(e.target.value);
              setIsWebsiteError(e.target.value === "" ? true : false);
            }}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Image URL"
            defaultValue={img}
            error={isImgError}
            helperText={isImgError ? "Invalid Img format" : ""}
            variant="standard"
            onChange={(e) => {
              setImg(e.target.value);
              setIsImgError(e.target.value === "" ? true : false);
            }}
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
