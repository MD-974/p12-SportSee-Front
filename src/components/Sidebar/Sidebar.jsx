import "./Sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <img
              className="sidebar-logo"
              src="src/assets/Sidebar/yoga.svg"
              alt="Yoga"
            />
          </li>
          <li>
            <img
              className="sidebar-logo"
              src="/src/assets/Sidebar/swim.svg"
              alt="Natation"
            />
          </li>
          <li>
            <img
              className="sidebar-logo"
              src="/src/assets/Sidebar/bike.svg"
              alt="Cyclisme"
            />
          </li>
          <li>
            <img
              className="sidebar-logo"
              src="/src/assets/Sidebar/weight.svg"
              alt="Musculation"
            />
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
