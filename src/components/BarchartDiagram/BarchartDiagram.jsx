// import { BarChart } from "recharts"
import "./BarchartDiagram.scss"
import {
  BarChart,
  Bar,
  // Rectangle,
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
    <div className="BarchartDiagram-container">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            // activeBar={<Rectangle fill="red" stroke="red" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
