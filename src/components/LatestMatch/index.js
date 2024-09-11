// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    console.log(latestMatch)
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    console.log(competingTeamLogo)
    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="latest-match-team-name">
                {latestMatch.competing_team}
              </p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-status">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={latestMatch.competing_team_logo}
              alt={`latest match ${latestMatch.competing_team}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">
                {latestMatch.first_innings}
              </p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">
                {latestMatch.second_innings}
              </p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="latest-match-details-value">
                {latestMatch.man_of_the_match}
              </p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
