import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onDelete = async (id) => {
    if (!window.confirm('Thí chủ chắc chắn muốn xóa ?')) return;

    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      if (res.status === 200) {
        setProducts((prev) => prev.filter((product) => product.id !== id));
        toast.success('Xóa sản phẩm thành công');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!localStorage.username) {
    toast.error('Vui lòng đăng nhập');
    navigate('/login');
    return null;
  }

  return (
    <React.Fragment>
      <div id="wrapper">
        <Wrapper />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="contentt">
            <Banner />

            <div className="btn-group mt-2 float-left a">
              <NavLink className="navbar-brand mb-5 ml-4" to="/add">
                <button type="button" className="btn btn-primary">Thêm Sản Phẩm</button>
              </NavLink>
            </div>

            <div className="mt-3 float-left">
              <input
                className="form-control search mb-3 ml-5"
                name="keyword"
                value={keyword}
                onChange={onChange}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

            <table className="table table-bordered table-hover mt-6 ml-5">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên Sản Phẩm</th>
                  <th className="text-center">Loại Sản Phẩm</th>
                  <th className="text-center">Hình ảnh</th>
                  <th className="text-center">Xuất xứ</th>
                  <th className="text-center">Tình Trạng</th>
                  <th className="text-center">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <Item key={product.id} index={index} product={product} onDelete={onDelete} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Item = ({ product, index, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td className="text-center">{product.name_category}</td>
      <td className="text-center">
        <img
          alt="anh"
          src={product.image}
          height="80"
          width="80"
          className="list-img"
        />
      </td>
      <td>{product.origin}</td>
      <td className="text-center">
        <span className={product.tinhtranghang ? 'badge badge-success' : 'badge badge-danger'}>
          {product.tinhtranghang ? 'Còn hàng' : 'Hết hàng'}
        </span>
      </td>
      <td className="text-center">
        <NavLink to={`/products/${product.id}/edit`}>
          <button type="button" className="btn btn-primary">Sửa</button>
        </NavLink>
        <NavLink to={`/products/${product.id}/prodetailadmin`}>
          <button type="button" className="btn btn-primary ml-1">Xem</button>
        </NavLink>
        <button
          type="button"
          onClick={() => onDelete(product.id)}
          className="btn btn-primary ml-1"
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductList;
