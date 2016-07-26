import React, { PropTypes } from 'react';
import classnames from 'classnames';

const PanelContent = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    isActive: PropTypes.bool,
    children: PropTypes.any,
    inActiveClass: PropTypes.string,
    contentWrapperClass: PropTypes.string,
    activeClassName: PropTypes.string,
  },
  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive;
  },
  render() {
    this._isActived = this._isActived || this.props.isActive;
    if (!this._isActived) {
      return null;
    }
    const {
      prefixCls,
      isActive,
      children,
      activeClassName,
      contentWrapperClass,
      inActiveClass,
    } = this.props;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${activeClassName}`]: isActive,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
      [`${inActiveClass}`]: !isActive,
    });
    const contentBoxCls = classnames({
      [`${prefixCls}-content-box`]: true,
      [`${contentWrapperClass}`]: contentWrapperClass,
    });
    return (
      <div
        className={contentCls}
        role="tabpanel"
      >
        <div className={contentBoxCls}>{children}</div>
      </div>
    );
  },
});

export default PanelContent;
