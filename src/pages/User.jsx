import React from "react";
import UserInfo from "../components/UserInfo";
import BarCharts from "../components/BarChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { BottomChart } from "../styles/userStyle";
import {
  UserPage,
  KeyDatas,
  Container,
  ContainerRow,
} from "../styles/userPage";
import ScoreChart from "../components/ScoreChart";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import KeyData from "../components/KeyData";
import Calories from "../assets/calories-icon.svg";
import Glucides from "../assets/glucides-icon.svg";
import Lipides from "../assets//lipides-icon.svg";
import Proteines from "../assets/proteines-icon.svg";

export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <UserPage>
      <UserInfo name={data.userInfos.firstName} />
      <ContainerRow>
        <Container>
          <BarCharts />
          <BottomChart>
            <UserAverageSessions />
            <UserPerformance />
            <ScoreChart data={data} />
          </BottomChart>
        </Container>
        <Container>
          <KeyDatas>
            <KeyData
              icon={Calories}
              quantity={`${data.keyData.calorieCount}kCal`}
              name="Calories"
            />
            <KeyData
              icon={Proteines}
              quantity={`${data.keyData.proteinCount}g`}
              name="Proteines"
            />
            <KeyData
              icon={Glucides}
              quantity={`${data.keyData.carbohydrateCount}g`}
              name="Glucides"
            />
            <KeyData
              icon={Lipides}
              quantity={`${data.keyData.lipidCount}g`}
              name="Lipides"
            />
          </KeyDatas>
        </Container>
      </ContainerRow>
    </UserPage>
  );
}
