import "/src/components/Navbar/navbar.scss"
export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <img src="/src/assets/sportsee-logo.svg" alt="Logo SportSee" />
        </li>
        <li className="navbar-list-item">Accueil</li>
        <li className="navbar-list-item">Profil</li>
        <li className="navbar-list-item">Paramètres</li>
        <li className="navbar-list-item">Communauté</li>
      </ul>
    </nav>
  )
}

export default Navbar
