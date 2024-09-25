// import {
//     Line,
//     LineChart,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis,
//   } from "recharts";

//   export default function AverageSessions() {

//     const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];

//     const renderTooltip = ({ active, payload }) => {
//       if (active && payload.length) {
//         return (
//           <div
//             style={{
//               background: "#FFFFFF",
//               color: "#000000",
//               padding: "1em 1em",
//               textAlign: "center",
//               fontSize: "1rem",
//               fontWeight: "500",
//             }}
//           >
//             <p>{payload[0].value} min</p>
//           </div>
//         );
//       }
//     };

//     return (
//       <ResponsiveContainer>
//         <LineChart
//           data={}
//           margin={{ top: 30, right: 10, left: 10, bottom: 20 }}
//         >
//           <defs>
//             <linearGradient id="lineGradient">
//               <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
//               <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
//             </linearGradient>
//           </defs>
//           <text
//             x={10}
//             y={30}
//             textAnchor="left"
//             style={{
//               fontSize: "0.9vw",
//               fontWeight: 500,
//               fill: "#FFFFFF",
//               fillOpacity: "50%",
//             }}
//           >
//             Durée moyenne des sessions
//           </text>
//           <XAxis
//             dataKey="day"
//             axisLine={false}
//             tickLine={false}
//             tick={{ fill: "#FFFFFF", fillOpacity: "50%" }}
//             stroke="#FFFFFF"
//             tickMargin={10}
//             tickFormatter={(day) => dayLetters[day - 1]}
//           />
//           <YAxis
//             dataKey="sessionLength"
//             hide={true}
//             domain={["dataMin -20", "dataMax + 50"]}
//           />
//           <Line
//             dataKey="sessionLength"
//             type="natural"
//             stroke="url(#lineGradient)"
//             strokeWidth={2.5}
//             dot={false}
//             activeDot={{
//               stroke: "#FFFFFF",
//               strokeOpacity: "50%",
//               strokeWidth: 10,
//             }}
//           />
//           <Tooltip
//             content={renderTooltip}
//             cursor={{
//               stroke: "#000000",
//               strokeOpacity: "10%",
//               strokeWidth: "20%",
//               height: "100%",
//             }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

// Données factices
const activityData = [
  { day: 1, weight: 80, calories: 500 },
  { day: 2, weight: 79, calories: 450 },
  { day: 3, weight: 80, calories: 600 },
  { day: 4, weight: 79, calories: 500 },
  { day: 5, weight: 78, calories: 650 },
  { day: 6, weight: 77, calories: 700 },
  { day: 7, weight: 76, calories: 750 },
]
{
  /* Durée moyenne des sessions */
}
;<div>
  <h3>Durée moyenne des sessions</h3>
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={activityData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="calories"
        stroke="#f00"
        name="Durée moyenne (min)"
      />
    </LineChart>
  </ResponsiveContainer>
</div>
