import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

export default class Main extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();

    this.setState({ products: response.data.results})
  }
  
  render () {
    const { products } = this.state
    
    return(
      <div className="product-list">
      {products.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong>
          <img src={product.thumbnail} alt={`${product.title}`}></img>
          <p>R$ {(product.price.toFixed(2).toLocaleString('pt-BR'))}</p>
        
          <a href="">Acessar</a>
        </article>
        
      ))}
    </div>
  )
  }
}
