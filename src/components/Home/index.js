import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: []}
  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
      alt:eachTeam.name
    }))
    this.setState({teamList: updatedData})
  }
  render() {
    const {teamList} = this.state
    return (
      <div className="home-container">
        <div className="container-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-custom"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamList.map(eachTeam => (
            <TeamCard team={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
