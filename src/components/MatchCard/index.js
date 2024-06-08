// Write your code here
import './index.css'
const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const stylingColor = matchStatus === 'Won' ? 'win' : 'lost'
  return (
    <li className="recent-matches-container">
      <div>
        <img
          src={competingTeamLogo}
          className="team-logo-custom"
          alt={`competing team${competingTeam}`}
        />
      </div>
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={stylingColor}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
