'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PanelContent = require('./PanelContent');

var _PanelContent2 = _interopRequireDefault(_PanelContent);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CollapsePanel = _react2["default"].createClass({
  displayName: 'CollapsePanel',

  propTypes: {
    className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    activeClassName: _react.PropTypes.string,
    customInActiveClass: _react.PropTypes.string,
    customHeaderClass: _react.PropTypes.string,
    customContentWrapperClass: _react.PropTypes.string,
    children: _react.PropTypes.any,
    openAnimation: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    index: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    header: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.node]),
    isActive: _react.PropTypes.bool,
    onItemClick: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      isActive: false,
      onItemClick: function onItemClick() {}
    };
  },
  handleItemClick: function handleItemClick() {
    this.props.onItemClick();
  },
  render: function render() {
    var _classNames, _classNames2;

    var _props = this.props;
    var className = _props.className;
    var activeClassName = _props.activeClassName;
    var customInActiveClass = _props.customInActiveClass;
    var customHeaderClass = _props.customHeaderClass;
    var customContentWrapperClass = _props.customContentWrapperClass;
    var prefixCls = _props.prefixCls;
    var header = _props.header;
    var children = _props.children;
    var isActive = _props.isActive;

    var headerCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-header', true), _defineProperty(_classNames, '' + customHeaderClass, customHeaderClass), _classNames));
    var itemCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item', true), _defineProperty(_classNames2, '' + activeClassName, isActive), _defineProperty(_classNames2, prefixCls + '-item-active', isActive), _defineProperty(_classNames2, className, className), _classNames2));
    return _react2["default"].createElement(
      'div',
      { className: itemCls },
      _react2["default"].createElement(
        'div',
        {
          className: headerCls,
          onClick: this.handleItemClick,
          role: 'tab',
          'aria-expanded': isActive
        },
        _react2["default"].createElement('i', { className: 'arrow' }),
        header
      ),
      _react2["default"].createElement(
        _rcAnimate2["default"],
        {
          showProp: 'isActive',
          exclusive: true,
          component: '',
          animation: this.props.openAnimation
        },
        _react2["default"].createElement(
          _PanelContent2["default"],
          { prefixCls: prefixCls,
            activeClassName: activeClassName,
            contentWrapperClass: customContentWrapperClass,
            inActiveClass: customInActiveClass,
            isActive: isActive
          },
          children
        )
      )
    );
  }
});

exports["default"] = CollapsePanel;
module.exports = exports['default'];