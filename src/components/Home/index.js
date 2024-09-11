// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import './index.css'

class Home extends Component {
  state = {blogList: [], isWantLoader: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const matchesData = await fetch('https://apis.ccbp.in/ipl')
    const matches = await matchesData.json()
    console.log(matches)
    this.setState({blogList: matches.teams, isWantLoader: false})
  }

  render() {
    const {blogList, isWantLoader} = this.state
    console.log(blogList)

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="headerHeading">Ipl Dashboard</h1>
        </div>
        {isWantLoader ? (
          <div>
            <Loader type="TailSpin" testid="loader" />
          </div>
        ) : (
          <div className="ipl-container">
            <ul className="team-list-items">
              {blogList.map(eachItem => (
                <MatchCard key={eachItem.id} item={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home

