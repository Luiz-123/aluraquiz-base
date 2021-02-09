module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/quiz.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: bg, title, description, questions, external, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://p4.wallpaperbetter.com/wallpaper/832/409/112/nature-landscape-himalayas-mountains-wallpaper-preview.jpg\",\"title\":\"Quiz - O Universo\",\"description\":\"Teste os seus conhecimentos sobre o Universo\",\"questions\":[{\"image\":\"https://hypescience.com/wp-content/uploads/2016/03/gifs-do-espaco-4.gif\",\"title\":\"A estrela mais próxima do Sol é ?\",\"description\":\"Essa é pra aquecer\",\"answer\":3,\"alternatives\":[\"Cruzeiro do Sul\",\"Vênus\",\"Antares\",\"Centauri\"]},{\"image\":\"https://media1.giphy.com/media/ZLdy2L5W62WGs/giphy.gif\",\"title\":\"Qual Lua pertence a Netuno?\",\"description\":\"No mundo da Lua\",\"answer\":1,\"alternatives\":[\"Titânia\",\"Tritão\",\"Encélado\",\"Ganímedes\"]},{\"image\":\"https://img.ibxk.com.br/2013/2/materias/7802154881911202.gif\",\"title\":\"Oríon é definida como...?\",\"description\":\"O mito\",\"answer\":2,\"alternatives\":[\"Planeta\",\"Cometa\",\"Constelação\",\"Estrela\"]}],\"external\":[\"https://aluraquiz-css.omariosouto.vercel.app/\",\"https://aluraquiz-devsoutinho.omariosouto.vercel.app/\"],\"theme\":{\"colors\":{\"primary\":\"#800080\",\"secondary\":\"#29b6f6\",\"third\":\"#ffffff\",\"mainBg\":\"#ff784e\",\"contrastText\":\"#FFFFFF\",\"wrong\":\"#FF5722\",\"success\":\"#4CAF50\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/AlternativesForm */ "./src/components/AlternativesForm/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
var _jsxFileName = "C:\\imersao-react\\aluraquiz-base\\pages\\quiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import QuizLogo from '../src/components/QuizLogo';






