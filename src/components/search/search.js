import React, { Component } from 'react'
import { Button,Icon,Input } from 'antd'

const Search = Input.Search;

export default class search extends Component {
  render() {
    return (
        <div className="btnSearchWrap">
        <Button
          size="small"
          type="primary"
          style={{ marginRight: "8px" }}
        >
          <Icon type="plus" />
          创建小组
        </Button>
        <Button size="small" type="danger">
          <Icon type="search" />
          查找小组/用户
        </Button>
        <Search
          className="width230"
          placeholder="请输入"
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    )
  }
}
