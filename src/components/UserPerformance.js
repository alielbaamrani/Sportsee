import React, { useState, useEffect } from "react";
import { Container } from "../styles/userPerformanceStyle";
import { API } from "../utils/getData";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// const { getUserPerformance } = API

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */

export default function UserPerformance() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    API.getUserPerformance(id)
      .then(response => setData(response.kind))
      .catch(() => setError(true))
  }, [id]);

  if (error) return <section>Oups il y a eu un problème</section>

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}
