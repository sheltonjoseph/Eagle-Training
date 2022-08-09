import React from "react";
import styled from "styled-components";

const Namebar = () => {
  return (
    <Wrapper>
      <Left>
        <Name>Eagle Enterprise Manager</Name>
      </Left>
      <Right>
        <Name>EAGLE</Name>
      </Right>
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
