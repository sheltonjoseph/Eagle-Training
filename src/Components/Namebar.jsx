import React, { useState , useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import EditUser from "./EditUser";

const Namebar = ({setIsGetUser}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const refreshUser = () => {
    setIsGetUser(true);
  };


  return (
    <Wrapper>
      <Left>
        <Name>Eagle Enterprise Manager</Name>
      </Left>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#ab47bc",
            color: "#fff",
          },
          color: "#ab47bc",
        }}
        endIcon={<PersonIcon />}
        onClick={handleClick}
      >
        ADD NEW USER
      </Button>
      <Right>
        <Name>EAGLE</Name>
      </Right>
      <EditUser
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        isFromNamebar
        refreshUser={refreshUser}
      />
    </Wrapper>
  );
};

export default Namebar;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ab47bc;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  text-align: center;
`;
