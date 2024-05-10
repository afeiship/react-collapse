import noop from '@jswork/noop';
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
   * The callback function when collapse status change.
   * @param collapsed
   */
  onChange?: (collapsed: boolean) => void;
  /**
   * The max height of content.
   * @default 0
   */
  maxHeight?: number;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The handle element.
   */
  toolbar?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

interface ReactCollapseState {
  collapsed?: boolean;
}

export default class ReactCollapse extends Component<ReactCollapseProps, ReactCollapseState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    collapsed: false,
    onChange: noop,
    maxHeight: 0,
  };

  private elementRef = createRef<HTMLDivElement>();
  state = {
    collapsed: this.props.collapsed,
  };

  get elementRect() {
    const { maxHeight } = this.props;
    if (maxHeight) return { height: maxHeight };
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
    const { collapsed } = nextProps;
    if (collapsed !== this.props.collapsed) this.setState({ collapsed });
    return true;
  }

  handleToolbarClick = () => {
    const { onChange } = this.props;
    this.setState({ collapsed: !this.state.collapsed }, () => {
      onChange?.(this.state.collapsed!);
    });
  };

  render() {
    const { className, children, toolbar, collapsed, maxHeight, onChange, ...rest } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        data-collapsed={this.state.collapsed}
        className={cx(CLASS_NAME, className)}
        {...rest}
      >
        <header className={cx(`${CLASS_NAME}__toolbar`)} onClick={this.handleToolbarClick}>
          {toolbar}
        </header>
        <div ref={this.elementRef} className={cx(`${CLASS_NAME}__body`)}>{children}</div>
      </div>
    );
  }
}
