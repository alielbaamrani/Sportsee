import React from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import BarCharts from "../../components/BarChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../../utils/getData";
import {  BottomChart } from "../../styles/userStyle";
// import caloriesIcon from "../../assets/calories-icon.svg";
// import proteinsIcon from "../../assets/proteines-icon.svg";
// import glucidesIcon from "../../assets/glucides-icon.svg";
// import lipidesIcon from "../../assets/lipides-icon.svg";
import ScoreChart from "../../components/ScoreChart";
import UserAverageSessions from "../../components/UserAverageSession";
import UserPerformance from "../../components/UserPerformance";

import "./User.scss";

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
    <div className="userPage">
      <UserInfo name={data.userInfos.firstName} />
      <BarCharts />
      <BottomChart>
        <UserAverageSessions />
        <UserPerformance />
        <ScoreChart data={data} />
      </BottomChart>
    </div>
  );
}
