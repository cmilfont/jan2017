import React, { PropTypes } from 'react';

class Button extends React.Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  onClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { label, name, disabled, className } = this.props;
    const conf = {
      className: `mdl-button mdl-button--raised mdl-button--colored ${className}`,
      onClick: this.onClick,
      name,
    };

    if (disabled) {
      conf.disabled = disabled;
    }

    return (
      <button {...conf} >
        {label}
      </button>
    );
  }
}

export default Button;
