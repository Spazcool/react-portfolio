import React from 'react';
import {Link as ReactLink} from 'react-router-dom';

export default class Link extends React.Component {
  parseTo(to) {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  }
  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }

  render() {
    const {to, children, ...rest} = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (<ReactLink to={toLocation.pathname} {...rest}>{children}</ReactLink>);
    } else {
      return (<a href={to} rel="noopener noreferrer" target="_blank" {...rest}>{children}</a>);
    }
  }
}
// todo functionalize this compononent
// https://gist.github.com/shprink/bf9599e1d66b9dc4d151e89c1199ccb8