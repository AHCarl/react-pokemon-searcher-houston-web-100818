import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {Object.keys(this.props.pokemon).map(p => {
          return <PokemonCard key={p} pokemon={this.props.pokemon[p]} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
