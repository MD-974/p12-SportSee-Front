import { PieChart, Pie, ResponsiveContainer } from "recharts"

const Objectif = () => {
  // Définir le pourcentage
  const pourcentage = 50 // Vous pouvez modifier cette valeur pour tester différents pourcentages
  const data = [
    { value: pourcentage, fill: "#E60000" }, // Rouge pour la progression
    { value: 100 - pourcentage, fill: "#fbfbfb", stroke: "#fbfbfb" }, // Blanc pour la partie restante
  ]

  return (
    <div
      className="objectif"
      style={{
        width: "200px",
        height: "100%",
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {/* Graphique circulaire */}
        <PieChart>
          <text
            x={30}
            y={50}
            textAnchor="left"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              fill: "#20253A",
            }}
          >
            Score
          </text>
          <Pie
            data={data}
            dataKey="value" // Clé des données
            cx="50%" // Position x du centre du graphique
            cy="50%" // Position y du centre du graphique
            startAngle={-270} // Angle de départ (semi-circulaire)
            endAngle={90} // Angle de fin (semi-circulaire)
            innerRadius="60%" // Rayon interne (cercle creux)
            outerRadius="70%" // Rayon externe
            cornerRadius={20} // Arrondir les coins pour les sections
          ></Pie>
        </PieChart>

        {/* Texte centré pour l'affichage du pourcentage */}
        <div
          style={{
            position: "relative",
            marginTop: "-120px",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "24px" }}>{pourcentage}%</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#888" }}>
            de votre objectif
          </p>
        </div>
      </ResponsiveContainer>
    </div>
  )
}

export default Objectif
