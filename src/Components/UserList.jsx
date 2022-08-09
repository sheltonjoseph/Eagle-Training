import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleCard from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [userImg, setUserImg] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  const removeUser = (id) => {
    setUsers(users.filter(item=>item.id !== id))
 }

  return (
    <Container>
      {users.map((item) => (
        <SingleCard  item={item} key={item.id} removeUser={removeUser} />
      ))}
    </Container>
  );
};

export default Users;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f9e6ff;
`;
