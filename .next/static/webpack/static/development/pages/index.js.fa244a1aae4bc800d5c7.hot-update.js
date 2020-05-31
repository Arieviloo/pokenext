webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/list/index.js":
/*!*********************************!*\
  !*** ./component/list/index.js ***!
  \*********************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Arievilo\\Documents\\learning\\camal_dev_soutinho\\pokenext\\component\\list\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function List(_ref) {
  var props = _ref.props;
  console.log("List -> props", props); // const [pokemon, setPokemon] = useState([])
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokedex/2/')
  //     .then(res => {
  //     console.log("List -> 1res", res)
  //       if(res.ok) {
  //         console.log(res)
  //         return res.json()
  //       }
  //     })
  //     .then(res => {
  //     console.log("List -> 2res", res)
  //       setPokemon(res.pokemon_entries)
  //     })
  // }, []);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "s\xF3 testando", __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })));
}
_c = List;
function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var pokemon;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://pokeapi.co/api/v2/pokedex/2/').then(function (res) {
              if (res.ok) {
                console.log(res);
                return res.json();
              }
            }).then(function (res) {
              return res.pokemon_entries;
            });

          case 2:
            pokemon = _context.sent;
            return _context.abrupt("return", {
              props: {
                pokemon: pokemon
              } // will be passed to the page component as props

            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwicG9rZW1vbl9lbnRyaWVzIiwicG9rZW1vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxPQUF1QjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsS0FBN0IsRUFEb0MsQ0FFcEM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FERixDQURGO0FBZ0JEO0tBbkN1QkQsSTtBQXFDakIsU0FBZUksY0FBdEI7QUFBQTtBQUFBOzs7cU1BQU8saUJBQThCQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQkMsS0FBSyxDQUFDLHNDQUFELENBQUwsQ0FDakJDLElBRGlCLENBQ1osVUFBQUMsR0FBRyxFQUFJO0FBQ1gsa0JBQUdBLEdBQUcsQ0FBQ0MsRUFBUCxFQUFXO0FBQ1RQLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBLHVCQUFPQSxHQUFHLENBQUNFLElBQUosRUFBUDtBQUNEO0FBQ0YsYUFOaUIsRUFPakJILElBUGlCLENBT1osVUFBQUMsR0FBRyxFQUFJO0FBQ1gscUJBQU9BLEdBQUcsQ0FBQ0csZUFBWDtBQUNELGFBVGlCLENBRGpCOztBQUFBO0FBQ0NDLG1CQUREO0FBQUEsNkNBV0U7QUFDTFgsbUJBQUssRUFBRTtBQUFDVyx1QkFBTyxFQUFQQTtBQUFELGVBREYsQ0FDYTs7QUFEYixhQVhGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmZhMjQ0YTFhYWU0YmM4MDBkNWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3Qoe3Byb3BzfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiTGlzdCAtPiBwcm9wc1wiLCBwcm9wcylcclxuICAvLyBjb25zdCBbcG9rZW1vbiwgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMi8nKVxyXG4gIC8vICAgICAudGhlbihyZXMgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIkxpc3QgLT4gMXJlc1wiLCByZXMpXHJcbiAgLy8gICAgICAgaWYocmVzLm9rKSB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgLy8gICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4ocmVzID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJMaXN0IC0+IDJyZXNcIiwgcmVzKVxyXG4gIC8vICAgICAgIHNldFBva2Vtb24ocmVzLnBva2Vtb25fZW50cmllcylcclxuICAvLyAgICAgfSlcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHPDsyB0ZXN0YW5kb1xyXG4gICAgICA8dWw+XHJcbiAgICAgICAgey8qIHtwb2tlbW9uLm1hcCggZSA9PiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIHtlLnBva2Vtb25fc3BlY2llcy5uYW1lfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX0gKi99XHJcblxyXG4gICAgICA8L3VsPiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYocmVzLm9rKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLnBva2Vtb25fZW50cmllc1xyXG4gICAgICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3Bva2Vtb259LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=