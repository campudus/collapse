'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PanelContent = _react2["default"].createClass({
  displayName: 'PanelContent',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    isActive: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    inActiveClass: _react.PropTypes.string,
    contentWrapperClass: _react.PropTypes.string,
    activeClassName: _react.PropTypes.string
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive;
  },
  render: function render() {
    var _classnames;

    this._isActived = this._isActived || this.props.isActive;
    if (!this._isActived) {
      return null;
    }
    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var isActive = _props.isActive;
    var children = _props.children;
    var activeClassName = _props.activeClassName;
    var contentWrapperClass = _props.contentWrapperClass;
    var inActiveClass = _props.inActiveClass;

    var contentCls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, prefixCls + '-content', true), _defineProperty(_classnames, '' + activeClassName, isActive), _defineProperty(_classnames, prefixCls + '-content-active', isActive), _defineProperty(_classnames, prefixCls + '-content-inactive', !isActive), _defineProperty(_classnames, '' + contentWrapperClass, contentWrapperClass), _defineProperty(_classnames, '' + inActiveClass, !isActive), _classnames));
    return _react2["default"].createElement(
      'div',
      {
        className: contentCls,
        role: 'tabpanel'
      },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-content-box' },
        children
      )
    );
  }
});

exports["default"] = PanelContent;
module.exports = exports['default'];