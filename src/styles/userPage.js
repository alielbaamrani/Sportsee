import styled from "styled-components";

const UserPage = styled.div`
  max-width: 1240px;
  margin: 2em 0px 0em 10em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Center = styled.div`
  margin: auto;
  width: 50%;
  height: 60vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const KeyDatas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-left: 20px;
`;

const LoadingSpinner = styled.div`
  margin: auto;
  width: 50%;
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: red;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: s7 1s infinite steps(8);

  @keyframes s7 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export { UserPage, KeyDatas, Container, ContainerRow, Center, LoadingSpinner };
