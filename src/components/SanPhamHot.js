import React, { Component } from "react";
import Slide from "./layout_page/Slide.js";
import Header from "./layout_page/Header.js";
import Footer from "./layout_page/Footer.js";
import { NavLink } from "react-router-dom";
import axios from "axios";

class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { products, keyword } = this.state;

    // Filter products by keyword and category 'sản phẩm hot'
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) &&
        product.name_category === "sản phẩm hot"
    );

    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ul className="aside-menu mt-5">
                <li>
                  <a>Hương vị độc đáo</a>
                </li>
                <li>
                  <a>Nguyên liệu thiên nhiên</a>
                </li>
                <li>
                  <a>Không chất bảo quản</a>
                </li>
                <li>
                  <a>Giá rẻ bất ngờ</a>
                </li>
                <li>
                  <a>Đảm bảo an toàn thực phẩm</a>
                </li>
                <li>
                  <a>Giao dịch nhanh chóng</a>
                </li>
                <li>
                  <a>Giao hàng tận tình</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-9">
              <div className="container mb-5">
                <h2 className="text-danger text-center mt-5">
                  Danh sách sản phẩm HOT tại cửa hàng
                </h2>
                <input
                  className="mt-3"
                  name="keyword"
                  value={keyword}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Search..."
                />

                <div className="row">
                  {filteredProducts.length === 0 ? (
                    <p className="mt-4 text-center">
                      Không tìm thấy sản phẩm phù hợp.
                    </p>
                  ) : (
                    filteredProducts.map((product) => (
                      <Item key={product.id} product={product} />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

class Item extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-4 mt-5">
        <div className="single-item">
          <div className="single-item-header">
            {/* Use NavLink instead of <a href> for client routing */}
            <NavLink to={`/products/${product.id}/productdetail`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
            </NavLink>
          </div>
          <div className="single-item-body">
            <p className="single-item-title text-center text-danger">
              {product.name}
            </p>
            <p className="single-item-price text-center">
              <span className="mb-3">${product.price}</span>
            </p>
          </div>
          <div className="single-item-caption mt-2 ml-5">
            <a className="add-to-cart pull-left" href="#">
              <i className="fa fa-shopping-cart" />
            </a>
            <NavLink to={`/products/${product.id}/productdetail`}>
              <button className="beta-btn primary">
                Details <i className="fa fa-chevron-right" />
              </button>
            </NavLink>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default AllProduct;
