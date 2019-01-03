import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./styles.scss";

const NavItem = ({ index, active, linkName, onClick }) => (
  <button
    href={linkName}
    onClick={() => onClick(index)}
    className={classnames({
      "nav-item": true,
      current: active
    })}
  >
    {linkName}
  </button>
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
