import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsError, updateAllProducts } from '../store/slices/productsSlice';

export default function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    fetch('https://fakestoreapi.com/productss').then((res) => res.json()).then((data => {
      dispatch(updateAllProducts(data))
    })).catch(() => {
      dispatch(fetchProductsError())
    })
  }, [])

  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}</div>
        </Link>
      </div>
    </header>
  )
}