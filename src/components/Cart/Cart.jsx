import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core';
import CartItem from './CartItem/CartItem'
import useStyles from './styles';
import { Link } from 'react-router-dom'
const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart,
            <Link to="/" className={classes.link}>start adding some</Link>!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.EmptyButton} variant="contained" color="secondary" type="button" size="large">Empty Cart</Button>
                    <Button className={classes.checkoutButton} variant="contained" color="primary" type="button" size="large">Checkout</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

    return (
        <Container className={classes.root}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
