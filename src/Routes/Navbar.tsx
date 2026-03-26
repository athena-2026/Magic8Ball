import '../index.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <nav>
            <ul id="navbarList">
                <li><Link to="/">Normal edition</Link></li>
                <li><Link to="/edition1">Positive/Negative mode</Link></li>
            </ul>
      </nav>
  )
}

export default Navbar