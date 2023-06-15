import React from "react";
import { Container, UserName, Text } from "../styles/userInfo";

function UserInfo({ name }) {
  return (
    <Container>
      <Text>
        Bonjour <UserName> {name} </UserName>
      </Text>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </Container>
  );
}

export default UserInfo;
