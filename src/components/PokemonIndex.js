import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    mon: {},
    searchTerm: '',
    options: "all"
  }

  componentDidMount() {
    this.getMons()
  }

  getMons = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({mon: data}))
  }

  handleSearch = (input) => {
    this.setState({searchTerm: input.value})
  } 

  handleSubmit = (e) => {
    const data = {
      name: e.target[0].value,
      stats: [{value: e.target[1].value, name: "hp"}],
      sprites: {
        front: e.target[2].value,
        back: e.target[3].value
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(this.getMons)
  }


  render() {
    const searchMon = Object.values(this.state.mon).filter(m => m.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, input) => this.handleSearch(input), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={searchMon}/>
        <br />
        <PokemonForm cb={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
