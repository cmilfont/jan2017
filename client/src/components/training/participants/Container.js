import React, { Component } from 'react';

class Container extends Component {
  render() {
    const { User: { name, belt, imageUrl } } = this.props.participant;
    const className = `belt ${belt}`;

    const { children } = this.props;

    return (
      <div className="mdl-cell mdl-cell--6-col">
        <div className="profile">
          <div className="avatar">
            <div className="image">
              <div className={className} />
              <img src={imageUrl} role="presentation" />
            </div>
            <div className="name">{name}</div>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default Container;