import React, { Component } from 'react';
import './App.css'
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
  <legend>Form legend:</legend>

            <EstadoFavorito value={this.state.estadoFavorito} handleChange={ this.handleChange} />
          <input
            type="number"
            value={this.state.idade} 
            name="idade"
            onChange={this.handleChange}
            />
            </fieldset>

          <fieldset>
            <legend>Second legend</legend>
            <input
            type="checkbox"
            value={this.state.vaiComparecer} 
            name="vaiComparecer"
            onChange={this.handleChange}
          />
          <input type="file" />
          <select
            name='palavraChaveFavorita'
            value={this.state.palavraChaveFavorita}
            onChange={this.handleChange}>
            <option value='Componente'>Componente</option>
            <option value='Estado'>Estado</option>
            <option value='Evento'>Evento</option>
            <option value='Props'>Props</option>
          </select>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;