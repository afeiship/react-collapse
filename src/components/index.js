import noop from '@feizheng/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-collapse';

export default class ReactCollapse extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The summary content.
     */
    summary: PropTypes.any
  };

  static defaultProps = {
    value: false,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value };
  }

  componentDidMount() {
    const el = this.body;
    el.style.maxHeight = el.offsetHeight + 'px';
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleClick = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    this.setState({ value: !value });
    onChange({ target: { value } });
  };

  render() {
    const { className, summary, children, value, ...props } = this.props;
    const collapsed = this.state.value;
    return (
      <div
        data-component={CLASS_NAME}
        data-value={collapsed}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {summary && (
          <div className={`${CLASS_NAME}__summary`} onClick={this.handleClick}>
            <span className="is-arrow">▶</span>
            {summary}
          </div>
        )}
        <div
          className={`${CLASS_NAME}__body`}
          ref={(body) => (this.body = body)}>
          {children}
        </div>
      </div>
    );
  }
}
