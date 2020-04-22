import React from 'react'

import { ItemListContainer } from '../styles/ItemList.styles'

import { Box, Row, BoxText } from '../styles/ItemList.styles'

export default class ItemList extends React.Component {
  render() {
    const itemArray = this.props.items.map((item, index) =>
      index !== 3 && index !== 4 ? (
        <Box
          className="d-flex flex-column col-md-4 h-50"
          style={{
            background: `url(${item.imageUrl}) center/cover no-repeat`,
          }}
        >
          <BoxText>
            <h3>{item.title.toUpperCase()}</h3>
            <h5>Shop Now</h5>
          </BoxText>
        </Box>
      ) : (
        <Box
          style={{
            height: item.size,
            background: `url(${item.imageUrl}) center/cover no-repeat `,
          }}
          className="d-flex flex-column col-md large"
        >
          <BoxText>
            <h3>{item.title.toUpperCase()}</h3>
            <h5>Shop Now</h5>
          </BoxText>
        </Box>
      )
    )
    return (
      <ItemListContainer>
        <Row className="row">{itemArray}</Row>
      </ItemListContainer>
    )
  }
}
