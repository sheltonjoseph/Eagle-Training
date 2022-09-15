import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleCard from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);


  const deleteUser= async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      setUsers(users.filter(users => users.user_id !== id))
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getResponse = await fetch("http://localhost:5000/users");
        const jsonData = await getResponse.json();
        setUsers(jsonData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
  }, [users]);

  return (
    <Container>
      {users.map((item) => (
      <SingleCard item={item} deleteUser={deleteUser}/>
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
