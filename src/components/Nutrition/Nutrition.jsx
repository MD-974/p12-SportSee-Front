import PropTypes from "prop-types"

const Nutrition = ({ data }) => {
  const nutritionData = [
    {
      icon: "./assets/Dashboard/fire-icon.svg",
      value: `${data.calorieCount} kCal`,
      name: "Calories",
    },
    {
      icon: "./assets/Dashboard/chicken-icon.svg",
      value: `${data.proteinCount} g`,
      name: "Protéines",
    },
    {
      icon: "./assets/Dashboard/apple-icon.svg",
      value: `${data.carbohydrateCount} g`,
      name: "Glucides",
    },
    {
      icon: "./assets/Dashboard/burger-icon.svg",
      value: `${data.lipidCount} g`,
      name: "Lipides",
    },
  ]

  return (
    <div className="info-calories">
      {nutritionData.map((item, index) => (
        <div key={index} className="picture">
          <img src={item.icon} alt={`Image de l'ingrédient ${item.name}`} />
          <div className="info">
            <p className="info-value">{item.value}</p>
            <p className="info-text">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Nutrition.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default Nutrition
