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

// donnees fictives test
// const data = [
//   { day: "1", kilogram: 80, calories: 240 },
//   { day: "2", kilogram: 80, calories: 220 },
//   { day: "3", kilogram: 81, calories: 280 },
//   { day: "4", kilogram: 81, calories: 290 },
//   { day: "5", kilogram: 80, calories: 160 },
//   { day: "6", kilogram: 78, calories: 162 },
//   { day: "7", kilogram: 76, calories: 390 },
// ]

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

const barsData = [
  {
    name: "poids (kg)",
    dataKey: "kilogram",
    yAxisId: "kilogram",
    fill: "#282D30",
  },
  {
    name: "Calories brûlées (kCal)",
    dataKey: "calories",
    yAxisId: "calories",
    fill: "#E60000",
  },
]

export default function BarchartDiagram({ data }) {
  return (
    <div className="BarchartDiagram-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 60, left: 20, bottom: 5 }}
          barCategoryGap="10%"
        >
          <text x={0} y={20} textAnchor="left" className="title-diagram">
            Activité quotidienne
          </text>

          <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE" }}
            tick={{ stroke: "#9B9EAC" }}
            dy={10}
            // pour avoir les bars en debut et fin de l'axe(mais enleve le hoover)
            // scale={"point"}
            padding={{ left: -25, right: -25 }}
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
            tickMargin={60} // espace entre fin graph et nombre sur la droite
          />

          <YAxis hide yAxisId="calories" />

          {/* Utilisation du tooltip personnalisé */}
          <Tooltip content={<CustomTooltip />} />

          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="top"
            layout="horizontal"
            // align="right"
            // decalage sur le haut et la droite des infos legend (poids/calories)
            wrapperStyle={{ top: 5, marginLeft: "176px" }}
            formatter={(value) => (
              <span
                // On modifie la couleur du texte pour legend
                style={{
                  color: ["poids (kg)", "Calories brûlées (kCal)"].includes(
                    value
                  )
                    ? "#74798C"
                    : "#000",
                }}
              >
                {value}
              </span>
            )}
          />

          {barsData.map((bar) => (
            <Bar
              key={bar.dataKey}
              name={bar.name}
              dataKey={bar.dataKey}
              yAxisId={bar.yAxisId}
              unit={bar.dataKey === "kilogram" ? "kg" : "kCal"}
              fill={bar.fill}
              radius={[3, 3, 0, 0]}
              barSize={7}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
