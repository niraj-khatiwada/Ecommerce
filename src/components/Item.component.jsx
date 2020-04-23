import React, { Component } from 'react'

import {Box} from "../styles/ItemList.styles"

import { withRouter } from 'react-router-dom'

class Item extends Component {
    render() {
        const {match} = this.props
        return (
            <div>
                <Box>
                     <h3>{match.params.item}</h3>
                    <h5>Shop Now</h5>
                </Box>
            </div>
        )
    }
}

export default withRouter(Item)