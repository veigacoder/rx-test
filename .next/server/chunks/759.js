"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kk": () => (/* binding */ ActionButton),
/* harmony export */   "PZ": () => (/* binding */ CloseButton),
/* harmony export */   "nt": () => (/* binding */ CheckButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ActionButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
height: auto;
outline: none;
border: none;
display: flex;
width: fit-content;
border-radius: 8px;
justify-content: center;
text-align: center;
align-items: center;
font-weight: 400;
font-size: 5rem;
padding: .7rem;
color: #28D634;
text-decoration: none;
cursor: pointer;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #28D634;
  color: #1C1C1C;
}
`;
const CloseButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
border-radius: 8px;
cursor: pointer;
color: #FA3434;
width: max-content;
height: max-content;
display:flex;
justify-content: center;
font-size: 64px;
align-items: center;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #FA3434;
  color: #fff;
}
`;
const CheckButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
border-radius: 8px;
cursor: pointer;
color: #28D634;
width: max-content;
height: max-content;
display:flex;
justify-content: center;
font-size: 64px;
align-items: center;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #28D634;
  color: #fff;
}
`;


/***/ }),

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zb": () => (/* binding */ Card),
/* harmony export */   "lS": () => (/* binding */ CardRow),
/* harmony export */   "Ol": () => (/* binding */ CardHeader)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Card = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
font-family: 'Lato', sans-serif;
position: absolute;
width: 40%;
height: 80%;
padding: 2rem;
outline-offset: -8px;
background-color: #F0F0F0;
border-radius: 8px;
line-height: 48px;
font-size: 3rem;
display: flex;
outline: 4px double #CBCBCB;
flex-direction: column;
justify-content: space-between;
`;
const CardRow = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
width: 100%;
height: max-content;
display: flex;
justify-content: center;
align-items: center;
&+&{
  margin-top: 4rem;
}
`;
const CardHeader = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
height: max-content;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-weight: 800;
color: #000;
text-align: center;
`;


/***/ }),

/***/ 772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ MainRow)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainRow = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
display: flex;
min-height: max-content;
justify-content: center;
align-items: center;
`;


/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Main = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
min-height: 100%;
min-width: 100%;
position: absolute;
background-color: #3C3C3C;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
`;


/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u_": () => (/* binding */ Modal),
/* harmony export */   "hz": () => (/* binding */ ModalContent),
/* harmony export */   "fe": () => (/* binding */ ModalBody),
/* harmony export */   "mz": () => (/* binding */ ModalFooter),
/* harmony export */   "xB": () => (/* binding */ ModalHeader),
/* harmony export */   "SP": () => (/* binding */ ModalInput),
/* harmony export */   "I1": () => (/* binding */ ModalSpan)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Modal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs((props)=>({
        show: props.show
    })
)`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: ${(props)=>props.show
};
align-items: center;
justify-content: center;
background-color: #00000033;
`;
const ModalContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
width: 70%;
background-color: #fff;
border-radius: 8px;

`;
const ModalBody = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
padding: 10px;
width: 100%;
min-width: max-content;
display: flex;
justify-content: center;
align-items: center;
`;
const ModalFooter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const ModalHeader = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 24px;
font-weight: 800;
`;
const ModalInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
height: max-content;
outline: none;
border: none;
display: flex;
width: 50%;
border-radius: 50px;
justify-content: center;
text-align: center;
align-items: center;
font-weight: 400;
font-size: 34px;
color: #000;
background-color: #8C8C8C;
padding: 1rem;
text-decoration: none;
font-family: 'Lato', sans-serif;
`;
const ModalSpan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
font-size: 14px;
font-family: 'Lato', sans-serif;
`;


/***/ })

};
;