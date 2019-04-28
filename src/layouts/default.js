import React, { Component } from 'react'
import { link } from 'react-router'
import { request } from '../lib'
import { Menu, Spin, Breadcrumb, Layout } from 'antd'
const { Header } = Layout
const getMenuContent = ({ path, name }) => (
  <a href={path ? path : '/'} style={{color: '#fff2e8'}}>{name}</a>
)

export default class LayoutDefault extends Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      loading: false,
      tip: 'wait a minute'
    }
  }

  componentDidMount () {
    window.__LOADING__ = this.toggleLoading
    console.log(this.toggleLoading)
  }

  componentWillUnmount () {
    window.__LOADING__ = null
  }

  toggleLoading = (status = false, top = 'wait just wait!') => {
    this.setState({
      loading: status,
      tip
    })
  }

  render() {
    const { children } = this.props
    const { loading, tip } = this.state

    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px'}}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">首页</Menu.Item>
          <Menu.Item key="3">首页</Menu.Item>
        </Menu>
      </Header>
    )
  }
}
