// Write your code here


import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    // console.log(matchData)
    return (
      <li className="match-card">
        <img
          className="match-card-logo"
          src={matchData.competing_team_logo}
          alt={`competing team ${matchData.competing_team}`}
        />
        <p className="match-card-name">{matchData.competing_team}</p>
        <p className="match-card-result">{matchData.result}</p>
        <p className="match-status">{matchData.match_status}</p>
      </li>
    )
  }
}

export default MatchCard
