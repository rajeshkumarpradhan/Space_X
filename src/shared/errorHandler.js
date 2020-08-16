import React from "react";
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <React.StrictMode>
          <h2>OOPS SOMETHING WENT WRONG!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </React.StrictMode>
      );
    }
    // Render children if there's no error
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.object
};
