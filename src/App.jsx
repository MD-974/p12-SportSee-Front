import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
import "./App.scss"

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
          <div className="progress-container">
            <div className="progress">
              <div className="progress-graph">
                <p>activités</p>
                <p>poids(kg)</p>
                <p className="kcal">calories(kCal)</p>
              </div>
              <BarchartDiagram />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default App
