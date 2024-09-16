import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

// grid way: https://dev.to/alexandprivate/the-ultimate-collapsible-component-with-height-auto-detection-25pi

const CLASS_NAME = 'react-collapse';

export type ReactCollapseProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * Whether to collapse or not.
   * @default false
   */
  value?: boolean;
  /**
   * The callback function when collapse status change.
   * @param collapsed
   */
  onChange?: (collapsed: boolean) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

interface ReactCollapseState {
  value?: boolean;
}

export default class ReactCollapse extends Component<ReactCollapseProps, ReactCollapseState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: false,
  };

  state = {
    value: this.props.value,
  };

  shouldComponentUpdate(nextProps: Readonly<ReactCollapseProps>): boolean {
    const { value } = nextProps;
    if (value !== this.state.value) this.setState({ value });
    return true;
  }

  handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    const { onChange } = this.props;
    const { value } = this.state;
    if (e.propertyName === 'opacity') {
      onChange?.(Boolean(value));
    }
  };

  render() {
    const { className, children, value, onChange, ...rest } = this.props;
    return (
      <section
        data-component={CLASS_NAME}
        data-collapsed={this.state.value}
        className={cx(CLASS_NAME, className)}
        onTransitionEnd={this.handleTransitionEnd}
        {...rest}
      >
        <div className={`${CLASS_NAME}__content`}>
          {children}
        </div>
      </section>
    );
  }
}
