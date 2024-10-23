import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import "./Radar.scss"

// Les données pour chaque dimension (intensité, vitesse, force, etc.)
const data = [
  { subject: "Intensité", value: 80, fullMark: 100 },
  { subject: "Vitesse", value: 90, fullMark: 100 },
  { subject: "Force", value: 75, fullMark: 100 },
  { subject: "Endurance", value: 65, fullMark: 100 },
  { subject: "Energie", value: 70, fullMark: 100 },
  { subject: "Cardio", value: 85, fullMark: 100 },
]

export default function RadarChartDiagram() {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          outerRadius="90%"
          margin={{ top: 300, right: 30, bottom: 30, left: 30 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#FFFFFF", fontSize: 10, fontWeight: 500 }}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
