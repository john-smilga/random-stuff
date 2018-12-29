import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// import '../styles/sass/layout.scss'

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />

    {children}
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
