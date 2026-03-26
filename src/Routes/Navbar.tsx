import '../index.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <nav>
            <ul id="navbarList">
                <li><Link reloadDocument to="/">Normal mode</Link></li>
                <li><Link reloadDocument to="/edition1">Positive/Negative mode</Link></li>
            </ul>
      </nav>
  )
}

export default Navbar