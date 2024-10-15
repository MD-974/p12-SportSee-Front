import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
import Sessionschart from "./components/Sessionschart/Sessionschart"
import Objectif from "./components/Objectif/Objectif"
import "./App.scss"
import RadarChartDiagram from "./components/Radarchart/Radar"

function App() {
  const name = "Karl"
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <section>
          <div className="title-container">
            <h1 className="title">
              Bonjour <span className="name-user">{name}</span>
            </h1>
            <p className="subtitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          {/* <div className="all-container"> */}
          <div className="diagrams-container">
            <div className="progress-container">
              <div className="progress">
                <BarchartDiagram />
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
            {/* <div className="info-container"> */}
            <div className="info-calories">
              <div className="picture">
                <img src="./src/assets/Dashboard/fire.svg" alt="" />
                <div className="info">
                  <p className="info-value">2000 kCal</p>
                  <p className="info-text">Calories</p>
                </div>
              </div>

              <div className="picture">
                <img src="./src/assets/Dashboard/chicken.svg" alt="" />
                <div className="info">
                  <p className="info-value">155 g</p>
                  <p className="info-text">Protéines</p>
                </div>
              </div>

              <div className="picture">
                <img src="./src/assets/Dashboard/apple.svg" alt="" />
                <div className="info">
                  <p className="info-value">290 g</p>
                  <p className="info-text">Glucides</p>
                </div>
              </div>

              <div className="picture">
                <img src="./src/assets/Dashboard/burger.svg" alt="" />
                <div className="info">
                  <p className="info-value">50 g</p>
                  <p className="info-text">Lipides</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
        </section>
      </main>
    </div>
  )
}
export default App
