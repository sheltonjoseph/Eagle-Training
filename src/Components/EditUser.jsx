import React from "react";
import Modal from "react-modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const EditUser = ({
  modalIsOpen,
  setModalIsOpen,
  name,
  email,
  phone,
  website,
  setName,
  setEmail,
  setPhone,
  setWebsite,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          position: "fixed",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #ab47bc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "20%",
          height: "45vh",
          left: "50%",
          top: "50%",
          marginLeft: "-150px",
          marginTop: "-150px",
        },
      }}
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
          <Button variant="contained" onClick={() => setModalIsOpen(false)}>
            Done
          </Button>
        </ListItem>
      </List>
    </Modal>
  );
};

export default EditUser;
