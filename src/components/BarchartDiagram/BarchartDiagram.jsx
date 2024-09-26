// // import { BarChart } from "recharts"
// import "./BarchartDiagram.scss"
// import {
//   BarChart,
//   Bar,
//   // Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts"
// const data = [
//   {
//     day: "1",
//     kilogram: 80,
//     calories: 240,
//   },
//   {
//     day: "2",
//     kilogram: 80,
//     calories: 220,
//   },
//   {
//     day: "3",
//     kilogram: 81,
//     calories: 280,
//   },
//   {
//     day: "4",
//     kilogram: 81,
//     calories: 290,
//   },
//   {
//     day: "5",
//     kilogram: 80,
//     calories: 160,
//   },
//   {
//     day: "6",
//     kilogram: 78,
//     calories: 162,
//   },
//   {
//     day: "7",
//     kilogram: 76,
//     calories: 390,
//   },
// ]
// export default function BarchartDiagram() {
//   return (
//     <div
//       className="BarchartDiagram-container"
//       style={{
//         background: "#fbfbfb",
//         color: "#FFFFFF",
//         padding: "10px 10px",
//         textAlign: "center",
//         fontSize: "10px",
//         fontWeight: "500",
//       }}
//     >
//       <div className="progress-graph">
//                 <p>activités</p>
//                 <p>poids(kg)</p>
//                 <p className="kcal">calories(kCal)</p>
//               </div>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid
//             strokeDasharray="3 3"
//             vertical={false}
//             horizontal={true}
//             stroke="#D9D9D9"
//           />
//           <XAxis dataKey="day" tickLine={false} />
//           <YAxis
//             type="number"
//             orientation="right"
//             tickCount={3}
//             tickLine={false}
//             axisLine={false}
//           />
//           <Tooltip />
//           <Legend />
//           <Bar
//             dataKey="kilogram"
//             fill="#282D30"
//             radius={[3, 3, 0, 0]}
//             barSize={7}
//             // activeBar={<Rectangle fill="pink" stroke="blue" />}
//           />
//           <Bar
//             dataKey="calories"
//             fill="#E60000"
//             radius={[3, 3, 0, 0]}
//             barSize={7}
//             // activeBar={<Rectangle fill="red" stroke="red" />}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
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
  {
    day: "1",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "3",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "4",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "5",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "6",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "7",
    kilogram: 76,
    calories: 390,
  },
]

export default function BarchartDiagram() {
  return (
    <div
      className="BarchartDiagram-container"
      style={{
        background: "#fbfbfb",
        color: "#FFFFFF",
        padding: "10px",
        textAlign: "center",
        fontSize: "10px",
        fontWeight: "500",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
            stroke="#D9D9D9"
          />

          <XAxis dataKey="day" tickLine={false} />

          <YAxis
            type="number"
            orientation="right"
            domain={["dataMin - 2", "dataMax + 2"]}
            yAxisId="kilogram"
            tickCount={3}
            tickLine={false}
            axisLine={false}
            tickMargin={30}
          />

          <YAxis hide yAxisId="calories" />

          <Tooltip />

          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="top"
            layout="horizontal"
            align="right"
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
