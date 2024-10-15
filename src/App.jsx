// import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
// import Navbar from "/src/components/Navbar/Navbar.jsx"
// import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
// import Sessionschart from "./components/Sessionschart/Sessionschart"
// import Objectif from "./components/Objectif/Objectif"
// import "./App.scss"
// import RadarChartDiagram from "./components/Radarchart/Radar"

// function App() {
//   const name = "Karl"
//   return (
//     <div>
//       <Navbar />
//       <main className="main-container">
//         <Sidebar />
//         <section>
//           <div className="title-container">
//             <h1 className="title">
//               Bonjour <span className="name-user">{name}</span>
//             </h1>
//             <p className="subtitle">
//               Félicitation ! Vous avez explosé vos objectifs hier 👏
//             </p>
//           </div>
//           {/* <div className="all-container"> */}
//           <div className="diagrams-container">
//             <div className="progress-container">
//               <div className="progress">
//                 <BarchartDiagram />
//               </div>
//               <div className="graph-container">
//                 <div className="sessions-container">
//                   <Sessionschart />
//                 </div>
//                 <div className="radar-container">
//                   <RadarChartDiagram />
//                 </div>
//                 <div className="objectif-container">
//                   <Objectif />
//                 </div>
//               </div>
//             </div>
//             {/* <div className="info-container"> */}
//             <div className="info-calories">
//               <div className="picture">
//                 <img src="./src/assets/Dashboard/fire-icon.svg" alt="" />
//                 <div className="info">
//                   <p className="info-value">2000 kCal</p>
//                   <p className="info-text">Calories</p>
//                 </div>
//               </div>

//               <div className="picture">
//                 <img src="./src/assets/Dashboard/chicken-icon.svg" alt="" />
//                 <div className="info">
//                   <p className="info-value">155 g</p>
//                   <p className="info-text">Protéines</p>
//                 </div>
//               </div>

//               <div className="picture">
//                 <img src="./src/assets/Dashboard/apple-icon.svg" alt="" />
//                 <div className="info">
//                   <p className="info-value">290 g</p>
//                   <p className="info-text">Glucides</p>
//                 </div>
//               </div>

//               <div className="picture">
//                 <img src="./src/assets/Dashboard/burger-icon.svg" alt="" />
//                 <div className="info">
//                   <p className="info-value">50 g</p>
//                   <p className="info-text">Lipides</p>
//                 </div>
//               </div>
//             </div>
//             {/* </div> */}
//           </div>
//           {/* </div> */}
//         </section>
//       </main>
//     </div>
//   )
// }
// export default App

import Sidebar from "/src/components/Sidebar/Sidebar.jsx"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import BarchartDiagram from "./components/BarchartDiagram/BarchartDiagram"
import Sessionschart from "./components/Sessionschart/Sessionschart"
import Objectif from "./components/Objectif/Objectif"
import "./App.scss"
import RadarChartDiagram from "./components/Radarchart/Radar"

function App() {
  const name = "Karl"

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
              Bonjour <span className="name-user">{name}</span>
            </h1>
            <p className="subtitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>

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
