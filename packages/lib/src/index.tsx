// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, createRef, Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-collapse';
const getElementRect = (el: HTMLElement): DOMRect => {
  const clone = el.cloneNode(true) as HTMLElement;
  clone.style.cssText = 'position:fixed;top:0;left:0;max-height:unset;';
  document.body.append(clone);
  const rect = clone.getBoundingClientRect();
  clone.remove();
  return rect;
};

export type ReactCollapseProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * Whether to show the content.
   * @default false
   */
  collapsed?: boolean;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The handle element.
   */
  handle?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

interface ReactCollapseState {
  collapsed?: boolean;
}

export default class ReactCollapse extends Component<ReactCollapseProps, ReactCollapseState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    collapsed: false,
  };

  private elementRef = createRef<HTMLDivElement>();
  state = {
    collapsed: this.props.collapsed,
  };

  get elementRect() {
    const el = this.elementRef.current;
    if (el) return getElementRect(el);
    return null;
  }

  componentDidMount() {
    const { elementRef } = this;
    const el = elementRef.current;
    if (el) {
      const rect = this.elementRect;
      if (!rect) console.warn('ReactCollapse: elementRect is null.');
      el.style.maxHeight = rect?.height + 'px';
    }
  }

  shouldComponentUpdate(nextProps: Readonly<ReactCollapseProps>): boolean {
    const { collapsed } = this.props;
    if (collapsed !== nextProps.collapsed) {
      this.setState({ collapsed: nextProps.collapsed });
    }
    return true;
  }

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { className, children, handle, collapsed, ...rest } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        data-collapsed={this.state.collapsed}
        className={cx(CLASS_NAME, className)}
        {...rest}
      >
        <header className={cx(`${CLASS_NAME}__handle`)} onClick={this.handleClick}>
          {handle}
        </header>
        <div ref={this.elementRef} className={cx(`${CLASS_NAME}__body`)}>{children}</div>
      </div>
    );
  }
}
