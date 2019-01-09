/**@jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { jsx, css } from "@emotion/core";

const navItem = css`
  color: #fff;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  width: 100px;
  height: 18px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
`;

const NavItem = ({ index, active, linkName, onClick }) => (
  <a
    href={linkName}
    onClick={() => onClick(index)}
    className={classnames({
      current: active
    })}
    css={navItem}
  >
    {linkName}
  </a>
);

NavItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

NavItem.defaultProps = {
  active: false,
  onClick: () => {}
};

export default NavItem;
