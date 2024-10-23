import "/src/components/Navbar/navbar.scss"
export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <img src="/src/assets/sportsee-logo.svg" alt="Logo SportSee" />
        </li>
        <li className="navbar-list-item">
          <a href="/">Accueil</a>
        </li>
        <li className="navbar-list-item">
          <a href="/">Profil</a>
        </li>
        <li className="navbar-list-item">
          <a href="/">Paramètres</a>
        </li>
        <li className="navbar-list-item">
          <a href="/">Communauté</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
