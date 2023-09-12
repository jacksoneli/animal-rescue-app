import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
