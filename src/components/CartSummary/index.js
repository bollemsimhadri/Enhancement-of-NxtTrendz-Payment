// Write your code here
import Popup from 'reactjs-popup'

import Payment from '../Payment'

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
              <Popup
                modal
                trigger={
                  <button type="button" className="Checkout-btn">
                    Checkout
                  </button>
                }
                position="top left"
              >
                {close => <Payment close={close} />}
              </Popup>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
