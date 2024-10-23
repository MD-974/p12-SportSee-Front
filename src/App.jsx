import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
import Sessionschart from "./components/Sessionschart/Sessionschart"
import Objectif from "./components/Objectif/Objectif"
import RadarChartDiagram from "./components/Radarchart/Radar"
import "./App.scss"
import { useState, useEffect } from "react"

const urlParams = new URLSearchParams(document.location.search)
const id = urlParams.get("id") || 12
const mock = urlParams.has("mock") ? urlParams.get("mock") === "true" : true

const useMainDataUrl = mock
  ? "/userMainData.json"
  : "http://localhost:5173/user/${id}"
const useActivityUrl = mock
  ? "/userActivity.json"
  : "http://localhost:5173/user/${id}/activity"

function App() {
  const [user, setUser] = useState({})
  const [barchartData, setBarchartData] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(useMainDataUrl)
      const data = await response.json()
      setUser(data.find((item) => item.id === id))
    }

    const fetchUserActivity = async () => {
      const response = await fetch(useActivityUrl)
      const data = await response.json()
      let sessions = data.find((item) => item.userId == id).sessions
      sessions.forEach(
        (session) => (session.day = parseInt(session.day.split("-")[2]))
      )
      setBarchartData(sessions)
    }

    fetchUser()
    fetchUserActivity()
  }, [])

  // Tableau d'objets pour les informations dynamiques
  const nutritionData = [
    {
      icon: "./src/assets/Dashboard/fire-icon.svg",
      value: "2000 kCal",
      name: "Calories",
    },
    {
      icon: "./src/assets/Dashboard/chicken-icon.svg",
      value: "155 g",
      name: "Protéines",
    },
    {
      icon: "./src/assets/Dashboard/apple-icon.svg",
      value: "290 g",
      name: "Glucides",
    },
    {
      icon: "./src/assets/Dashboard/burger-icon.svg",
      value: "50 g",
      name: "Lipides",
    },
  ]

  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <section>
          <div className="title-container">
            <h1 className="title">
              Bonjour{" "}
              <span className="name-user">
                {user.id && user.userInfos.firstName}
              </span>
            </h1>
            <p className="subtitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>

          <div className="diagrams-container">
            <div className="progress-container">
              <div className="progress">
                <BarchartDiagram data={barchartData} />
              </div>
              <div className="graph-container">
                <div className="sessions-container">
                  <Sessionschart />
                </div>
                <div className="radar-container">
                  <RadarChartDiagram />
                </div>
                <div className="objectif-container">
                  <Objectif />
                </div>
              </div>
            </div>

            {/* Générer dynamiquement les informations nutritionnelles */}
            <div className="info-calories">
              {nutritionData.map((item, index) => (
                <div key={index} className="picture">
                  <img
                    src={item.icon}
                    alt={`Image de l'ingrédient ${item.name}`}
                  />
                  <div className="info">
                    <p className="info-value">{item.value}</p>
                    <p className="info-text">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
