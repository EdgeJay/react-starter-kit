import * as React from 'react';

export interface HelloProps {
  compiler: String;
  framework: String;
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}
      </h1>
    );
  }
}
