import React from 'react'
import { Card } from 'semantic-ui-react'
import { Stats } from 'fs';

class PokemonCard extends React.Component {

  state = {
    card: true
  }

  handleClick = (e) => {
    this.setState({card: !this.state.card})
  }

  render() {
    const {pokemon, pokemon: {name, stats, sprites}} = this.props
    const hp = stats.find(obj => obj.name === "hp")
    return (
      <Card onClick={this.handleClick}>
        <div>
        { this.state.card ?
          <div className="image">
            <img src={sprites.front} alt={name} />
          </div>
          :
          <div className="image">
            <img src={sprites.back} alt={name} />
          </div>
        }
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
