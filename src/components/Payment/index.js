import {useContext, useState} from 'react'

import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptionList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisable: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisable: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisable: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisable: false,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisable: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onPlaceOrder = () => setIsOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity + item.price, 0)

  const renderPaymentMethod = () => (
    <ul className="payments-method-inputs">
      {paymentOptionList.map(each => (
        <li className="payments-method-i-con" key={each.id}>
          <input
            className="payments-input"
            type="radio"
            id={each.id}
            name="paymentMethod"
            onChange={updatePaymentMethod}
            disabled={each.isDisable}
          />

          <label
            className={`payment-method-lable ${
              each.isDisable ? 'disabled-label' : ''
            }`}
            htmlFor={each.id}
          >
            {each.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="payments-con">
      {isOrderPlaced ? (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="success-msg">
              Your order has been placed successfully
            </p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="payments-heading">Payments Details</h1>
          <p className="sub-heading"> Payment Method</p>
          {renderPaymentMethod()}
          <div className="order-details">
            <p className="sub-heading">Order details</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice()}/-</p>
          </div>
          <button
            type="button"
            className="order-btn"
            onClick={onPlaceOrder}
            disabled={paymentMethod === ''}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}

export default Payment
