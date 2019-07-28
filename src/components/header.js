import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import gatsbyLogo from "../images/gatsby-icon.png"

const HeaderWrapper = styled.div`
  margin-bottom: 0;
  background: rgba(163, 197, 200, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 11%,
    rgba(35, 40, 62, 1) 83%,
    rgba(35, 40, 62, 1) 97%,
    rgba(35, 40, 62, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(163, 197, 200, 1)),
    color-stop(0%, rgba(163, 197, 200, 1)),
    color-stop(11%, rgba(163, 197, 200, 1)),
    color-stop(83%, rgba(35, 40, 62, 1)),
    color-stop(97%, rgba(35, 40, 62, 1)),
    color-stop(100%, rgba(35, 40, 62, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 11%,
    rgba(35, 40, 62, 1) 83%,
    rgba(35, 40, 62, 1) 97%,
    rgba(35, 40, 62, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 11%,
    rgba(35, 40, 62, 1) 83%,
    rgba(35, 40, 62, 1) 97%,
    rgba(35, 40, 62, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 11%,
    rgba(35, 40, 62, 1) 83%,
    rgba(35, 40, 62, 1) 97%,
    rgba(35, 40, 62, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 0%,
    rgba(163, 197, 200, 1) 11%,
    rgba(35, 40, 62, 1) 83%,
    rgba(35, 40, 62, 1) 97%,
    rgba(35, 40, 62, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3c5c8', endColorstr='#23283e', GradientType=1 );
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
            color: `#23283E`,
            textDecoration: `none`,
          }}
        >
          {/* <img src={gatsbyLogo} style={{ width: "100px" }} alt="Gatsby Logo" /> */}
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
