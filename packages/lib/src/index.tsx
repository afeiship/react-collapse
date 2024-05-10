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
  visible?: boolean;
  /**
   * The callback function when collapse status change.
   * @param visible
   */
  onChange?: (visible: boolean) => void;
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
   * The summary element.
   */
  summary?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

interface ReactCollapseState {
  visible?: boolean;
}

export default class ReactCollapse extends Component<ReactCollapseProps, ReactCollapseState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    visible: false,
    onChange: noop,
    maxHeight: 0,
  };

  private elementRef = createRef<HTMLDivElement>();
  private updateElementMaxHeight = (maxHeight: number) => {
    const el = this.elementRef.current;
    if (el) {
      el.style.maxHeight = `${maxHeight}px`;
    }
  };

  state = {
    visible: this.props.visible,
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
      this.updateElementMaxHeight(rect?.height || 0);
    }
  }

  shouldComponentUpdate(nextProps: Readonly<ReactCollapseProps>): boolean {
    const { maxHeight, visible } = nextProps;
    if (visible !== this.props.visible) this.setState({ visible });
    if (maxHeight !== this.props.maxHeight) this.updateElementMaxHeight(maxHeight!);
    return true;
  }

  handleToolbarClick = () => {
    const { onChange } = this.props;
    this.setState({ visible: !this.state.visible }, () => {
      onChange?.(this.state.visible!);
    });
  };

  render() {
    const { className, children, summary, visible, maxHeight, onChange, ...rest } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        data-visible={this.state.visible}
        className={cx(CLASS_NAME, className)}
        {...rest}
      >
        <header className={cx(`${CLASS_NAME}__summary`)} onClick={this.handleToolbarClick}>
          {summary}
        </header>
        <div ref={this.elementRef} className={cx(`${CLASS_NAME}__body`)}>{children}</div>
      </div>
    );
  }
}
