import '../index.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
        <div>
            <ul id="navbarList">
                <li><a href="">Link1</a></li>
                <li><a href="">Link2</a></li>
                <li><a href="">Link3</a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar