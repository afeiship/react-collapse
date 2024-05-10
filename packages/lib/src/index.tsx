import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, createRef, Component, HTMLAttributes } from 'react';

// grid way: https://dev.to/alexandprivate/the-ultimate-collapsible-component-with-height-auto-detection-25pi

const CLASS_NAME = 'react-collapse';
const preloadImage = (src: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });

const getElementRect = async (el: HTMLElement): Promise<DOMRect> => {
  const clone = el.cloneNode(true) as HTMLElement;
  const imgs = Array.from(clone.getElementsByTagName('img'));
  await Promise.all(imgs.map((img) => preloadImage(img.src)));
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

  async getElementRect() {
    const { maxHeight } = this.props;
    if (maxHeight) return { height: maxHeight };
    const el = this.elementRef.current;
    if (el) return await getElementRect(el);
    return null;
  }

  async componentDidMount() {
    const { elementRef } = this;
    const el = elementRef.current;
    if (el) {
      const rect = await this.getElementRect();
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
      <section
        data-component={CLASS_NAME}
        data-visible={this.state.visible}
        className={cx(CLASS_NAME, className)}
        {...rest}
      >
        <div className={cx(`${CLASS_NAME}__summary`)} onClick={this.handleToolbarClick}>
          {summary}
        </div>
        <article ref={this.elementRef} className={cx(`${CLASS_NAME}__body`)}>{children}</article>
      </section>
    );
  }
}
