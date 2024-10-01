import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
import Sessionschart from "./components/Sessionschart/Sessionschart"
import Objectif from "./components/Objectif/IndexObjectif"
import "./App.scss"
import RadarChartDiagram from "./components/PerformanceChart/IndexPerformance"

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
              Bonjour <span className="name">{name}</span>
            </h1>
            <p className="subtitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="all-diagram-container">
            <div className="progress-container">
              <div className="progress">
                {/* <h3>Activité quotidienne</h3> */}
                <BarchartDiagram />
              </div>
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
        </section>
      </main>
    </div>
  )
}
export default App
