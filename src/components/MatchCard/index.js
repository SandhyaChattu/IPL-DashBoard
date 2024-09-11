// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const MatchCard = props => {
  const {item} = props
  // console.log(item)
  // console.log(item)

  return (
    <Link to={`/team-matches/${item.id}`}>
      <li className="list-container">
        <img src={item.team_image_url} alt={item.name} className="image" />
        <p>{item.name}</p>
      </li>
    </Link>
  )
}
export default MatchCard
