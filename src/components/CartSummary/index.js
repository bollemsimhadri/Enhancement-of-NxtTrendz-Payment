// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachitem => {
        total += eachitem.price * eachitem.quantity
      })

      return (
        <>
          <div className="summary-con">
            <div className="cart-summary-container">
              <h1 className="order-total-heading">Order Total: Rs {total}/-</h1>
              <p className="total-items">{cartList.length} Items in Cart</p>
              <button type="button" className="Checkout-btn d-sm-none">
                Checkout
              </button>
            </div>
            <button type="button" className="Checkout-btn d-lg-none">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
