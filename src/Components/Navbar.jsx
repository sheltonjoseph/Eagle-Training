import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Stack spacing={2} direction="row">
          <Button variant="text" >Text</Button>
          <Button variant="text">Text</Button>
          <Button variant="text">Text</Button>
        </Stack>
        <Right>
          <Name>EAGLE</Name>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

// styled Components
const Container = styled.div`
  height: 30px;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e1bee7;
`;


const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  text-align: center;
`;
