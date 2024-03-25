"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/test.jsx":
/*!************************************!*\
  !*** ./src/components/ui/test.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s();\n    const MAXIMUM_WIDTH = 120;\n    const MAXIMUM_HEIGHT = 120;\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    const changeText = (event)=>{\n        let iterations = 0;\n        const interval = setInterval(()=>{\n            event.target.innerText = event.target.innerText.split(\"\\n\").map((letter, index)=>{\n                if (index < iterations) return event.target.dataset.value[index];\n                return letters[Math.floor(Math.random() * 26)];\n            }).join(\"\");\n            if (iterations >= event.target.dataset.value.length) clearInterval(interval);\n            iterations += 1 / 4;\n        }, 35);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AsciiArtConverter, \"aRxMYzI5BSjQhwGNcj4DJkpyZtA=\");\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTdCO2dCQUNaLElBQUlBLFFBQVFzQixZQUFZLE9BQU9ELE1BQU1JLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLENBQUMvQixNQUFNO2dCQUNoRSxPQUFPbUIsT0FBTyxDQUFDOUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLMkMsTUFBTSxLQUFLLElBQUk7WUFDaEQsR0FDQ0MsSUFBSSxDQUFDO1lBQ1IsSUFBSVgsY0FBY0QsTUFBTUksTUFBTSxDQUFDSyxPQUFPLENBQUNDLEtBQUssQ0FBQ2pELE1BQU0sRUFDakRvRCxjQUFjWDtZQUNoQkQsY0FBYyxJQUFJO1FBQ3BCLEdBQUc7SUFDTDtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3ZCO2dCQUFPd0IsS0FBS2xGO2dCQUFXVyxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOzs7Ozs7MEJBQ2pELDhEQUFDSjtnQkFBSTJFLGFBQWFsQjtnQkFBWWdCLFdBQVU7Z0JBQWFHLGNBQVluRjswQkFBV0E7Ozs7Ozs7Ozs7OztBQUdsRjtHQS9ITUw7S0FBQUE7QUFpSU4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS90ZXN0LmpzeD8yN2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBc2NpaUFydENvbnZlcnRlciA9ICh7IGltYWdlUGF0aCB9KSA9PiB7XHJcbiAgY29uc3QgTUFYSU1VTV9XSURUSCA9IDEyMDtcclxuICBjb25zdCBNQVhJTVVNX0hFSUdIVCA9IDEyMDtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2FzY2lpQXJ0LCBzZXRBc2NpaUFydF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHRvR3JheVNjYWxlID0gKHIsIGcsIGIpID0+IDAuMjEgKiByICsgMC43MiAqIGcgKyAwLjA3ICogYjsgIFxyXG5cclxuICBjb25zdCBnZXRGb250UmF0aW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIHByZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICBwcmUudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZSk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHByZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocHJlKTtcclxuICAgIHJldHVybiBoZWlnaHQgLyB3aWR0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb252ZXJ0VG9HcmF5U2NhbGVzID0gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgZ3JheVNjYWxlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgY29uc3QgciA9IGltYWdlRGF0YS5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBnID0gaW1hZ2VEYXRhLmRhdGFbaSArIDFdO1xyXG4gICAgICBjb25zdCBiID0gaW1hZ2VEYXRhLmRhdGFbaSArIDJdO1xyXG4gICAgICBjb25zdCBncmF5U2NhbGUgPSB0b0dyYXlTY2FsZShyLCBnLCBiKTtcclxuICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPSBpbWFnZURhdGEuZGF0YVtpICsgMV0gPSBpbWFnZURhdGEuZGF0YVtpICsgMl0gPSBncmF5U2NhbGU7XHJcbiAgICAgIGdyYXlTY2FsZXMucHVzaChncmF5U2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICByZXR1cm4gZ3JheVNjYWxlcztcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFtcERpbWVuc2lvbnMgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgY29uc3QgcmF0aW8gPSBnZXRGb250UmF0aW8oKTtcclxuICAgIGNvbnN0IHJlY3RpZmllZFdpZHRoID0gTWF0aC5mbG9vcihyYXRpbyAqIHdpZHRoKTtcclxuICAgIGlmIChoZWlnaHQgPiBNQVhJTVVNX0hFSUdIVCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkV2lkdGggPSBNYXRoLmZsb29yKHJlY3RpZmllZFdpZHRoICogTUFYSU1VTV9IRUlHSFQgLyBoZWlnaHQpO1xyXG4gICAgICByZXR1cm4gW3JlZHVjZWRXaWR0aCwgTUFYSU1VTV9IRUlHSFRdO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpZHRoID4gTUFYSU1VTV9XSURUSCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBNQVhJTVVNX1dJRFRIIC8gcmVjdGlmaWVkV2lkdGgpO1xyXG4gICAgICByZXR1cm4gW01BWElNVU1fV0lEVEgsIHJlZHVjZWRIZWlnaHRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyZWN0aWZpZWRXaWR0aCwgaGVpZ2h0XTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUgPSAoZ3JheVNjYWxlKSA9PiB7XHJcbiAgICBjb25zdCBncmF5UmFtcCA9ICckQEIlOCZXTSMqb2Foa2JkcHF3bVpPMFFMQ0pVWVh6Y3Z1bnhyamZ0L3woKTF7fVtdPy1fK348PmkhbEk7OixcIl5gXFwnLiAnO1xyXG4gICAgY29uc3QgcmFtcExlbmd0aCA9IGdyYXlSYW1wLmxlbmd0aDtcclxuICAgIHJldHVybiBncmF5UmFtcFtNYXRoLmNlaWwoKHJhbXBMZW5ndGggLSAxKSAqIGdyYXlTY2FsZSAvIDI1NSldO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBkcmF3QXNjaWkgPSAoZ3JheVNjYWxlcywgd2lkdGgpID0+IHtcclxuICAgIGNvbnN0IGFzY2lpSW1hZ2UgPSBncmF5U2NhbGVzLnJlZHVjZSgoYXNjaWlJbWFnZSwgZ3JheVNjYWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgbmV4dENoYXJzID0gZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlKGdyYXlTY2FsZSk7XHJcbiAgICAgIGlmICgoaW5kZXggKyAxKSAlIHdpZHRoID09PSAwKSB7XHJcbiAgICAgICAgbmV4dENoYXJzICs9ICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhc2NpaUltYWdlICsgbmV4dENoYXJzO1xyXG4gICAgfSwgJycpO1xyXG5cclxuICAgIHNldEFzY2lpQXJ0KGFzY2lpSW1hZ2UpO1xyXG4gIH07XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpbWFnZVBhdGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsb2FkSW1hZ2UgPSAoc3JjKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHJlamVjdChlKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcm9jZXNzSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgbG9hZEltYWdlKGltYWdlUGF0aCk7XHJcbiAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gY2xhbXBEaW1lbnNpb25zKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBncmF5U2NhbGVzID0gY29udmVydFRvR3JheVNjYWxlcyhjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZHJhd0FzY2lpKGdyYXlTY2FsZXMsIHdpZHRoKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGltYWdlOicsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByb2Nlc3NJbWFnZSgpO1xyXG4gIH0sIFtpbWFnZVBhdGhdKTsgLy8gRWZmZWN0IHJ1bnMgd2hlbmV2ZXIgaW1hZ2VQYXRoIGNoYW5nZXNcclxuXHJcblxyXG4gIGNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIGNvbnN0IGNoYW5nZVRleHQgPSAoZXZlbnQpID0+IHtcclxuICAgIGxldCBpdGVyYXRpb25zID0gMDtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dFxyXG4gICAgICAgIC5zcGxpdCgnXFxuJylcclxuICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPCBpdGVyYXRpb25zKSByZXR1cm4gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWVbaW5kZXhdO1xyXG4gICAgICAgICAgcmV0dXJuIGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpXTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWUubGVuZ3RoKVxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICBpdGVyYXRpb25zICs9IDEgLyA0O1xyXG4gICAgfSwgMzUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1bM3B4XSc+XHJcbiAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2NhbnZhcz5cclxuICAgICAgPHByZSBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH0gY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0JyBkYXRhLXZhbHVlPXthc2NpaUFydH0+e2FzY2lpQXJ0fTwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzY2lpQXJ0Q29udmVydGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFzY2lpQXJ0Q29udmVydGVyIiwiaW1hZ2VQYXRoIiwiTUFYSU1VTV9XSURUSCIsIk1BWElNVU1fSEVJR0hUIiwiY2FudmFzUmVmIiwiYXNjaWlBcnQiLCJzZXRBc2NpaUFydCIsInRvR3JheVNjYWxlIiwiciIsImciLCJiIiwiZ2V0Rm9udFJhdGlvIiwicHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlbW92ZUNoaWxkIiwiY29udmVydFRvR3JheVNjYWxlcyIsImNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJncmF5U2NhbGVzIiwiaSIsImRhdGEiLCJsZW5ndGgiLCJncmF5U2NhbGUiLCJwdXNoIiwicHV0SW1hZ2VEYXRhIiwiY2xhbXBEaW1lbnNpb25zIiwicmF0aW8iLCJyZWN0aWZpZWRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInJlZHVjZWRXaWR0aCIsInJlZHVjZWRIZWlnaHQiLCJnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUiLCJncmF5UmFtcCIsInJhbXBMZW5ndGgiLCJjZWlsIiwiZHJhd0FzY2lpIiwiYXNjaWlJbWFnZSIsInJlZHVjZSIsImluZGV4IiwibmV4dENoYXJzIiwibG9hZEltYWdlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJwcm9jZXNzSW1hZ2UiLCJjYW52YXMiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJlcnJvciIsImxldHRlcnMiLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJpdGVyYXRpb25zIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRhcmdldCIsImlubmVyVGV4dCIsInNwbGl0IiwibWFwIiwibGV0dGVyIiwiZGF0YXNldCIsInZhbHVlIiwicmFuZG9tIiwiam9pbiIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbk1vdXNlT3ZlciIsImRhdGEtdmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/test.jsx\n"));

/***/ })

});