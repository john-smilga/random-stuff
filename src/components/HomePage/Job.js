import React, { Component } from 'react'
import styled from 'styled-components'
export default class Job extends Component {
  render() {
    const { company, date, platform, rejected, callback } = this.props.job
    return (
      <JobWrapper rejected={rejected} callback={callback}>
        <h6>{company}</h6>
        <h6 className="info">
          <span className="item">{date}</span>
          <span>{platform}</span>
        </h6>
      </JobWrapper>
    )
  }
}

const JobWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  padding: 0.5rem;
  background: ${props => {
    let value = 'rgba(0,255,0,0.3)'
    if (props.rejected === true) {
      value = 'rgba(255,0,0,0.3)'
      return value
    }
    if (props.callback === true) {
      value = 'rgba(0,0,255,0.3)'
      return value
    }
    return value
  }};

  .info {
    display: flex;
    justify-content: flex-end;
  }
  .item {
    margin-right: 0.5rem;
  }
`
