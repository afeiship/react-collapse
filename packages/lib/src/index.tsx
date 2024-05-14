import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes } from 'react';

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
  collapsed?: boolean;
  /**
   * The callback function when collapse status change.
   * @param collapsed
   */
  onChange?: (collapsed: boolean) => void;
  /**
   * The summary element.
   */
  summary?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

interface ReactCollapseState {
  collapsed?: boolean;
}

export default class ReactCollapse extends Component<ReactCollapseProps, ReactCollapseState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    collapsed: false,
    onChange: noop,
  };

  state = {
    collapsed: this.props.collapsed,
  };

  get summaryView() {
    const { summary } = this.props;
    if (!summary) return null;
    return (
      <div className={cx(`${CLASS_NAME}__summary`)} onClick={this.handleSummaryClick}>
        {summary}
      </div>
    );
  }

  shouldComponentUpdate(nextProps: Readonly<ReactCollapseProps>): boolean {
    const { collapsed } = nextProps;
    if (collapsed !== this.state.collapsed) this.setState({ collapsed });
    return true;
  }

  handleSummaryClick = () => {
    const { onChange } = this.props;
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed }, () => {
      onChange?.(!collapsed);
    });
  };

  render() {
    const { className, children, summary, collapsed, onChange, ...rest } = this.props;
    return (
      <section
        data-component={CLASS_NAME}
        data-collapsed={this.state.collapsed}
        className={cx(CLASS_NAME, className)}
        {...rest}
      >
        {this.summaryView}
        <article className={cx(`${CLASS_NAME}__body`)}>
          <div className={`${CLASS_NAME}__content`}>
            {children}
          </div>
        </article>
      </section>
    );
  }
}
