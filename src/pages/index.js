import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Section } from '../utils'
import Job from '../components/HomePage/Job'
import SearchBar from '../components/HomePage/SearchBar'
import styled from 'styled-components'
const rejectedJobs = jobs => {
  const rejectedJobs = jobs.filter(item => item.node.rejected === true)
  return rejectedJobs.length
}
const callback = jobs => {
  const callbacks = jobs.filter(item => item.node.callback === true)

  return callbacks.length
}
const fixedJobs = jobs => {
  let sortedJobs = []
  jobs.forEach(item => {
    item.node.company = item.node.company.toUpperCase()
    item.node.platform = item.node.platform.toUpperCase()

    const job = { ...item.node }
    sortedJobs = [...sortedJobs, job]
  })

  return sortedJobs.sort((a, b) => {
    if (a.company < b.company) {
      return -1
    }
    if (a.company > b.company) {
      return 1
    }
  })
}

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: fixedJobs(this.props.data.jobs.edges),
      jobList: fixedJobs(this.props.data.jobs.edges),
      rejectedTotal: rejectedJobs(this.props.data.jobs.edges),
      callbacks: callback(this.props.data.jobs.edges),
      search: '',
    }
  }
  handleSearch = event => {
    const search = event.target.value.toUpperCase()
    const length = search.length
    console.log(length)

    const sortedJobs = this.state.jobs.filter(
      item => item.company.slice(0, length) === search
    )

    this.setState(() => {
      return { search, jobList: sortedJobs }
    })
  }
  render() {
    return (
      <Layout>
        <Section>
          <SearchBar
            search={this.state.search}
            handleSearch={this.handleSearch}
            rejected={this.state.rejectedTotal}
            total={this.state.jobs.length}
            callbacks={this.state.callbacks}
          />
          <JobList>
            {this.state.jobList.map(item => (
              <Job key={item.id} job={item} />
            ))}
          </JobList>
        </Section>
      </Layout>
    )
  }
}

const JobList = styled.div`
  display: grid;
  grid-template-columns: 80%;
  grid-gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const query = graphql`
  {
    jobs: allContentfulJobs {
      edges {
        node {
          id
          company
          date(formatString: "DD/MM")
          rejected
          platform
          callback
        }
      }
    }
  }
`
