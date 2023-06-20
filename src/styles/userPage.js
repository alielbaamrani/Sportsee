import styled from "styled-components";

const UserPage = styled.div`
  max-width: 1240px;
  margin: 2em 0px 0em 10em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const KeyDatas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-left: 20px;
`;

export { UserPage, KeyDatas, Container, ContainerRow };
