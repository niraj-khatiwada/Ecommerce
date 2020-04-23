import React from 'react'

import { withRouter } from 'react-router-dom'
import { ItemListContainer } from '../styles/ItemList.styles'

import { Box, Row, BoxText, ImageWrapper } from '../styles/ItemList.styles'

class ItemList extends React.Component {
  render() {
    const { history } = this.props
    let height
    const itemArray = this.props.items.map((item, index) => {
      index === 3 || index === 4
        ? (height = ['60%', 'col-md'])
        : (height = ['h-50', 'col-md-4'])
      return (
        <Box
          className={`d-flex flex-column ${height[1]} ${height[0]}  p-0`}
          style={{ height: height[0] }}
        >
          <ImageWrapper
            style={{
              background: `url(${item.imageUrl}) center/cover no-repeat`,
            }}
          >
            <BoxText onClick={() => history.push(`${item.title}`)}>
              <h3>{item.title.toUpperCase()}</h3>
              <h5>Shop Now</h5>
            </BoxText>
          </ImageWrapper>
        </Box>
      )
    })
    return (
      <ItemListContainer>
        <Row className="row">{itemArray}</Row>
      </ItemListContainer>
    )
  }
}

export default withRouter(ItemList)
