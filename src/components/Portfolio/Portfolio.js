import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PopupComponent from '../Menubar/PopupComponent';
import './index.css';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/products';
import PortfolioFooterComponent from "./PortfolioFooterComponent";

// Название работ
const ProductItem = ({ category, name, image, slug }) => (
    <li className="portfolio-item">
        <NavLink exact to={`portfolio/${slug}`}>
            <div className="bar">
                <h2>{name}</h2>
                <i></i>
            </div>
            <div className="main">
                <img src={image} alt={name}/>
                <div className={`category--${category} circle`} />
            </div>
        </NavLink>
    </li>
);

const ProductList = ({ state: { products, displayCategory } }) => (
    <ul className="portfolio-list">
        {products
            .filter(
                ({ category }) =>
                    displayCategory === category || displayCategory === "all"
            )
            .map(({ category, name, image, slug }) => (
                <ProductItem key={`ProductItem-${name}`}
                             category={category}
                             name={name}
                             image={image}
                             slug={slug}
                />
            ))}
    </ul>
);

//Название категорий
const ButtonCategories = (productCategories, setCategory ) => (
    productCategories.map((category) => (
        <li key={category} className={`btn-${category}`} onClick={() => setCategory(category)}>
            <span>{category}</span>
        </li>
    ))
);

//Фильтр и Портфолио лист
const UI = ({
                state,
                state: { productCategories },
                setCategory,
                allProducts
            }) => (
    <div>
        <div className="container" id="portfolio">
            <div className="wrapper">
                <header>
                    <h1>web developer portfolio</h1>
                    <p>Ознакомьтесь с моими работами.</p>
                    <div className="portfolio-filter">
                        <ul>
                            {ButtonCategories(productCategories, setCategory )}
                        </ul>
                    </div>
                </header>
            </div>
        </div>
        <div>
            <ProductList state={state} />
        </div>
    </div>
);


class Portfolio extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayCategory: "all",
            products: PRODUCTS,
            productCategories: PRODUCT_CATEGORIES
        };
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
        this.setState({
            displayCategory: category
        });
    }
    render() {
      return (
          <div>
              <div className="page-control">
                  <NavLink to="/" className="prev">
                      <span>Обо мне</span>
                      <em></em>
                  </NavLink>
                  <NavLink to="/apps" className="next">
                      <span>Приложения</span>
                      <em></em>
                  </NavLink>
              </div>
              <div className="wrapper">
                  <PopupComponent />
                  <UI setCategory={this.setCategory} state={this.state} />
                  <PortfolioFooterComponent />
              </div>
          </div>
        )
    }
}

export default Portfolio;
