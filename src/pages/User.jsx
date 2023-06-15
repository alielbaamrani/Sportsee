import React from "react";
import UserInfo from "../components/UserInfo";
import BarCharts from "../components/BarChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { BottomChart } from "../styles/userStyle";
import { UserPage } from "../styles/userPage";
import ScoreChart from "../components/ScoreChart";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";

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
      <BarCharts />
      <BottomChart>
        <UserAverageSessions />
        <UserPerformance />
        <ScoreChart data={data} />
      </BottomChart>
    </UserPage>
  );
}
