import React, { Component } from 'react'
import styled from 'styled-components'
export default class SearchBar extends Component {
  render() {
    const { search, handleSearch, total, rejected, callbacks } = this.props

    return (
      <SearchWrapper>
        <FormWrapper>
          <input value={search} onChange={handleSearch} name="search" />
        </FormWrapper>
        <TotalWrapper>
          <h4 className="item total">Total : {total}</h4>
          <h4 className="item callbacks">CallBacks : {callbacks}</h4>
          <h4 className="item rejected">Rejected : {rejected}</h4>
        </TotalWrapper>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  .totals {
    display: flex;
  }
  margin: 2rem 0;
`
const TotalWrapper = styled.div`
  align-self: center;
  display: flex;
  .item {
    margin-right: 1rem;
  }
  .total {
    color: green;
  }
  .rejected {
    color: red;
  }
  .callbacks {
    color: blue;
  }
`
const FormWrapper = styled.form`
  flex: 0 0 20rem;
  margin-right: 2rem;
  input {
    width: 100%;
    font-size: 1.1rem;
    border-radius: 1rem;
    border: 2px solid black;
    color: black;
    padding: 0.3rem 0.5rem;
    outline: none;
  }
  input::focus {
  }
`
