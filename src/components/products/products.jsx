import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './product/product'

const products = [
    { id: 1, name: 'shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0204/0483/0283/products/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER_2502111c-96f3-405a-a2d7-d95c6a211f6e.png?v=1600891021' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-500x500.png' },
    { id: 3, name: 'shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0204/0483/0283/products/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER_2502111c-96f3-405a-a2d7-d95c6a211f6e.png?v=1600891021' },
    { id: 4, name: 'Macbook1', description: 'Apple Macbook.', price: '$10', image: 'https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-500x500.png' },
    { id: 5, name: 'shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0204/0483/0283/products/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER_2502111c-96f3-405a-a2d7-d95c6a211f6e.png?v=1600891021' },
    { id: 6, name: 'Macbook2', description: 'Apple Macbook.', price: '$10', image: 'https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-500x500.png' },
    { id: 7, name: 'Macbook3', description: 'Apple Macbook.', price: '$10', image: 'https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-500x500.png' },
    { id: 8, name: 'shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0204/0483/0283/products/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER_2502111c-96f3-405a-a2d7-d95c6a211f6e.png?v=1600891021' },
    { id: 9, name: 'Macbook4', description: 'Apple Macbook.', price: '$10', image: 'https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-500x500.png' }
]
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
