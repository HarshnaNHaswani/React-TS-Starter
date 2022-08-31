"use strict";
(self["webpackChunkreact_ts_webpack"] = self["webpackChunkreact_ts_webpack"] || []).push([[179],{

/***/ 689:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(711);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css
var style = __webpack_require__(206);
;// CONCATENATED MODULE: ./src/assets/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ var styles_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(974);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(800);
;// CONCATENATED MODULE: ./src/assets/images/hello.jpg
var hello_namespaceObject = __webpack_require__.p + "assets/4c71bf3fdb8e17aa0f74.jpg";
;// CONCATENATED MODULE: ./src/components/ErrorFallback/index.tsx
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var ErrorFallback = function ErrorFallback(_a) {
  var error = _a.error,
      resetErrorBoundary = _a.resetErrorBoundary;
  return (0,jsx_runtime.jsxs)("div", __assign({
    role: "alert"
  }, {
    children: [(0,jsx_runtime.jsx)("p", {
      children: "Something went wrong:"
    }), (0,jsx_runtime.jsx)("pre", {
      children: error.message
    }), (0,jsx_runtime.jsx)("button", __assign({
      onClick: resetErrorBoundary
    }, {
      children: "Try again"
    }))]
  }));
};
;// CONCATENATED MODULE: ./src/assets/images/loading.gif
var loading_namespaceObject = __webpack_require__.p + "assets/90af8510285638891f1a.gif";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Loader/loader.module.css
var loader_module = __webpack_require__(961);
;// CONCATENATED MODULE: ./src/components/Loader/loader.module.css

      
      
      
      
      
      
      
      
      

var loader_module_options = {};

loader_module_options.styleTagTransform = (styleTagTransform_default());
loader_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      loader_module_options.insert = insertBySelector_default().bind(null, "head");
    
loader_module_options.domAPI = (styleDomAPI_default());
loader_module_options.insertStyleElement = (insertStyleElement_default());

var loader_module_update = injectStylesIntoStyleTag_default()(loader_module/* default */.Z, loader_module_options);




       /* harmony default export */ var Loader_loader_module = (loader_module/* default */.Z && loader_module/* default.locals */.Z.locals ? loader_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Loader/index.tsx



var Loader = function Loader() {
  return (0,jsx_runtime.jsx)("img", {
    src: loading_namespaceObject,
    alt: "Loading...",
    className: Loader_loader_module.loader
  });
};
;// CONCATENATED MODULE: ./src/components/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.module.css
var home_module = __webpack_require__(240);
;// CONCATENATED MODULE: ./src/pages/Home/home.module.css

      
      
      
      
      
      
      
      
      

var home_module_options = {};

home_module_options.styleTagTransform = (styleTagTransform_default());
home_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      home_module_options.insert = insertBySelector_default().bind(null, "head");
    
home_module_options.domAPI = (styleDomAPI_default());
home_module_options.insertStyleElement = (insertStyleElement_default());

var home_module_update = injectStylesIntoStyleTag_default()(home_module/* default */.Z, home_module_options);




       /* harmony default export */ var Home_home_module = (home_module/* default */.Z && home_module/* default.locals */.Z.locals ? home_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Home/index.tsx
var Home_assign = undefined && undefined.__assign || function () {
  Home_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return Home_assign.apply(this, arguments);
};







var DetailedContent = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/* import() */ 901).then(__webpack_require__.bind(__webpack_require__, 901));
});
var Home = function Home() {
  var _a = (0,react.useState)(false),
      showDetailedContent = _a[0],
      setShowDetailedContent = _a[1];

  var buttonClickHandler = function buttonClickHandler() {
    setShowDetailedContent(!showDetailedContent);
  };

  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)("h2", {
      children: "Home"
    }), (0,jsx_runtime.jsxs)("button", Home_assign({
      onClick: buttonClickHandler
    }, {
      children: ["Click to ", showDetailedContent ? "Hide" : "Get", " Detailed Info"]
    })), showDetailedContent && (0,jsx_runtime.jsx)(react_error_boundary_umd.ErrorBoundary, Home_assign({
      FallbackComponent: ErrorFallback,
      onReset: function onReset() {
        console.log("an error occurred");
      }
    }, {
      children: (0,jsx_runtime.jsx)(react.Suspense, Home_assign({
        fallback: (0,jsx_runtime.jsx)(Loader, {})
      }, {
        children: (0,jsx_runtime.jsx)(DetailedContent, {})
      }))
    })), !showDetailedContent && (0,jsx_runtime.jsx)("img", {
      src: hello_namespaceObject,
      loading: "lazy",
      className: Home_home_module.img,
      alt: "Hello!!!"
    })]
  });
};
;// CONCATENATED MODULE: ./src/pages/index.ts

;// CONCATENATED MODULE: ./src/router/index.tsx



var Router = function Router() {
  var routes = (0,react_router/* useRoutes */.V$)([{
    path: "/",
    element: (0,jsx_runtime.jsx)(Home, {})
  }]);
  console.log("in router");
  return routes;
};
;// CONCATENATED MODULE: ./src/App.tsx
var App_assign = undefined && undefined.__assign || function () {
  App_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return App_assign.apply(this, arguments);
};




var App = function App() {
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)("h1", App_assign({
      className: "hero"
    }, {
      children: "React Ts Webpack App"
    })), (0,jsx_runtime.jsx)(Router, {})]
  });
};
;// CONCATENATED MODULE: ./src/index.tsx
var src_assign = undefined && undefined.__assign || function () {
  src_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return src_assign.apply(this, arguments);
};





var root = (0,client/* createRoot */.s)(document === null || document === void 0 ? void 0 : document.getElementById("root"));
root.render((0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, src_assign({
  basename: "/"
}, {
  children: (0,jsx_runtime.jsx)(App, {})
})));

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  text-align: left;\r\n}\r\n\r\n.hero {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  text-align: left;\r\n}\r\n\r\n.hero {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".NT3xzmrAg9DtfyFi8yqd {\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.NT3xzmrAg9DtfyFi8yqd::after {\r\n  position: absolute;\r\n  content: \"Loading....\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/Loader/loader.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB","sourcesContent":[".loader {\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.loader::after {\r\n  position: absolute;\r\n  content: \"Loading....\";\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "NT3xzmrAg9DtfyFi8yqd"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Ty8E5ZpOWCUXuwI0ZgSr {\r\n  max-height: 72vh;\r\n  display: block;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/Home/home.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":[".img {\r\n  max-height: 72vh;\r\n  display: block;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"img": "Ty8E5ZpOWCUXuwI0ZgSr"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(689); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.6d27cd4501c699f41860.bundle.js.map