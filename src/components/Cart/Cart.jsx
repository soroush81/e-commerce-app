import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core';
import CartItem from './CartItem/CartItem'
import useStyles from './styles';
import { Link } from 'react-router-dom'
const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart,
            <Link to="/" className={classes.link}>start adding some</Link>!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={lineItem.id}>
                        <CartItem
                            item={lineItem}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h6">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} onClick={() => handleEmptyCart()} variant="contained" color="secondary" type="button" size="large">Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} variant="contained" color="primary" type="button" size="large">Checkout</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

    return (
        <Container className={classes.root}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h6" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
