import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import gatsbyLogo from "../images/gatsby-icon.png"

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={gatsbyLogo} style={{ width: "100px" }} alt="Gatsby Logo" />
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
