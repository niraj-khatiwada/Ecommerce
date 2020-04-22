import React, { Component } from 'react'

import {Box} from "../styles/Item.styles"

export default class Item extends Component {
    render() {
        return (
            <div>
                <Box>
                    <h3>Item</h3>
                    <h5>Shop Now</h5>
                </Box>
            </div>
        )
    }
}
