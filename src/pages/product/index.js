import React, { Component } from "react";
import api2 from '../../services/api2';
import "./styles.css";

export default class Product extends Component {
  state = {
    product: {},
    pictures: [],
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params
    const response = await api2.get(`/${id}`)
    this.setState ({ product: response.data , pictures: response.data.pictures   });
   
    // this.setState ({ pictures: response.data.picture });
  }
  
  // function capturaUrlPictures() {
  //   const { product, pictures } =  this.state;
  //   return (
  //     pictures.map(el =>
  //       <img src={el.url} alt={`${product.title}`}></img> )
  //   )
  // }

  render() {
    const { product, pictures } =  this.state;
    const { title, price, permalink } = product;
    
    return (
      
      <div className='card-product'>
        <h1>{title}</h1>
        <div>{pictures.map((picture) => (
          <img src={picture.url}></img>
        ))}</div>
        <img src={pictures.url} alt={`${product.title}`}></img>
        {/* <capturaUrlPictures /> */}
        <p>R$ {Number(price).toFixed(2)}</p>
        
        <a href={permalink}>Link do produto no mercado livre</a>
      </div>
    )
  }
}
