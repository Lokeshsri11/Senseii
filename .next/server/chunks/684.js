exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 2559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./data/headerSection.json
var headerSection_namespaceObject = {"j":"/logo.png"};
;// CONCATENATED MODULE: ./components/Header.js






const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "logo",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: headerSection_namespaceObject.j,
            width: 165,
            height: 65
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "btn-try",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        children: "Try free"
      })
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./data/footerSection.json
var footerSection_namespaceObject = JSON.parse('{"T":"Sensei will be a major part of your daily life.","W":"No more spending hours on comparing multiple thing, whether it is a workout routine, diet, study plan, daily schedule etc."}');
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header-footer",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: footerSection_namespaceObject.T
      }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: footerSection_namespaceObject.W
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "email",
          placeholder: "prateek@senseii.in"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          children: "Try it free"
        })]
      })
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;