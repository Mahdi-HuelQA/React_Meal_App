import {useContext} from 'react'
import CartIcon  from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context'


function HeaderCartButton(props) {

   const cartCTX = useContext(cartContext)

   const numberOfCartItems = cartCTX.items.reduce((curNumber,item) => {
       console.log(curNumber, item)
return curNumber + item.amount

   }, 0)
    return (
        <button className = {classes.button} onClick = {props.onClick}>
            <span className = {classes.icon}>
                <CartIcon/>
            </span>
            <span> Your Cart</span>
            <span className = {classes.badge}> {numberOfCartItems} </span>

        </button>
    )
}

export default HeaderCartButton
