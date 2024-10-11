/* eslint-disable react/prop-types */
import "./BarchartDiagram.scss"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "1", kilogram: 80, calories: 240 },
  { day: "2", kilogram: 80, calories: 220 },
  { day: "3", kilogram: 81, calories: 280 },
  { day: "4", kilogram: 81, calories: 290 },
  { day: "5", kilogram: 80, calories: 160 },
  { day: "6", kilogram: 78, calories: 162 },
  { day: "7", kilogram: 76, calories: 390 },
]

// Composant Tooltip personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // On prend les valeurs du poids et des calories
    const kgValue = payload.find((entry) => entry.dataKey === "kilogram")
    const calValue = payload.find((entry) => entry.dataKey === "calories")

    return (
      <div
        style={{
          background: "#E60000",
          color: "#FFFFFF",
          padding: "10px",
          textAlign: "center",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        <p style={{ margin: "0" }}>{`${kgValue.value} kg`}</p>{" "}
        {/* Affichage du poids */}
        <p
          style={{ margin: "0", marginTop: "10px" }}
        >{`${calValue.value} kCal`}</p>{" "}
        {/* Affichage des calories */}
      </div>
    )
  }
  return null // Retourne null si le tooltip n'est pas actif
}

export default function BarchartDiagram() {
  return (
    <div
      className="BarchartDiagram-container"
      style={{
        background: "#fbfbfb",
        color: "#FFFFFF",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <text
            x={0}
            y={20}
            textAnchor="left"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              fill: "#20253A",
            }}
          >
            Activité quotidienne
          </text>

          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.5}
            vertical={false}
            // stroke="#D9D9D9"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE" }}
            tick={{ stroke: "#9B9EAC" }}
            dy={10}
            // scale={"point"}
            // padding={{ left: 20, right: 20 }}
          />

          <YAxis
            type="number"
            orientation="right"
            domain={["dataMin - 3", "auto"]}
            yAxisId="kilogram"
            tickCount={3}
            tick={{ stroke: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            tickMargin={30}
          />

          <YAxis hide yAxisId="calories" />

          {/* Utilisation du tooltip personnalisé */}
          <Tooltip content={<CustomTooltip />} />

          {/* <Tooltip /> */}

          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="top"
            layout="horizontal"
            align="right"
            // wrapperStyle={{ marginBottom: 20 }}
            formatter={(value) => {
              if (value === "Calories brûlées (kCal)") {
                return <span style={{ color: "#000000" }}>{value}</span>
              }
              return <span>{value}</span>
            }}
          />

          <Bar
            name="poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            unit="kg"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />

          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            unit="kCal"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
// const data = [
//   { day: "1", poids: 72, calories: 2200 },
//   { day: "2", poids: 73, calories: 2300 },
//   { day: "3", poids: 74, calories: 2400 },
//   { day: "4", poids: 75, calories: 2500 },
//   { day: "5", poids: 76, calories: 2600 },
//   { day: "6", poids: 77, calories: 2700 },
//   { day: "7", poids: 78, calories: 2800 },
// ]

// function ActivityChart() {
//   return (
//     <BarChart width={500} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="day" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="poids" fill="#000" />
//       <Bar dataKey="calories" fill="#FF0000" />
//     </BarChart>
//   )
// }

// export default ActivityChart
