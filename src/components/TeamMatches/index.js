// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import TeamCard from '../TeamCard'
import './index.css'

class TeamMatches extends Component {
  state = {bannerList: {}, recentMatchList: [], teamUrl: ''}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dbResponse = await response.json()
    // console.log(dbResponse)

    const RequiredData = {
      teamBannerURl: dbResponse.team_banner_url,
      latestMatchDetails: dbResponse.latest_match_details,
      recentMatches: dbResponse.recent_matches,
    }
    console.log(RequiredData)
    this.setState({
      bannerList: RequiredData.latestMatchDetails,
      recentMatchList: RequiredData.recentMatches,
      teamUrl: RequiredData.teamBannerURl,
      isWantLoader: false,
    })
  }

  redirectToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  getNoOfMatches = value => {
    const {bannerList, recentMatchList} = this.state
    const currentMatch = value === bannerList.matchStatus ? 1 : 0
    const result =
      recentMatchList.filter(match => match.matchStatus === value).length +
      currentMatch
    return result
  }

  generatePieChartData = () => [
    {name: 'Won', value: this.getNoOfMatches('Won')},
    {name: 'Lost', value: this.getNoOfMatches('Lost')},
    {name: 'Drawn', value: this.getNoOfMatches('Drawn')},
  ]

  render() {
    const {bannerList, recentMatchList, teamUrl, isWantLoader} = this.state
    // console.log(recentMatchList)
    console.log(teamUrl)

    return (
      <div className="app-team-matches-container">
        {isWantLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <div className="team-matches-container">
            <img src={teamUrl} className="team-banner" alt="team banner" />

            <LatestMatch latestMatch={bannerList} />
            <ul className="recent-matches-List">
              {recentMatchList.map(eachTeam => (
                <TeamCard key={eachTeam.id} matchData={eachTeam} />
              ))}
            </ul>
            <button onClick={this.redirectToHome} className="backButton">
              back
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
