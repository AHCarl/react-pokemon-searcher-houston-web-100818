import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // handleSubmit = (e) => {
  //   const data = {
  //     name: e.target[0].value,
  //     stats: [{value: e.target[1].value, name: "hp"}],
  //     sprites: {
  //       front: e.target[2].value,
  //       back: e.target[3].value
  //     }
  //   }

  //   fetch('http://localhost:3000/pokemon', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => console.log(resp))
  // }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.cb} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm;