import React from "react";
import PropTypes from "prop-types";
import 'material-icons/iconfont/material-icons.css';

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="IconSwitch">
      <div className={icon} onClick={() => onSwitch()}><span className="material-icons">{icon}</span> </div>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

IconSwitch.defaultProps = {
  onSwitch: () => {},
};

