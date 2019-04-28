import React, { Component } from 'react'
import { request } from '../../lib'
import Layout from '../../layouts/default'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {

  }

  render () {
    return (
      <Layout {...this.props}>
        <div className='flex-row full'>
          <div className='flex-1 scroll-y align-self-start'>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </Layout>
    )
  }
}