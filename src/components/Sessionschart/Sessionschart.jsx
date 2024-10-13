/* eslint-disable react/prop-types */
import "./Sessionschart.scss"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  // Rectangle,
} from "recharts"

const data = [
  { day: "l", duration: 30 },
  { day: "m", duration: 45 },
  { day: "m", duration: 50 },
  { day: "j", duration: 40 },
  { day: "v", duration: 68 },
  { day: "s", duration: 60 },
  { day: "d", duration: 80 },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0 && payload[0].value != null) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

export default function SessionDurationChart() {
  return (
    <div
      className="sessions"
      style={{
        width: "258px",
        height: "263px",
        backgroundColor: "#FF0000",
        padding: "20px",
        borderRadius: "5px",
        position: "relative",
        color: "#FFFFFF",
      }}
    >
      <h3 style={{ margin: 0, paddingBottom: "10px", opacity: "50%" }}>
        Durée moyenne des sessions
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF", fillOpacity: "50%" }}
            tickMargin={10}
            tickFormatter={(day) => day.toUpperCase()}
            stroke="#FFFFFF"
          />
          <defs>
            {/* Définir le dégradé de la courbe */}
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <Line
            dataKey="duration"
            type="natural"
            stroke="url(#gradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeOpacity: "50%",
              strokeWidth: 7,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#000000",
              strokeOpacity: "10%",
              strokeWidth: "20px",
              height: "auto",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
