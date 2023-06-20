import styled from "styled-components";

const Header = styled.div`
  display: flex;
  padding: 2em;
  width: 258px;
  height: 124px;
  background: #fbfbfb;
  border-radius: 5px;
`;

const KeyDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const KeyDataQuantity = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #282d30;
  margin-bottom: 2px;
`;

const KeyDataName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #74798c;
`;

export { Header, KeyDataInfo, KeyDataQuantity, KeyDataName };
