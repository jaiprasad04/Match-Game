import './index.css'

const Header = props => {
  const {score, startTime} = props

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="score-time-container">
        <li>
          <p className="score">
            Score: <span className="timer">{score}</span>
          </p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
        </li>
        <li>
          <p className="timer">{startTime} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
