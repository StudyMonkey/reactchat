import React, { Component } from 'react'
import CommonHeader from '../../components/header/header'
import CommonFooter from '../../components/footer/footer'


export default class create extends Component {
  render() {
    return (
      <div>
        <CommonHeader />
        <div>
            This is create page
        </div>
        <CommonFooter />
      </div>
    )
  }
}
