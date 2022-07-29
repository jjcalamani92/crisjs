"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcDrawer = _interopRequireDefault(require("rc-drawer"));

var React = _interopRequireWildcard(require("react"));

var _configProvider = require("../config-provider");

var _context = require("../form/context");

var _type = require("../_util/type");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var DrawerContext = /*#__PURE__*/React.createContext(null);
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var SizeTypes = (0, _type.tuple)('default', 'large');
var defaultPushState = {
  distance: 180
};
var Drawer = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var width = _a.width,
      height = _a.height,
      _a$size = _a.size,
      size = _a$size === void 0 ? 'default' : _a$size,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? true : _a$closable,
      _a$placement = _a.placement,
      placement = _a$placement === void 0 ? 'right' : _a$placement,
      _a$maskClosable = _a.maskClosable,
      maskClosable = _a$maskClosable === void 0 ? true : _a$maskClosable,
      _a$mask = _a.mask,
      mask = _a$mask === void 0 ? true : _a$mask,
      _a$level = _a.level,
      level = _a$level === void 0 ? null : _a$level,
      _a$keyboard = _a.keyboard,
      keyboard = _a$keyboard === void 0 ? true : _a$keyboard,
      _a$push = _a.push,
      _push = _a$push === void 0 ? defaultPushState : _a$push,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _a$closeIcon,
      bodyStyle = _a.bodyStyle,
      drawerStyle = _a.drawerStyle,
      className = _a.className,
      propsVisible = _a.visible,
      forceRender = _a.forceRender,
      children = _a.children,
      zIndex = _a.zIndex,
      destroyOnClose = _a.destroyOnClose,
      style = _a.style,
      title = _a.title,
      headerStyle = _a.headerStyle,
      onClose = _a.onClose,
      footer = _a.footer,
      footerStyle = _a.footerStyle,
      customizePrefixCls = _a.prefixCls,
      customizeGetContainer = _a.getContainer,
      extra = _a.extra,
      _afterVisibleChange = _a.afterVisibleChange,
      rest = __rest(_a, ["width", "height", "size", "closable", "placement", "maskClosable", "mask", "level", "keyboard", "push", "closeIcon", "bodyStyle", "drawerStyle", "className", "visible", "forceRender", "children", "zIndex", "destroyOnClose", "style", "title", "headerStyle", "onClose", "footer", "footerStyle", "prefixCls", "getContainer", "extra", "afterVisibleChange"]);

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      internalPush = _React$useState2[0],
      setPush = _React$useState2[1];

  var parentDrawer = React.useContext(DrawerContext);
  var destroyCloseRef = React.useRef(false);

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      load = _React$useState4[0],
      setLoad = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      visible = _React$useState6[0],
      setVisible = _React$useState6[1];

  React.useEffect(function () {
    if (propsVisible) {
      setLoad(true);
    } else {
      setVisible(false);
    }
  }, [propsVisible]);
  React.useEffect(function () {
    if (load && propsVisible) {
      setVisible(true);
    }
  }, [load, propsVisible]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  React.useEffect(function () {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    if (propsVisible && parentDrawer) {
      parentDrawer.push();
    }

    return function () {
      if (parentDrawer) {
        parentDrawer.pull(); // parentDrawer = null;
      }
    };
  }, []);
  React.useEffect(function () {
    if (parentDrawer) {
      if (visible) {
        parentDrawer.push();
      } else {
        parentDrawer.pull();
      }
    }
  }, [visible]);
  var operations = React.useMemo(function () {
    return {
      push: function push() {
        if (_push) {
          setPush(true);
        }
      },
      pull: function pull() {
        if (_push) {
          setPush(false);
        }
      }
    };
  }, [_push]);
  React.useImperativeHandle(ref, function () {
    return operations;
  }, [operations]);

  var getOffsetStyle = function getOffsetStyle() {
    // https://github.com/ant-design/ant-design/issues/24287
    if (!visible && !mask) {
      return {};
    }

    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      var defaultWidth = size === 'large' ? 736 : 378;
      offsetStyle.width = typeof width === 'undefined' ? defaultWidth : width;
    } else {
      var defaultHeight = size === 'large' ? 736 : 378;
      offsetStyle.height = typeof height === 'undefined' ? defaultHeight : height;
    }

    return offsetStyle;
  };

  var getRcDrawerStyle = function getRcDrawerStyle() {
    // get drawer push width or height
    var getPushTransform = function getPushTransform(_placement) {
      var distance;

      if (typeof _push === 'boolean') {
        distance = _push ? defaultPushState.distance : 0;
      } else {
        distance = _push.distance;
      }

      distance = parseFloat(String(distance || 0));

      if (_placement === 'left' || _placement === 'right') {
        return "translateX(".concat(_placement === 'left' ? distance : -distance, "px)");
      }

      if (_placement === 'top' || _placement === 'bottom') {
        return "translateY(".concat(_placement === 'top' ? distance : -distance, "px)");
      }
    }; // 当无 mask 时，将 width 应用到外层容器上
    // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题


    var offsetStyle = mask ? {} : getOffsetStyle();
    return (0, _extends2["default"])((0, _extends2["default"])({
      zIndex: zIndex,
      transform: internalPush ? getPushTransform(placement) : undefined
    }, offsetStyle), style);
  };

  var closeIconNode = closable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: "".concat(prefixCls, "-close")
  }, closeIcon);

  function renderHeader() {
    if (!title && !closable) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-header"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-header-close-only"), closable && !title && !extra)),
      style: headerStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-header-title")
    }, closeIconNode, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title)), extra && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra));
  }

  function renderFooter() {
    if (!footer) {
      return null;
    }

    var footerClassName = "".concat(prefixCls, "-footer");
    return /*#__PURE__*/React.createElement("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  } // render drawer body dom


  var renderBody = function renderBody() {
    // destroyCloseRef.current =false Load the body only once by default
    if (destroyCloseRef.current && !forceRender && !propsVisible) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-wrapper-body"),
      style: (0, _extends2["default"])({}, drawerStyle)
    }, renderHeader(), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, children), renderFooter());
  };

  var drawerClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({
    'no-mask': !mask
  }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var offsetStyle = mask ? getOffsetStyle() : {};
  return /*#__PURE__*/React.createElement(DrawerContext.Provider, {
    value: operations
  }, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
    status: true,
    override: true
  }, /*#__PURE__*/React.createElement(_rcDrawer["default"], (0, _extends2["default"])({
    handler: false
  }, (0, _extends2["default"])({
    placement: placement,
    prefixCls: prefixCls,
    maskClosable: maskClosable,
    level: level,
    keyboard: keyboard,
    children: children,
    onClose: onClose,
    forceRender: forceRender
  }, rest), offsetStyle, {
    open: visible || propsVisible,
    showMask: mask,
    style: getRcDrawerStyle(),
    className: drawerClassName,
    getContainer: getContainer,
    afterVisibleChange: function afterVisibleChange(open) {
      if (open) {
        destroyCloseRef.current = false;
      } else if (destroyOnClose) {
        destroyCloseRef.current = true;
        setLoad(false);
      }

      _afterVisibleChange === null || _afterVisibleChange === void 0 ? void 0 : _afterVisibleChange(open);
    }
  }), renderBody())));
});

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}

var _default = Drawer;
exports["default"] = _default;