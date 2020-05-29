import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();

    console.log(response.data.results);
  }

  render () {
    return <h1>Hello world!!</h1>
  }
}