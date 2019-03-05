import React, { Component } from 'react'
import { List, Avatar,Badge,Icon } from 'antd'

const Item = List.Item;

export default class chat extends Component {

  render() {
    return (
      <div>
        <List
        itemLayout="horizontal"
        dataSource={ this.props.data }
        renderItem={item => (
            <Item arrow="horizontal">
            <List.Item.Meta
                avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                <a href="https://ant.design">{item.title}</a>
                }
                description={"描述描述111111111111111111111111"}
            />
            <Badge style={{ marginTop: "-4px" }} count={1} />
            <Icon type="right" />
            </Item>
        )}
        />        
      </div>
    )
  }
}
