webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons */ \"./components/Icons.js\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\nvar _jsxFileName = \"/Users/ozorku/Work/Projects/web/manage-repos/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  var handleSignin = function handleSignin() {\n    var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"].auth.GithubAuthProvider();\n    provider.addScope(\"repo\");\n    firebase_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"].auth().signInWithPopup(provider).then(function (result) {\n      // This gives you a GitHub Access Token.\n      var token = result.credential.accessToken; // The signed-in user info.\n\n      var user = result.user;\n    })[\"catch\"](function (error) {\n      // Handle Errors here.\n      var errorCode = error.code;\n      var errorMessage = error.message; // The email of the user's account used.\n\n      var email = error.email; // The firebase.auth.AuthCredential type that was used.\n\n      var credential = error.credential;\n\n      if (errorCode === \"auth/account-exists-with-different-credential\") {\n        alert(\"You have signed up with a different provider for that email.\"); // Handle linking here if your app allows it.\n      } else {\n        console.error(error);\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    display: \"flex\",\n    justifyContent: \"center\",\n    flexDir: \"column\",\n    alignItems: \"center\",\n    minH: \"100vh\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      justifyContent: \"center\",\n      flexDir: \"column\",\n      alignItems: \"center\",\n      flex: 1,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n          spacing: 20,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n            fontSize: \"160px\",\n            textAlign: \"center\",\n            lineHeight: \"170px\",\n            color: \"#000\",\n            children: \"Manage repos!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            background: \"brand.primary\",\n            color: \"white\",\n            fontWeight: \"400\",\n            paddingX: 5,\n            _hover: {\n              border: \"1px solid #000\",\n              background: \"white\",\n              color: \"#000\"\n            },\n            onClick: function onClick() {\n              return handleSignin();\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n              spacing: 3,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Icons__WEBPACK_IMPORTED_MODULE_3__[\"Github\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                children: \"Continue with Github\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      width: \"100%\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      borderTop: \"1px solid rgb(234, 234, 234)\",\n      paddingY: 5,\n      children: [\"Created by\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        target: \"_blank\",\n        href: \"https://github.com/ize-302\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \" Ize-302\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiaGFuZGxlU2lnbmluIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJhZGRTY29wZSIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJ0b2tlbiIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZW1haWwiLCJhbGVydCIsImNvbnNvbGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUMsUUFBUSxHQUFHLElBQUlDLG9EQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQWY7QUFDQUgsWUFBUSxDQUFDSSxRQUFULENBQWtCLE1BQWxCO0FBQ0FILHdEQUFRLENBQ0xDLElBREgsR0FFR0csZUFGSCxDQUVtQkwsUUFGbkIsRUFHR00sSUFISCxDQUdRLFVBQVVDLE1BQVYsRUFBa0I7QUFDdEI7QUFDQSxVQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQkMsV0FBOUIsQ0FGc0IsQ0FHdEI7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHSixNQUFNLENBQUNJLElBQWxCO0FBQ0QsS0FSSCxXQVNTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEI7QUFDQSxVQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBdEI7QUFDQSxVQUFJQyxZQUFZLEdBQUdILEtBQUssQ0FBQ0ksT0FBekIsQ0FIc0IsQ0FJdEI7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQWxCLENBTHNCLENBTXRCOztBQUNBLFVBQUlSLFVBQVUsR0FBR0csS0FBSyxDQUFDSCxVQUF2Qjs7QUFDQSxVQUFJSSxTQUFTLEtBQUssK0NBQWxCLEVBQW1FO0FBQ2pFSyxhQUFLLENBQUMsOERBQUQsQ0FBTCxDQURpRSxDQUVqRTtBQUNELE9BSEQsTUFHTztBQUNMQyxlQUFPLENBQUNQLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YsS0F2Qkg7QUF3QkQsR0EzQkQ7O0FBNkJBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxrQkFBYyxFQUFDLFFBRmpCO0FBR0UsV0FBTyxFQUFDLFFBSFY7QUFJRSxjQUFVLEVBQUMsUUFKYjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBQUEsNEJBUUUscUVBQUMsc0RBQUQ7QUFDRSxvQkFBYyxFQUFDLFFBRGpCO0FBRUUsYUFBTyxFQUFDLFFBRlY7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxVQUFJLEVBQUUsQ0FKUjtBQUFBLDZCQU1FLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFFLEVBQWpCO0FBQUEsa0NBRUUscUVBQUMseURBQUQ7QUFDRSxvQkFBUSxFQUFDLE9BRFg7QUFFRSxxQkFBUyxFQUFDLFFBRlo7QUFHRSxzQkFBVSxFQUFDLE9BSGI7QUFJRSxpQkFBSyxFQUFDLE1BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFVRSxxRUFBQyx3REFBRDtBQUNFLHNCQUFVLEVBQUMsZUFEYjtBQUVFLGlCQUFLLEVBQUMsT0FGUjtBQUdFLHNCQUFVLEVBQUMsS0FIYjtBQUlFLG9CQUFRLEVBQUUsQ0FKWjtBQUtFLGtCQUFNLEVBQUU7QUFDTlEsb0JBQU0sRUFBRSxnQkFERjtBQUVOQyx3QkFBVSxFQUFFLE9BRk47QUFHTkMsbUJBQUssRUFBRTtBQUhELGFBTFY7QUFVRSxtQkFBTyxFQUFFO0FBQUEscUJBQU12QixZQUFZLEVBQWxCO0FBQUEsYUFWWDtBQUFBLG1DQVlFLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBRSxDQUFqQjtBQUFBLHNDQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUE4Q0UscUVBQUMsc0RBQUQ7QUFDRSxXQUFLLEVBQUMsTUFEUjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxlQUFTLEVBQUMsOEJBSlo7QUFLRSxjQUFRLEVBQUUsQ0FMWjtBQUFBLDRDQVFFO0FBQUcsY0FBTSxFQUFDLFFBQVY7QUFBbUIsWUFBSSxFQUFDLDRCQUF4QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZERDtLQTNGdUJELEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xuaW1wb3J0IHsgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyBIU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUZXh0LCBGbGV4LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyBHaXRodWIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc1wiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhhbmRsZVNpZ25pbiA9ICgpID0+IHtcbiAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIoKTtcbiAgICBwcm92aWRlci5hZGRTY29wZShcInJlcG9cIik7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR2l0SHViIEFjY2VzcyBUb2tlbi5cbiAgICAgICAgdmFyIHRva2VuID0gcmVzdWx0LmNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XG4gICAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxuICAgICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxuICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cbiAgICAgICAgdmFyIGVtYWlsID0gZXJyb3IuZW1haWw7XG4gICAgICAgIC8vIFRoZSBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cbiAgICAgICAgdmFyIGNyZWRlbnRpYWwgPSBlcnJvci5jcmVkZW50aWFsO1xuICAgICAgICBpZiAoZXJyb3JDb2RlID09PSBcImF1dGgvYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbFwiKSB7XG4gICAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBzaWduZWQgdXAgd2l0aCBhIGRpZmZlcmVudCBwcm92aWRlciBmb3IgdGhhdCBlbWFpbC5cIik7XG4gICAgICAgICAgLy8gSGFuZGxlIGxpbmtpbmcgaGVyZSBpZiB5b3VyIGFwcCBhbGxvd3MgaXQuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgPlxuICAgICAgey8qIG1haW4gKi99XG4gICAgICA8RmxleFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgZmxleD17MX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezIwfT5cbiAgICAgICAgICAgIHsvKiA8SGVhZGluZyBmb250U2l6ZT1cIjEwMHB4XCI+8J+agDwvSGVhZGluZz4gKi99XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2MHB4XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjE3MHB4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWFuYWdlIHJlcG9zIVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYnJhbmQucHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgICAgcGFkZGluZ1g9ezV9XG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25pbigpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxHaXRodWIgLz5cbiAgICAgICAgICAgICAgICA8VGV4dD5Db250aW51ZSB3aXRoIEdpdGh1YjwvVGV4dD5cbiAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0ZsZXg+XG4gICAgICB7LyogZm9vdGVyICovfVxuICAgICAgPEZsZXhcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgYm9yZGVyVG9wPVwiMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KVwiXG4gICAgICAgIHBhZGRpbmdZPXs1fVxuICAgICAgPlxuICAgICAgICBDcmVhdGVkIGJ5XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaXplLTMwMlwiPlxuICAgICAgICAgIDxiPiBJemUtMzAyPC9iPlxuICAgICAgICA8L2E+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})