function ResultWidget({
  results
}) {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Tela de Resultado:"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Voc\xEA acertou", ' ', results.filter(x => x).length, ' ', "perguntas"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, results.map((result, index) => __jsx("li", {
    key: `result__${result}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "#", index + 1, ' ', "Resultado:", result === true ? 'Acertou' : 'Errou')))));
}

function LoadingWidget() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Carregando..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "[Desafio do Loading]"));
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult
}) {
  const [selectedAlternative, setSelectedAlternative] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, `Pergunta ${questionIndex + 1} de ${totalQuestions}`)), __jsx("img", {
    alt: "Descri\xE7\xE3o",
    style: {
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    src: question.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, question.description), __jsx(_src_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: infosDoEvento => {
      infosDoEvento.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(() => {
        addResult(isCorrect);
        onSubmit();
        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
      }, 3 * 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, question.alternatives.map((alternative, alternativeIndex) => {
    const alternativeId = `alternative__${alternativeIndex}`;
    const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
    const isSelected = selectedAlternative === alternativeIndex;
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
      as: "label",
      key: alternativeId,
      htmlFor: alternativeId,
      "data-selected": isSelected,
      "data-status": isQuestionSubmited && alternativeStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx("input", {
      style: {
        display: 'none'
      },
      id: alternativeId,
      name: questionId,
      onChange: () => setSelectedAlternative(alternativeIndex),
      type: "radio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "Confirmar"), isQuestionSubmited && isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 47
    }
  }, "Voc\xEA acertou!"), isQuestionSubmited && !isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 48
    }
  }, "Voc\xEA errou!"))));
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};
function QuizPage() {
  const [screenState, setScreenState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(screenStates.LOADING);
  const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  const [currentQuestion, setCurrentQuestion] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const questionIndex = currentQuestion;
  const question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex];

  function addResult(result) {
    // results.push(result);
    setResults([...results, result]);
  } // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000); // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    onSubmit: handleSubmitQuiz,
    addResult: addResult,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 50
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 49
    }
  })));
}

/***/ }),

/***/ "./src/components/AlternativesForm/index.js":
/*!**************************************************!*\
  !*** ./src/components/AlternativesForm/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AlternativesForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "AlternativesForm",
  componentId: "sc-10iihbl-0"
})(["label{&[data-selected=\"true\"]{background-color:", ";&[data-status=\"SUCCESS\"]{background-color:", ";}&[data-status=\"ERROR\"]{background-color:", ";}}&:focus{opacity:1;}}button{margin-top:24px;}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.success, ({
  theme
}) => theme.colors.wrong);
/* harmony default export */ __webpack_exports__["default"] = (AlternativesForm);

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1qc8929-0"
})(["background-color:", ";color:", ";border-radius:", ";border:0;width:100%;padding:10px 16px;font-weight:bold;font-size:14px;line-height:1;text-transform:uppercase;outline:0;transition:.3s;cursor:pointer;&:hover,&:focus{opacity:.5;}&:disabled{background-color:#979797;cursor:not-allowed;}"], ({
  theme
}) => theme.colors.secondary, ({
  theme
}) => theme.colors.contrastText, ({
  theme
}) => theme.borderRadius);
Button.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['submit', 'type', 'button']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/QuizBackground/index.js":
/*!************************************************!*\
  !*** ./src/components/QuizBackground/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/components/QuizBackground/index.js

const QuizBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizBackground",
  componentId: "ouh9z4-0"
})(["width:100%;background-size:cover;background-position:center;background-image:url(", ");background-color:", ";flex:1;@media screen and (max-width:500px){background-image:none;&:after{content:\"\";background-size:cover;background-position:center;background-image:linear-gradient(transparent,", "),url(", ");display:block;width:100%;height:210px;position:absolute;top:0;left:0;right:0;z-index:1;}*:first-child{position:relative;z-index:10;}}"], ({
  backgroundImage
}) => backgroundImage, ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.mainBg, ({
  backgroundImage
}) => backgroundImage);
/* harmony default export */ __webpack_exports__["default"] = (QuizBackground);

/***/ }),

/***/ "./src/components/QuizContainer/index.js":
/*!***********************************************!*\
  !*** ./src/components/QuizContainer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizContainer",
  componentId: "sc-18cw0zx-0"
})(["width:100%;max-width:350px;padding-top:45px;margin:auto 10%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizContainer);

/***/ }),

/***/ "./src/components/Widget/index.js":
/*!****************************************!*\
  !*** ./src/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Widget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget",
  componentId: "i6tyvd-0"
})(["margin-top:24px;margin-bottom:24px;border:1px solid ", ";background-color:", ";border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.mainBg);
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Widget__Header",
  componentId: "i6tyvd-1"
})(["display:flex;justify-content:flex-start;align-items:center;padding:18px 32px;color:black;background-color:", ";*{margin:0;}"], ({
  theme
}) => theme.colors.third);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget__Content",
  componentId: "i6tyvd-2"
})(["padding:24px 32px 32px 32px;& > *:first-child{margin-top:0;}ul{list-style:none;padding:0;}"]);
Widget.Topic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Widget__Topic",
  componentId: "i6tyvd-3"
})(["outline:0;text-decoration:none;color:", ";background-color:", ";padding:10px 15px;margin-bottom:8px;cursor:pointer;border-radius:", ";transition:.3s;display:block;&:hover,&:focus{opacity:.5;}"], ({
  theme
}) => theme.colors.contrastText, ({
  theme
}) => `${theme.colors.primary}70`, ({
  theme
}) => theme.borderRadius);
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcXVpei5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbHRlcm5hdGl2ZXNGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlJlc3VsdFdpZGdldCIsInJlc3VsdHMiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJMb2FkaW5nV2lkZ2V0IiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIm9uU3VibWl0IiwiYWRkUmVzdWx0Iiwic2VsZWN0ZWRBbHRlcm5hdGl2ZSIsInNldFNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiYWx0ZXJuYXRpdmVTdGF0dXMiLCJpc1NlbGVjdGVkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsImRiIiwicXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0UXVpeiIsIm5leHRRdWVzdGlvbiIsImJnIiwiQWx0ZXJuYXRpdmVzRm9ybSIsInN0eWxlZCIsImZvcm0iLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJzdWNjZXNzIiwid3JvbmciLCJCdXR0b24iLCJidXR0b24iLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJib3JkZXJSYWRpdXMiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiY2hpbGRyZW4iLCJub2RlIiwiUXVpekJhY2tncm91bmQiLCJkaXYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYWluQmciLCJRdWl6Q29udGFpbmVyIiwiV2lkZ2V0IiwiSGVhZGVyIiwiaGVhZGVyIiwidGhpcmQiLCJDb250ZW50IiwiVG9waWMiLCJhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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RCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1CLE1BSnZDLENBQVo7QUE4Q0FFLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQnpCLHdEQUFNLENBQUMwQixNQUF2QjtBQUFBO0FBQUE7QUFBQSxvSUFNdUIsQ0FBQztBQUFFeEI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhd0IsS0FObkQ7QUFhQUgsTUFBTSxDQUFDSSxPQUFQLEdBQWlCNUIsd0RBQU0sQ0FBQ29CLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBWUFJLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlN0Isd0RBQU0sQ0FBQzhCLENBQXRCO0FBQUE7QUFBQTtBQUFBLHdNQUdXLENBQUM7QUFBRTVCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYU8sWUFIdkMsRUFJc0IsQ0FBQztBQUFFUjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQVEsSUFKN0QsRUFRbUIsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxZQVJ4QztBQW9CZWEscUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3RkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcXVpei5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG4vL2ltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQWx0ZXJuYXRpdmVzRm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BbHRlcm5hdGl2ZXNGb3JtJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuZnVuY3Rpb24gUmVzdWx0V2lkZ2V0KHsgcmVzdWx0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQ+XHJcbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFRlbGEgZGUgUmVzdWx0YWRvOlxyXG4gICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBWb2PDqiBhY2VydG91XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgey8qIHtyZXN1bHRzLnJlZHVjZSgoc29tYXRvcmlhQXR1YWwsIHJlc3VsdEF0dWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWNlcnRvID0gcmVzdWx0QXR1YWwgPT09IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpc0FjZXJ0bykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvbWF0b3JpYUF0dWFsO1xyXG4gICAgICAgICAgfSwgMCl9ICovfVxyXG4gICAgICAgICAge3Jlc3VsdHMuZmlsdGVyKCh4KSA9PiB4KS5sZW5ndGh9XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgcGVyZ3VudGFzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtgcmVzdWx0X18ke3Jlc3VsdH1gfT5cclxuICAgICAgICAgICAgICAjXHJcbiAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIFJlc3VsdGFkbzpcclxuICAgICAgICAgICAgICB7cmVzdWx0ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/ICdBY2VydG91J1xyXG4gICAgICAgICAgICAgICAgOiAnRXJyb3UnfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdXaWRnZXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQ+XHJcbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIENhcnJlZ2FuZG8uLi5cclxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgIFtEZXNhZmlvIGRvIExvYWRpbmddXHJcbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCh7XHJcbiAgcXVlc3Rpb24sXHJcbiAgcXVlc3Rpb25JbmRleCxcclxuICB0b3RhbFF1ZXN0aW9ucyxcclxuICBvblN1Ym1pdCxcclxuICBhZGRSZXN1bHQsXHJcbn0pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRBbHRlcm5hdGl2ZSwgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcXVlc3Rpb25JZCA9IGBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWA7XHJcbiAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xyXG4gIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0PlxyXG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICB7LyogPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiAvPiAqL31cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3JjPXtxdWVzdGlvbi5pbWFnZX1cclxuICAgICAgLz5cclxuICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDxoMj5cclxuICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPEFsdGVybmF0aXZlc0Zvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldElzUXVlc3Rpb25TdWJtaXRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWRkUmVzdWx0KGlzQ29ycmVjdCk7XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfSwgMyAqIDEwMDApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLm1hcCgoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlU3RhdHVzID0gaXNDb3JyZWN0ID8gJ1NVQ0NFU1MnIDogJ0VSUk9SJztcclxuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IGFsdGVybmF0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xyXG4gICAgICAgICAgICAgICAgYXM9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2FsdGVybmF0aXZlSWR9XHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1zZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgey8qIDxwcmU+XHJcbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICA8L3ByZT4gKi99XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWhhc0FsdGVybmF0aXZlU2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiBpc0NvcnJlY3QgJiYgPHA+Vm9jw6ogYWNlcnRvdSE8L3A+fVxyXG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiAhaXNDb3JyZWN0ICYmIDxwPlZvY8OqIGVycm91ITwvcD59XHJcbiAgICAgICAgPC9BbHRlcm5hdGl2ZXNGb3JtPlxyXG4gICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gIFFVSVo6ICdRVUlaJyxcclxuICBMT0FESU5HOiAnTE9BRElORycsXHJcbiAgUkVTVUxUOiAnUkVTVUxUJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aDtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcclxuICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgLy8gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICBzZXRSZXN1bHRzKFtcclxuICAgICAgLi4ucmVzdWx0cyxcclxuICAgICAgcmVzdWx0LFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICAvLyBbUmVhY3QgY2hhbWEgZGU6IEVmZWl0b3MgfHwgRWZmZWN0c11cclxuICAvLyBSZWFjdC51c2VFZmZlY3RcclxuICAvLyBhdHVhbGl6YWRvID09PSB3aWxsVXBkYXRlXHJcbiAgLy8gbW9ycmUgPT09IHdpbGxVbm1vdW50XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZldGNoKCkgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlFVSVopO1xyXG4gICAgfSwgMSAqIDEwMDApO1xyXG4gIC8vIG5hc2NlID09PSBkaWRNb3VudFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcclxuICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5kZXggKyAxO1xyXG4gICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb25zKSB7XHJcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICB7Lyo8UXVpekxvZ28gLz4qL31cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5RVUlaICYmIChcclxuICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxyXG4gICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXg9e3F1ZXN0aW9uSW5kZXh9XHJcbiAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc31cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XHJcbiAgICAgICAgICAgIGFkZFJlc3VsdD17YWRkUmVzdWx0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5MT0FESU5HICYmIDxMb2FkaW5nV2lkZ2V0IC8+fVxyXG5cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPFJlc3VsdFdpZGdldCByZXN1bHRzPXtyZXN1bHRzfSAvPn1cclxuICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICApO1xyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBBbHRlcm5hdGl2ZXNGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgbGFiZWwge1xyXG4gICAgJltkYXRhLXNlbGVjdGVkPVwidHJ1ZVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBcclxuICAgICAgJltkYXRhLXN0YXR1cz1cIlNVQ0NFU1NcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnN1Y2Nlc3N9O1xyXG4gICAgICB9XHJcbiAgICAgICZbZGF0YS1zdGF0dXM9XCJFUlJPUlwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud3Jvbmd9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0gXHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsdGVybmF0aXZlc0Zvcm07IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnRyYXN0VGV4dH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJSYWRpdXN9O1xyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3V0bGluZTogMDtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbmA7XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Ym1pdCcsICd0eXBlJywgJ2J1dHRvbiddKS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsIi8vIHNyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kL2luZGV4LmpzXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUXVpekJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG4gIGZsZXg6IDE7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ30pLFxyXG4gICAgICAgIHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6QmFja2dyb3VuZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgLy9sZWZ0OjIyJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbjogYXV0byAxMCU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpekNvbnRhaW5lcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gc3R5bGVkLmRpdmBcclxuICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ307XHJcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgIGgxLCBoMiwgaDMge1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5we1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4vKmlucHV0e1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICBtYXJnaW46IDhweCAwO1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjNmQxYjdiO1xyXG4gICBib3JkZXItcmFkaXVzOiA4cHg7IFxyXG59Ki9cclxuXHJcbi8qYnV0dG9ue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQxYjdiOyBcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufSovXHJcblxyXG5gO1xyXG5cclxuV2lkZ2V0LkhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgcGFkZGluZzogMThweCAzMnB4O1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRoaXJkfTtcclxuICAgXHJcbiAgICp7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgfVxyXG5gO1xyXG5cclxuV2lkZ2V0LkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICBwYWRkaW5nOiAyNHB4IDMycHggMzJweCAzMnB4O1xyXG4gICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICB1bCB7XHJcbiAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICB9XHJcbiAgIFxyXG5gO1xyXG5cclxuV2lkZ2V0LlRvcGljID0gc3R5bGVkLmFgXHJcbiAgb3V0bGluZTogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnRyYXN0VGV4dH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5jb2xvcnMucHJpbWFyeX03MGB9O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyUmFkaXVzfTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==