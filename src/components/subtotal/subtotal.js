import React from 'react'
import './subtotal.sass'
import {useStateValue} from '../../stateProvider'
import { getBasketTotal } from '../../reducer';
import {useNavigate} from 'react-router-dom'
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useNavigate()
  return (
    <div className='subtotal'>
        <h4>Subtotal ({basket.length} item): ${getBasketTotal(basket).toFixed(2)}</h4>
        <label><input type='checkbox' /> This order contains a gift</label>
        <button onClick={e=>history('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal