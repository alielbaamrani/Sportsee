import React from "react";
import UserInfo from "../components/UserInfo";
import BarCharts from "../components/BarChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../utils/getData";
import { BottomChart } from "../styles/userStyle";
import {
  UserPage,
  KeyDatas,
  Container,
  ContainerRow,
  LoadingSpinner,
  Center,
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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    API.getUserInfos(id)
      .then(response => setData(response.data))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (error)
    return (
      <Center>
        <section>Oups il y a eu un problème lors de la recuperation de données </section>
      </Center>
    );

  return (
    <div>
      {isLoading ? (
        <Center>
          <LoadingSpinner />
        </Center>
      ) : data ? (
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
      ) : (
        <Center>
          <div>Les données n'ont pas été récupérées.</div>
        </Center>
      )}
    </div>
  );
}
