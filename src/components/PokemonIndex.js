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

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }


  render() {
    const searchMon = Object.values(this.state.mon).filter(m => m.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.handleSearch(e)} showNoResults={false} />
        {/* <Search onSearchChange={(e) => this.handleSearch(e)} /> */}
        {console.log(searchMon)}
        <br />
        <PokemonCollection pokemon={searchMon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
