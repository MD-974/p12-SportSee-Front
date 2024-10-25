import "./Sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#yoga">
              <img
                className="sidebar-logo"
                src="src/assets/Sidebar/yoga.svg"
                alt="Yoga"
              />
            </a>
          </li>
          <li>
            <a href="#swim">
              <img
                className="sidebar-logo"
                src="/src/assets/Sidebar/swim.svg"
                alt="Natation"
              />
            </a>
          </li>
          <li>
            <a href="#bike">
              <img
                className="sidebar-logo"
                src="/src/assets/Sidebar/bike.svg"
                alt="Cyclisme"
              />
            </a>
          </li>
          <li>
            <a href="#weight">
              <img
                className="sidebar-logo"
                src="/src/assets/Sidebar/weight.svg"
                alt="Musculation"
              />
            </a>
          </li>
        </ul>
      </nav>
      <footer>
        <p>Copyright SportSee 2020</p>
      </footer>
    </div>
  )
}

export default Sidebar
