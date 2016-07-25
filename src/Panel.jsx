import React, { PropTypes } from 'react';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';

const CollapsePanel = React.createClass({
  propTypes: {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    activeClassName: PropTypes.string,
    children: PropTypes.any,
    openAnimation: PropTypes.object,
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick() {
      },
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    const { className, activeClassName, prefixCls, header, children, isActive } = this.props;
    const headerCls = `${ prefixCls }-header`;
    const itemCls = classNames({
      [`${ prefixCls }-item`]: true,
      [`${ activeClassName }`]: isActive,
      [`${ prefixCls }-item-active`]: isActive,
      [className]: className,
    });
    return (
      <div className={ itemCls }>
        <div
          className={ headerCls }
          onClick={this.handleItemClick}
          role="tab"
          aria-expanded={isActive}
        >
          <i className="arrow"></i>
          {header}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent prefixCls={ prefixCls }
            activeClassName={ activeClassName }
            isActive={ isActive }
          >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  },
});

export default CollapsePanel;
