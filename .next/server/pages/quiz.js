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
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/AlternativesForm */ "./src/components/AlternativesForm/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
var _jsxFileName = "C:\\imersao-react\\aluraquiz\\pages\\quiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









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
  }, question.description), __jsx(_src_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
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

/***/ "./src/components/QuizLogo/index.js":
/*!******************************************!*\
  !*** ./src/components/QuizLogo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\imersao-react\\aluraquiz\\src\\components\\QuizLogo\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Logo({
  className
}) {
  return __jsx("svg", {
    className: className,
    width: "135",
    height: "67",
    viewBox: "0 0 135 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("mask", {
    id: "path-1-outside-1",
    maskUnits: "userSpaceOnUse",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("rect", {
    fill: "white",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    stroke: "#252B51",
    strokeWidth: "4",
    mask: "url(#path-1-outside-1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M86.8469 62.368C84.8917 63.0142 83.211 62.938 81.805 62.1393C80.3989 61.3406 79.3095 59.9506 78.5365 57.9694C77.8934 56.3209 77.6895 54.6809 77.9248 53.0493C78.1601 51.4178 78.8115 49.9732 79.879 48.7154C80.9406 47.4425 82.334 46.521 84.0592 45.9507C85.7351 45.3968 87.2807 45.4835 88.696 46.2109C90.1219 46.9177 91.2419 48.3146 92.0561 50.4017C92.4928 51.5209 92.7099 52.6955 92.7075 53.9256C92.7051 55.1558 92.4778 56.3322 92.0254 57.4549C93.894 58.2032 94.8579 58.6529 94.9169 58.8042C95.0703 59.1974 95.0598 59.5509 94.8854 59.8646C94.7333 60.1881 94.4273 60.4258 93.9672 60.5779C93.6222 60.692 92.5301 60.4127 90.6909 59.74C89.6892 60.976 88.4079 61.852 86.8469 62.368ZM86.3954 60.2122C87.102 59.9787 87.7105 59.4702 88.221 58.6868C87.4993 58.3107 86.7651 57.8789 86.0184 57.3915C85.2882 56.8987 84.8877 56.5616 84.8169 56.3801C84.6576 55.9717 84.6306 55.6648 84.7359 55.4592C84.8518 55.2331 85.1068 55.0549 85.5012 54.9246C85.5505 54.9083 85.9935 55.0692 86.8303 55.4073C87.1653 55.5527 87.9239 55.8568 89.1062 56.3197C89.2619 55.4828 89.2926 54.6105 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5411 50.9489C88.1281 49.8902 87.5871 49.1215 86.9179 48.6426C86.2653 48.1583 85.4789 48.0682 84.5587 48.3723C83.5072 48.7199 82.7122 49.3924 82.1739 50.3899C81.6356 51.3874 81.3576 52.5293 81.3401 53.8157C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7314 83.14 59.2137C83.6541 59.6756 84.206 59.9968 84.7959 60.1775C85.3858 60.3581 85.9189 60.3697 86.3954 60.2122Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.647 55.5391C105.682 55.8179 105.602 56.0407 105.407 56.2075C105.219 56.3894 104.935 56.5428 104.557 56.6677C103.424 57.0424 102.765 56.9954 102.583 56.5265L102.394 55.6156C102.058 56.0853 101.64 56.5821 101.139 57.1061C100.639 57.63 100.183 57.9599 99.7723 58.0957C97.3405 58.8995 95.8385 58.5678 95.2662 57.1008C94.2926 54.6054 94.0498 51.6294 94.5377 48.1729C94.5992 47.7599 94.7072 47.4424 94.8618 47.2206C95.0328 46.9933 95.3894 46.7901 95.9316 46.6108C96.5067 46.4208 96.9634 46.3552 97.3018 46.4141C97.6506 46.4524 97.8634 46.5699 97.9401 46.7665C97.9578 46.8119 97.9205 46.9779 97.8283 47.2645C97.7243 47.5208 97.6449 47.769 97.5901 48.0091C96.972 50.894 97.1025 53.4632 97.9816 55.7167C98.0583 55.9133 98.2083 56.0601 98.4316 56.157C98.655 56.2539 98.8323 56.2807 98.9638 56.2372C99.3253 56.1177 99.8712 55.758 100.602 55.158C101.349 54.5525 101.887 54.0074 102.218 53.5226L101.994 51.5222C101.73 49.1337 101.574 47.6655 101.527 47.1175C101.472 46.4528 101.51 45.8853 101.642 45.4149C101.784 44.9239 102.168 44.5752 102.792 44.3688C103.663 44.081 104.193 44.179 104.382 44.663C104.411 44.7386 104.425 44.8451 104.423 44.9824C104.431 45.0991 104.442 45.198 104.455 45.279L104.903 49.28C105.253 52.4595 105.501 54.5459 105.647 55.5391Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.645 40.4037C105.462 39.9349 105.456 39.4674 105.627 39.0012C105.814 38.5296 106.195 38.1988 106.77 38.0087C107.378 37.8078 107.971 37.8079 108.551 38.0091C109.146 38.2049 109.53 38.5221 109.701 38.9607C109.872 39.3992 109.79 39.8534 109.453 40.323C109.117 40.7927 108.645 41.128 108.037 41.329C107.446 41.5245 106.941 41.5377 106.522 41.3687C106.115 41.1791 105.822 40.8574 105.645 40.4037ZM107.968 53.133C107.862 52.8607 107.531 49.8968 106.975 44.2411L106.5 43.4506C106.435 43.2842 106.492 43.1204 106.67 42.959C106.848 42.7977 107.241 42.6166 107.849 42.4156C108.326 42.2581 108.718 42.265 109.026 42.4364C109.35 42.6024 109.577 42.8517 109.707 43.1844C109.743 43.2752 109.773 43.4016 109.8 43.5637L110.792 52.4556L111.268 53.2461C111.332 53.4124 111.276 53.5763 111.098 53.7376C110.919 53.899 110.526 54.0801 109.918 54.2811C109.376 54.4603 108.967 54.4334 108.69 54.2003C108.408 53.9522 108.167 53.5964 107.968 53.133Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M122.195 49.9925C118.16 51.8214 115.862 52.8715 115.3 53.1426C114.715 53.404 114.415 53.5375 114.399 53.5429C114.103 53.6407 113.825 53.6898 113.566 53.6902C113.29 53.696 113.112 53.6439 113.032 53.5337C112.969 53.469 112.85 53.3546 112.675 53.1906C112.5 53.0265 112.386 52.8765 112.333 52.7404C112.279 52.6042 112.279 52.4848 112.332 52.382C112.379 52.2641 112.533 52.1363 112.794 51.9986C113.04 51.8664 113.211 51.7839 113.31 51.7514C113.804 50.7345 114.443 49.3536 115.228 47.6088C116.327 45.1966 117.18 43.4122 117.786 42.2557L113.049 44.3079C112.54 44.4762 112.194 44.326 112.011 43.8571C111.864 43.4791 111.864 43.0521 112.012 42.5762C112.053 42.4432 112.655 42.1077 113.818 41.5697C114.98 41.0317 116.256 40.4735 117.644 39.8951C119.043 39.2962 119.939 38.9316 120.334 38.8013C120.958 38.5949 121.4 38.8244 121.66 39.4899C121.736 39.6865 121.736 39.9 121.659 40.1303C121.576 40.3456 121.445 40.5339 121.267 40.6952L120.893 41.3055C120.32 42.4511 119.633 43.899 118.832 45.6493L116.786 49.9623C119.264 48.8017 120.864 48.1019 121.587 47.863C122.212 47.6566 122.654 47.8861 122.913 48.5516C123.014 48.8087 122.982 49.0838 122.818 49.377C122.665 49.6497 122.457 49.8548 122.195 49.9925Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M127.144 43.2346C127.205 43.6755 127.15 44.0096 126.979 44.2369C126.824 44.4587 126.476 44.6593 125.933 44.8385C125.013 45.1426 124.438 44.9998 124.208 44.41C124.061 44.0319 123.926 43.4019 123.805 42.52C123.694 41.6176 123.567 40.4131 123.424 38.9065C123.23 36.8876 123.039 35.2092 122.851 33.8713C122.726 33.0759 123.165 32.5126 124.167 32.1813C124.66 32.0184 125.071 31.9767 125.399 32.0561C125.726 32.1356 125.913 32.3299 125.96 32.6389L127.144 43.2346ZM126.495 49.0581C126.067 49.1993 125.642 49.1779 125.217 48.9937C124.787 48.7944 124.495 48.4982 124.342 48.1049C124.189 47.7117 124.244 47.2836 124.509 46.8205C124.767 46.3423 125.184 46.0082 125.759 45.8181C126.269 45.6498 126.74 45.622 127.174 45.7348C127.601 45.8325 127.904 46.1082 128.081 46.5619C128.263 47.0307 128.185 47.5178 127.844 48.0232C127.519 48.5231 127.07 48.8681 126.495 49.0581Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.918 48.6425C86.2653 48.1582 85.4789 48.0681 84.5588 48.3723C83.5072 48.7199 82.7123 49.3924 82.1739 50.3899C81.6356 51.3874 81.3577 52.5293 81.3401 53.8156C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7313 83.14 59.2137C83.6541 59.6755 84.2061 59.9968 84.7959 60.1774C85.3858 60.3581 85.919 60.3696 86.3955 60.2121C86.5752 60.1528 86.7485 60.0756 86.9155 59.9806C87.4052 59.7022 87.8404 59.2709 88.2211 58.6867C87.8894 58.5139 87.5552 58.3294 87.2183 58.1331C86.822 57.9021 86.422 57.6549 86.0185 57.3915C85.2883 56.8987 84.8878 56.5615 84.817 56.38C84.6576 55.9717 84.6306 55.6647 84.736 55.4592C84.8518 55.2331 85.1069 55.0549 85.5012 54.9245C85.5505 54.9082 85.9935 55.0691 86.8303 55.4072C86.9456 55.4572 87.1111 55.5261 87.3267 55.6137C87.7377 55.7808 88.3308 56.0161 89.1062 56.3197C89.2156 55.7319 89.2633 55.1267 89.2492 54.504C89.2433 54.24 89.2263 53.9728 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5412 50.9488C88.1282 49.8902 87.5871 49.1214 86.918 48.6425ZM76.0706 52.8227C76.348 50.8995 77.1239 49.167 78.4002 47.6611C79.691 46.1156 81.3851 45.0052 83.427 44.3303C85.551 43.6282 87.6618 43.7115 89.5957 44.7013C90.9023 45.3523 91.9307 46.3716 92.736 47.6463C92.8284 47.1947 92.9905 46.717 93.2874 46.2909L93.3053 46.2653L93.3242 46.2402C93.8433 45.5503 94.6764 45.1963 95.2995 44.9904C95.9611 44.7717 96.7751 44.5871 97.5859 44.7119C98.1981 44.7906 99.2006 45.087 99.6492 46.0635C99.6756 45.6926 99.7337 45.3314 99.8309 44.9848L99.8348 44.9709C100.169 43.8195 101.091 43.1018 102.16 42.7484C102.715 42.5649 103.452 42.3979 104.211 42.5385C104.387 42.5711 104.554 42.6182 104.712 42.6785C104.751 42.5709 104.797 42.4684 104.85 42.3714C104.406 41.9859 104.088 41.5076 103.885 40.9855C103.561 40.1566 103.547 39.2904 103.854 38.4516L103.862 38.4311L103.87 38.4108C104.271 37.3978 105.111 36.7276 106.138 36.3882C107.139 36.0572 108.186 36.046 109.195 36.3927C110.169 36.7161 111.057 37.3426 111.461 38.3787C111.817 39.2888 111.663 40.1703 111.24 40.9195C111.335 40.86 111.432 40.804 111.525 40.7521C111.889 40.549 112.382 40.3067 112.978 40.0313C114.164 39.4824 115.46 38.9154 116.864 38.3302C118.234 37.7438 119.211 37.3428 119.701 37.1808C120.176 37.024 120.759 36.9409 121.359 37.0696C121.237 35.9352 121.116 34.9468 120.998 34.1027C120.882 33.3446 121.024 32.5452 121.567 31.8491C122.081 31.1881 122.819 30.7975 123.535 30.5609C124.204 30.3399 125.032 30.1867 125.875 30.3911C126.323 30.4997 126.8 30.7203 127.184 31.1193C127.569 31.5183 127.749 31.981 127.813 32.4033L127.817 32.4329L129.003 43.0404C129.063 43.4965 129.067 44.0693 128.846 44.6302C129.313 44.9911 129.641 45.4679 129.841 45.9799C130.253 47.0361 130.012 48.0656 129.441 48.9184C128.904 49.7411 128.12 50.3503 127.127 50.6785C126.215 50.9797 125.276 50.9225 124.42 50.5509L124.398 50.5415L124.376 50.5316C124.343 50.5162 124.31 50.5005 124.278 50.4844C123.99 50.8854 123.608 51.2323 123.124 51.4871L123.074 51.5135L123.022 51.5371C118.972 53.3729 116.703 54.4094 116.168 54.6675L116.143 54.6796L116.117 54.691C115.825 54.8219 115.602 54.9215 115.449 54.9893L115.268 55.0692L115.207 55.0959L115.17 55.1113L115.135 55.1254C115.127 55.1288 115.084 55.1457 115.031 55.1633C114.58 55.3121 114.096 55.4084 113.589 55.4117C113.337 55.416 112.764 55.4033 112.217 55.1226C111.972 55.3063 111.712 55.4393 111.507 55.534C111.22 55.6658 110.895 55.7874 110.551 55.9014C109.764 56.1614 108.538 56.3295 107.523 55.5473C107.552 56.2045 107.325 56.8937 106.724 57.431C106.269 57.855 105.709 58.1165 105.19 58.288C104.546 58.5008 103.797 58.682 103.069 58.6299C102.836 58.6133 102.575 58.5707 102.308 58.4811C101.777 58.9962 101.145 59.4712 100.404 59.716C99.1819 60.1201 97.9238 60.3564 96.7544 60.1905C96.7079 60.3275 96.6493 60.464 96.5774 60.5994C96.1604 61.4419 95.3876 61.9377 94.5994 62.1983C94.0791 62.3702 93.5765 62.3257 93.3365 62.2981C93.0303 62.2629 92.7065 62.1941 92.3886 62.1128C92.0537 62.0271 91.6741 61.9141 91.2533 61.7765C90.1954 62.7662 88.9324 63.5079 87.4791 63.9883C85.1391 64.7618 82.8349 64.7475 80.8226 63.6044C78.9397 62.5347 77.6379 60.7602 76.7761 58.5512C76.0387 56.661 75.7935 54.7442 76.0706 52.8227ZM90.691 59.7399C89.6892 60.976 88.4079 61.852 86.847 62.3679C84.8917 63.0142 83.211 62.938 81.805 62.1392C80.399 61.3405 79.3095 59.9505 78.5366 57.9693C77.8934 56.3208 77.6895 54.6808 77.9248 53.0493C78.1602 51.4178 78.8115 49.9731 79.879 48.7154C80.9406 47.4425 82.334 46.5209 84.0592 45.9507C85.7352 45.3967 87.2808 45.4834 88.6961 46.2108C90.1219 46.9176 91.2419 48.3146 92.0562 50.4017C92.2034 50.7792 92.3258 51.163 92.4231 51.5531C92.6143 52.3196 92.7091 53.1104 92.7075 53.9256C92.7071 54.1719 92.6976 54.416 92.679 54.658C92.6051 55.6246 92.3872 56.5569 92.0254 57.4549C92.7167 57.7317 93.2842 57.9677 93.7278 58.1628C94.4834 58.4951 94.8797 58.7088 94.9169 58.8041C95.0216 59.0727 95.05 59.3227 95.0019 59.5541C94.9795 59.6616 94.9407 59.7651 94.8854 59.8646C94.7334 60.188 94.4273 60.4258 93.9672 60.5778C93.6222 60.6919 92.5301 60.4126 90.691 59.7399ZM95.1944 56.9122C95.2179 56.9754 95.2418 57.0382 95.2662 57.1008C95.4947 57.6866 95.8715 58.0913 96.3966 58.315C96.5082 58.3626 96.6267 58.402 96.7518 58.4333C97.5113 58.6227 98.5182 58.5102 99.7723 58.0956C100.122 57.9799 100.505 57.7232 100.92 57.3255C100.992 57.2565 101.065 57.1834 101.139 57.106C101.187 57.0561 101.234 57.0064 101.28 56.957C101.351 56.8815 101.419 56.8065 101.486 56.7321C101.491 56.7268 101.496 56.7214 101.501 56.716C101.599 56.6072 101.693 56.4996 101.784 56.3932C101.786 56.3903 101.788 56.3874 101.791 56.3845C102.015 56.1206 102.216 55.8643 102.394 55.6155L102.583 56.5265C102.714 56.8644 103.093 56.9832 103.719 56.8829C103.961 56.844 104.241 56.7723 104.557 56.6676C104.935 56.5427 105.219 56.3893 105.407 56.2074C105.602 56.0406 105.682 55.8178 105.648 55.539C105.501 54.5458 105.253 52.4595 104.903 49.2799L104.455 45.279C104.442 45.1979 104.431 45.099 104.423 44.9823C104.425 44.845 104.411 44.7386 104.382 44.663C104.193 44.179 103.663 44.0809 102.792 44.3688C102.168 44.5751 101.784 44.9238 101.642 45.4148C101.51 45.8852 101.472 46.4528 101.527 47.1175C101.574 47.6654 101.73 49.1336 101.994 51.5221L102.218 53.5226C101.955 53.9077 101.561 54.3308 101.036 54.7921C100.9 54.9115 100.755 55.0334 100.602 55.1579C100.443 55.288 100.294 55.4068 100.153 55.5143C99.6432 55.9026 99.2469 56.1436 98.9638 56.2372C98.8324 56.2806 98.655 56.2539 98.4317 56.1569C98.2084 56.06 98.0583 55.9132 97.9816 55.7166C97.1025 53.4632 96.972 50.894 97.5902 48.009C97.6449 47.769 97.7243 47.5208 97.8283 47.2644C97.9206 46.9778 97.9578 46.8119 97.9401 46.7665C97.8634 46.5699 97.6506 46.4524 97.3018 46.414C96.9635 46.3551 96.5067 46.4207 95.9317 46.6108C95.3895 46.79 95.0328 46.9933 94.8618 47.2205C94.7072 47.4424 94.5992 47.7598 94.5377 48.1728C94.3804 49.2872 94.2991 50.3517 94.2937 51.3662C94.2889 52.2589 94.343 53.113 94.4559 53.9284C94.486 54.1459 94.5203 54.3607 94.5588 54.5727C94.7079 55.3938 94.9197 56.1737 95.1944 56.9122ZM106.975 44.241C107.531 49.8967 107.862 52.8607 107.968 53.1329C108.167 53.5963 108.408 53.9521 108.69 54.2003C108.967 54.4333 109.376 54.4602 109.918 54.281C110.347 54.1394 110.669 54.0076 110.884 53.8856C110.974 53.8345 111.045 53.7852 111.098 53.7376C111.276 53.5762 111.332 53.4124 111.268 53.246L110.792 52.4555L109.8 43.5636C109.773 43.4015 109.743 43.2751 109.707 43.1844C109.628 42.9805 109.512 42.8079 109.359 42.6667C109.263 42.5774 109.151 42.5006 109.026 42.4364C108.85 42.3388 108.648 42.2945 108.418 42.3036C108.244 42.3104 108.054 42.3478 107.849 42.4155C107.241 42.6165 106.848 42.7976 106.67 42.959C106.598 43.0239 106.546 43.0893 106.514 43.155C106.466 43.2526 106.461 43.3511 106.5 43.4505L106.975 44.241ZM117.786 42.2556C117.459 42.8799 117.06 43.6871 116.589 44.6772C116.187 45.5214 115.734 46.4986 115.228 47.6088C114.443 49.3536 113.804 50.7344 113.31 51.7513C113.212 51.7839 113.04 51.8663 112.794 51.9986C112.758 52.018 112.723 52.0373 112.69 52.0563C112.67 52.0681 112.65 52.0798 112.632 52.0914C112.513 52.166 112.428 52.2374 112.376 52.3057C112.357 52.3316 112.342 52.357 112.332 52.382C112.283 52.4768 112.28 52.5859 112.321 52.7092C112.325 52.7195 112.328 52.7298 112.333 52.7403C112.349 52.7827 112.372 52.8265 112.4 52.8717C112.463 52.9713 112.554 53.0776 112.675 53.1905C112.85 53.3545 112.969 53.4689 113.032 53.5337C113.035 53.5388 113.039 53.5439 113.044 53.5488C113.064 53.5725 113.089 53.5933 113.119 53.6111C113.129 53.6169 113.14 53.6224 113.151 53.6276C113.248 53.6731 113.386 53.6939 113.566 53.6901C113.825 53.6897 114.103 53.6406 114.399 53.5429C114.415 53.5374 114.715 53.404 115.3 53.1425C115.862 52.8714 118.16 51.8214 122.196 49.9925C122.457 49.8548 122.665 49.6496 122.818 49.377C122.839 49.3385 122.859 49.3003 122.876 49.2624C122.984 49.0203 122.999 48.791 122.922 48.5743C122.919 48.5667 122.916 48.5591 122.913 48.5515C122.785 48.223 122.612 48.0007 122.395 47.8847C122.173 47.7657 121.903 47.7584 121.587 47.8629C121.161 48.0038 120.43 48.3047 119.394 48.7657C118.673 49.0869 117.803 49.4857 116.786 49.9622L118.832 45.6492C119.633 43.899 120.32 42.451 120.893 41.3054L121.267 40.6951C121.445 40.5338 121.576 40.3455 121.659 40.1303C121.661 40.1255 121.662 40.1208 121.664 40.1161C121.736 39.8911 121.735 39.6824 121.66 39.4898C121.637 39.431 121.612 39.3756 121.587 39.3237C121.556 39.262 121.523 39.2052 121.489 39.1531C121.408 39.0318 121.317 38.9365 121.215 38.8671C120.979 38.707 120.685 38.685 120.334 38.8012C119.939 38.9315 119.043 39.2962 117.644 39.8951C116.256 40.4734 114.98 41.0316 113.818 41.5696C112.655 42.1076 112.053 42.4432 112.012 42.5762C111.864 43.052 111.864 43.479 112.011 43.8571C112.194 44.3259 112.54 44.4762 113.049 44.3078L117.786 42.2556ZM123.426 38.9237C123.47 39.3826 123.512 39.8135 123.552 40.2162C123.644 41.1284 123.728 41.8963 123.805 42.52C123.926 43.4018 124.061 44.0318 124.208 44.4099C124.231 44.4683 124.257 44.5222 124.287 44.5718C124.496 44.9242 124.876 45.0558 125.427 44.9666C125.582 44.9414 125.751 44.8987 125.934 44.8384C126.476 44.6592 126.824 44.4587 126.979 44.2369C127.036 44.1606 127.08 44.0722 127.112 43.9719C127.174 43.7733 127.185 43.5275 127.144 43.2346L125.96 32.6389C125.913 32.3298 125.726 32.1355 125.399 32.0561C125.071 31.9766 124.66 32.0183 124.168 32.1813C123.165 32.5125 122.726 33.0759 122.851 33.8713C123.039 35.2092 123.23 36.8876 123.424 38.9065C123.425 38.9122 123.426 38.9179 123.426 38.9237ZM127.668 45.9692C127.528 45.8561 127.363 45.778 127.174 45.7347C126.888 45.6604 126.586 45.6471 126.268 45.6948C126.103 45.7195 125.933 45.7606 125.759 45.8181C125.244 45.9884 124.856 46.2744 124.594 46.676C124.564 46.7226 124.536 46.7708 124.509 46.8205C124.419 46.977 124.354 47.1295 124.312 47.2781C124.233 47.5605 124.24 47.8285 124.333 48.0821C124.336 48.0897 124.339 48.0973 124.342 48.1049C124.445 48.3696 124.611 48.5903 124.84 48.7672C124.951 48.853 125.077 48.9285 125.217 48.9936C125.642 49.1778 126.067 49.1993 126.495 49.0581C127.07 48.868 127.519 48.523 127.844 48.0231C128.185 47.5177 128.263 47.0307 128.081 46.5618C127.982 46.309 127.844 46.1115 127.668 45.9692ZM109.173 40.6532C109.275 40.5517 109.369 40.4416 109.453 40.323C109.79 39.8533 109.872 39.3992 109.701 38.9606C109.53 38.522 109.146 38.2048 108.551 38.009C107.971 37.8078 107.378 37.8077 106.77 38.0086C106.195 38.1987 105.814 38.5296 105.627 39.0012C105.456 39.4673 105.462 39.9348 105.645 40.4036C105.774 40.7337 105.964 40.9938 106.215 41.1841C106.309 41.2554 106.411 41.3169 106.522 41.3686C106.802 41.4816 107.121 41.5132 107.478 41.4632C107.655 41.4385 107.841 41.3937 108.037 41.3289C108.492 41.1787 108.87 40.9535 109.173 40.6532Z",
    fill: "#252B51",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "134.373",
    height: "67",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

Logo.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const QuizLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Logo).withConfig({
  displayName: "QuizLogo",
  componentId: "rct3ik-0"
})(["margin:auto;display:block;@media screen and (max-width:500px){margin:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizLogo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcXVpei5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbHRlcm5hdGl2ZXNGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlJlc3VsdFdpZGdldCIsInJlc3VsdHMiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJMb2FkaW5nV2lkZ2V0IiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIm9uU3VibWl0IiwiYWRkUmVzdWx0Iiwic2VsZWN0ZWRBbHRlcm5hdGl2ZSIsInNldFNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiYWx0ZXJuYXRpdmVTdGF0dXMiLCJpc1NlbGVjdGVkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsImRiIiwicXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0UXVpeiIsIm5leHRRdWVzdGlvbiIsImJnIiwiQWx0ZXJuYXRpdmVzRm9ybSIsInN0eWxlZCIsImZvcm0iLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJzdWNjZXNzIiwid3JvbmciLCJCdXR0b24iLCJidXR0b24iLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJib3JkZXJSYWRpdXMiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiY2hpbGRyZW4iLCJub2RlIiwiUXVpekJhY2tncm91bmQiLCJkaXYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYWluQmciLCJRdWl6Q29udGFpbmVyIiwiTG9nbyIsImNsYXNzTmFtZSIsInN0cmluZyIsIlF1aXpMb2dvIiwiV2lkZ2V0IiwiSGVhZGVyIiwiaGVhZGVyIiwidGhpcmQiLCJDb250ZW50IiwiVG9waWMiLCJhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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LEtBQUssQ0FBQ1MsWUFSeEM7QUFvQmVpQixxRUFBZixFOzs7Ozs7Ozs7OztBQzdGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9xdWl6LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9xdWl6LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQWx0ZXJuYXRpdmVzRm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BbHRlcm5hdGl2ZXNGb3JtJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuZnVuY3Rpb24gUmVzdWx0V2lkZ2V0KHsgcmVzdWx0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQ+XHJcbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFRlbGEgZGUgUmVzdWx0YWRvOlxyXG4gICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBWb2PDqiBhY2VydG91XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgey8qIHtyZXN1bHRzLnJlZHVjZSgoc29tYXRvcmlhQXR1YWwsIHJlc3VsdEF0dWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWNlcnRvID0gcmVzdWx0QXR1YWwgPT09IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpc0FjZXJ0bykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvbWF0b3JpYUF0dWFsO1xyXG4gICAgICAgICAgfSwgMCl9ICovfVxyXG4gICAgICAgICAge3Jlc3VsdHMuZmlsdGVyKCh4KSA9PiB4KS5sZW5ndGh9XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgcGVyZ3VudGFzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtgcmVzdWx0X18ke3Jlc3VsdH1gfT5cclxuICAgICAgICAgICAgICAjXHJcbiAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIFJlc3VsdGFkbzpcclxuICAgICAgICAgICAgICB7cmVzdWx0ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/ICdBY2VydG91J1xyXG4gICAgICAgICAgICAgICAgOiAnRXJyb3UnfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdXaWRnZXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQ+XHJcbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIENhcnJlZ2FuZG8uLi5cclxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgIFtEZXNhZmlvIGRvIExvYWRpbmddXHJcbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCh7XHJcbiAgcXVlc3Rpb24sXHJcbiAgcXVlc3Rpb25JbmRleCxcclxuICB0b3RhbFF1ZXN0aW9ucyxcclxuICBvblN1Ym1pdCxcclxuICBhZGRSZXN1bHQsXHJcbn0pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRBbHRlcm5hdGl2ZSwgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcXVlc3Rpb25JZCA9IGBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWA7XHJcbiAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xyXG4gIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0PlxyXG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICB7LyogPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiAvPiAqL31cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3JjPXtxdWVzdGlvbi5pbWFnZX1cclxuICAgICAgLz5cclxuICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDxoMj5cclxuICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPEFsdGVybmF0aXZlc0Zvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldElzUXVlc3Rpb25TdWJtaXRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWRkUmVzdWx0KGlzQ29ycmVjdCk7XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfSwgMyAqIDEwMDApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLm1hcCgoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlU3RhdHVzID0gaXNDb3JyZWN0ID8gJ1NVQ0NFU1MnIDogJ0VSUk9SJztcclxuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IGFsdGVybmF0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xyXG4gICAgICAgICAgICAgICAgYXM9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2FsdGVybmF0aXZlSWR9XHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1zZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgey8qIDxwcmU+XHJcbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICA8L3ByZT4gKi99XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWhhc0FsdGVybmF0aXZlU2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiBpc0NvcnJlY3QgJiYgPHA+Vm9jw6ogYWNlcnRvdSE8L3A+fVxyXG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiAhaXNDb3JyZWN0ICYmIDxwPlZvY8OqIGVycm91ITwvcD59XHJcbiAgICAgICAgPC9BbHRlcm5hdGl2ZXNGb3JtPlxyXG4gICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gIFFVSVo6ICdRVUlaJyxcclxuICBMT0FESU5HOiAnTE9BRElORycsXHJcbiAgUkVTVUxUOiAnUkVTVUxUJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aDtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcclxuICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgLy8gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICBzZXRSZXN1bHRzKFtcclxuICAgICAgLi4ucmVzdWx0cyxcclxuICAgICAgcmVzdWx0LFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICAvLyBbUmVhY3QgY2hhbWEgZGU6IEVmZWl0b3MgfHwgRWZmZWN0c11cclxuICAvLyBSZWFjdC51c2VFZmZlY3RcclxuICAvLyBhdHVhbGl6YWRvID09PSB3aWxsVXBkYXRlXHJcbiAgLy8gbW9ycmUgPT09IHdpbGxVbm1vdW50XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZldGNoKCkgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlFVSVopO1xyXG4gICAgfSwgMSAqIDEwMDApO1xyXG4gIC8vIG5hc2NlID09PSBkaWRNb3VudFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcclxuICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5kZXggKyAxO1xyXG4gICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb25zKSB7XHJcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5RVUlaICYmIChcclxuICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxyXG4gICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXg9e3F1ZXN0aW9uSW5kZXh9XHJcbiAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc31cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XHJcbiAgICAgICAgICAgIGFkZFJlc3VsdD17YWRkUmVzdWx0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5MT0FESU5HICYmIDxMb2FkaW5nV2lkZ2V0IC8+fVxyXG5cclxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPFJlc3VsdFdpZGdldCByZXN1bHRzPXtyZXN1bHRzfSAvPn1cclxuICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICApO1xyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBBbHRlcm5hdGl2ZXNGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgbGFiZWwge1xyXG4gICAgJltkYXRhLXNlbGVjdGVkPVwidHJ1ZVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBcclxuICAgICAgJltkYXRhLXN0YXR1cz1cIlNVQ0NFU1NcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnN1Y2Nlc3N9O1xyXG4gICAgICB9XHJcbiAgICAgICZbZGF0YS1zdGF0dXM9XCJFUlJPUlwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud3Jvbmd9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH0gXHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsdGVybmF0aXZlc0Zvcm07IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnRyYXN0VGV4dH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJSYWRpdXN9O1xyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3V0bGluZTogMDtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbmA7XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Ym1pdCcsICd0eXBlJywgJ2J1dHRvbiddKS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsIi8vIHNyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kL2luZGV4LmpzXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUXVpekJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG4gIGZsZXg6IDE7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ30pLFxyXG4gICAgICAgIHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6QmFja2dyb3VuZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luOiBhdXRvIDEwJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6Q29udGFpbmVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIExvZ28oeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB3aWR0aD1cIjEzNVwiIGhlaWdodD1cIjY3XCIgdmlld0JveD1cIjAgMCAxMzUgNjdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgIDxtYXNrIGlkPVwicGF0aC0xLW91dHNpZGUtMVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMTEwXCIgaGVpZ2h0PVwiNTBcIiBmaWxsPVwiYmxhY2tcIj5cclxuICAgICAgICAgIDxyZWN0IGZpbGw9XCJ3aGl0ZVwiIHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjUwXCIgLz5cclxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzIuMDM0NSA0SDM2LjgzNTRDMzcuMDc2NiA0IDM3LjI3ODcgNC4xODYgMzcuMjc4NyA0LjQwOFY0OC42MjhDMzcuMjc3OCA0OC43MzYxIDM3LjIzMDkgNDguODM5NiAzNy4xNDggNDguOTE2MkMzNy4wNjUxIDQ4Ljk5MjggMzYuOTUyOSA0OS4wMzYzIDM2LjgzNTQgNDkuMDM3NUgzMi4wMzQ1QzMxLjkxNzEgNDkuMDM2MyAzMS44MDQ4IDQ4Ljk5MjggMzEuNzIxOSA0OC45MTYyQzMxLjYzOSA0OC44Mzk2IDMxLjU5MjEgNDguNzM2MSAzMS41OTEzIDQ4LjYyOFY0LjQwOEMzMS41OTEzIDQuMTg2IDMxLjc5MTcgNCAzMi4wMzQ1IDRaTTY1LjAyOTYgNDAuMzg1NVY0MS41QzY1LjAyOTYgNDEuOTgzIDY0Ljk0OTggNDIuNjUwNSA2NC43NDc3IDQzLjUwNTVDNjQuNTg2NCA0NC4zMjE1IDY0LjEwMjQgNDUuMTc1IDYzLjMzNjQgNDUuOTkyNUM2Mi41NzA1IDQ2LjgxIDYxLjQ0MTIgNDcuNTUyNSA1OS45MDc3IDQ4LjE0NjVDNTguMzc1OSA0OC43NDA1IDU2LjI3NjkgNDkuMDM3NSA1My41NzUgNDkuMDM3NUM1MC44NzE0IDQ5LjAzNzUgNDguNzc0MSA0OC43NDA1IDQ3LjI0MjIgNDguMTQ2NUM0NS43MTA0IDQ3LjU1MjUgNDQuNTc5NCA0Ni44NDYgNDMuODEzNSA0NS45OTI1QzQzLjA0NzYgNDUuMTc1IDQyLjU2MTkgNDQuMzIxNSA0Mi40MDA2IDQzLjQ2OEM0Mi4yMzkzIDQyLjYxMyA0Mi4xMTg3IDQxLjk4MyA0Mi4xMTg3IDQxLjVWMTYuMzI3QzQyLjExODcgMTYuMTAzNSA0Mi4zMjA3IDE1LjkxOSA0Mi41NjE5IDE1LjkxOUg0Ny4zNjI4QzQ3LjYwNCAxNS45MTkgNDcuODA2MSAxNi4xMDM1IDQ3LjgwNjEgMTYuMzI3VjM5LjkwNEM0Ny44MDYxIDQwLjY4NCA0Ny45MjY3IDQxLjIzOSA0OC4wNDg5IDQxLjY4NkM0OC4xNjk1IDQyLjEzMTUgNDguNDEwNyA0Mi41NzcgNDguNzc0MSA0Mi45NDc1QzQ5LjEzNzUgNDMuMzU3IDQ5LjcwMyA0My42OSA1MC40Njg5IDQzLjk1MUM1MS4xOTQxIDQ0LjIxMDUgNTIuMjAyOCA0NC4zNTkgNTMuNDU0NCA0NC4zNTlDNTQuNzQ1IDQ0LjM1OSA1NS43OTI5IDQ0LjIwOSA1Ni41NTg4IDQzLjk1MUM1Ny4zMjQ3IDQzLjY5IDU3Ljg5MDIgNDMuMzU3IDU4LjI5NDQgNDIuOTg1QzU4LjY5NjkgNDIuNjE0NSA1OC45Nzg4IDQyLjIwNSA1OS4xMDEgNDEuNzU5NUM1OS4yMjE2IDQxLjMxNCA1OS4zODMgNDAuOTQzNSA1OS4zODMgMzkuODY2NVYxNi4zMjdDNTkuMzgzIDE2LjEwMzUgNTkuNTg1IDE1LjkxOSA1OS44MjYyIDE1LjkxOUg2NC42MjcxQzY0Ljg2ODMgMTUuOTE5IDY1LjA3MDQgMTYuMTAzNSA2NS4wNzA0IDE2LjMyN1Y0MC4zODdINjUuMDI5NlY0MC4zODU1Wk04MS4zNjY3IDE1LjkxOUg4NC41OTMzQzg0Ljg3NjkgMTUuOTE5IDg1LjA3NzMgMTYuMTc4NSA4NC45OTc1IDE2LjQzOEw4My45MDg5IDIwLjI5OUM4My44NjgyIDIwLjQ4NSA4My42NjYxIDIwLjU5NiA4My41MDQ3IDIwLjU5Nkg4MS4yNDYxQzgwLjAzNTMgMjAuNTk2IDc5LjA2NzMgMjAuNzQ2IDc4LjMwMTMgMjEuMDQxNUM3Ny41NzYyIDIxLjMzODUgNzYuOTY5OSAyMS42NzMgNzYuNTY3NCAyMi4wODFDNzYuMjA5MiAyMi40MjcyIDc1Ljk0NjYgMjIuODQ3NSA3NS44MDE1IDIzLjMwNjVDNzUuNjc5MyAyMy43NTIgNzUuNjM4NSAyNC4xNjE1IDc1LjYzODUgMjQuNTMyVjQ4LjY2NTVDNzUuNjM3NyA0OC43NzM2IDc1LjU5MDggNDguODc3MSA3NS41MDc5IDQ4Ljk1MzdDNzUuNDI1IDQ5LjAzMDMgNzUuMzEyNyA0OS4wNzM4IDc1LjE5NTMgNDkuMDc1SDcwLjM1NTNDNzAuMjM3OCA0OS4wNzM4IDcwLjEyNTYgNDkuMDMwMyA3MC4wNDI3IDQ4Ljk1MzdDNjkuOTU5OCA0OC44NzcxIDY5LjkxMjggNDguNzczNiA2OS45MTIgNDguNjY1NVYyMy40OTI1QzY5LjkxMiAyMy4wNDcgNjkuOTkxOSAyMi4zNzggNzAuMTkzOSAyMS41MjQ1QzcwLjM1NTMgMjAuNjY5NSA3MC44MzkzIDE5Ljg1MzUgNzEuNjA1MiAxOUM3Mi4zNzExIDE4LjE4MjUgNzMuNTAyMSAxNy40NCA3NS4wMzM5IDE2Ljg0NkM3Ni41MjY3IDE2LjIxNiA3OC42NjQ3IDE1LjkxOSA4MS4zNjY3IDE1LjkxOVpNMTUuNDE1NiAxNS45MTlDMTkuMzI2NyAxNS45MTkgMjIuMTkxNiAxNi42MjQgMjQuMDQ3NyAxOC4wMzRDMjUuODYzMSAxOS40NDU1IDI2Ljc5MDQgMjEuMjI5IDI2Ljc5MDQgMjMuMzQ0VjQxLjUzNzVDMjYuNzkwNCA0Mi4yOCAyNi42MjkgNDMuMDk3NSAyNi4zNDcxIDQzLjk1MUMyNi4wNjUyIDQ0Ljg0MiAyNS40OTk3IDQ1LjY1OCAyNC42NTIzIDQ2LjM2NDVDMjMuODA0OSA0Ny4xMDcgMjIuNjM2NCA0Ny42OTk1IDIxLjE4NDQgNDguMjJDMTkuNzMwOCA0OC43MDMgMTcuNzk0OCA0OC45NjI1IDE1LjQ1NjMgNDguOTYyNUMxMy4wNzcgNDguOTYyNSAxMS4xODAxIDQ4LjcwMyA5LjcyODE1IDQ4LjIyQzguMjc2MTUgNDcuNzM3IDcuMTA0NDQgNDcuMTA3IDYuMjU4NjcgNDYuMzY0NUM1LjQxMTI2IDQ1LjYyMiA0Ljg0NzQxIDQ0LjgwNDUgNC41NjM4NSA0My45NDk1QzQuMjgxOTMgNDMuMDYgNC4xMjA1OSA0Mi4yNDI1IDQuMTIwNTkgNDEuNTM3NVYzOC42NDI1QzQuMTIwNTkgMzcuMDgyNSA0LjU2NTQ4IDM1LjY3MSA1LjQxMTI2IDM0LjQwOEM2LjI5OTQxIDMzLjE0NjUgNy41MDg1OSAzMi4yMTggOS4xMjM1NiAzMS42OTc1QzkuOTMwMjIgMzEuNDM4IDEwLjgxODQgMzEuMTc4NSAxMS44NjYyIDMwLjg0NEMxMi44NzUgMzAuNTA5NSAxMy44ODIxIDMwLjIxNCAxNC44NTAxIDI5Ljg3OEMxNS44MTgxIDI5LjU4MSAxNi42MjY0IDI5LjI4NCAxNy4zNTE2IDI5LjA2MkMxOC4wNzg0IDI4LjgwMjUgMTguNTIxNiAyOC42OSAxOC42ODMgMjguNjE2NUMxOC44NDQzIDI4LjU0MTUgMTkuMDg1NSAyOC40MzA1IDE5LjM2NzQgMjguMjgyQzE5LjY1MSAyOC4xMzM1IDE5LjkzMjkgMjcuOTExNSAyMC4yMTQ4IDI3LjY1MkMyMC40OTg0IDI3LjM1MzUgMjAuNzAwNCAyNy4wMjA1IDIwLjkwMDkgMjYuNjg2QzIxLjEwMyAyNi4zMTQgMjEuMTg0NCAyNS44Njg1IDIxLjE4NDQgMjUuMzg1NVYyNC4yMzVDMjEuMTg0NCAyMy44MjcgMjEuMTAzIDIzLjQxOSAyMC45MDA5IDIyLjk3MzVDMjAuNzM5NiAyMi41MjY1IDIwLjQxNjkgMjIuMTU2IDE5Ljk3MzYgMjEuNzg0QzE5LjUzMDQgMjEuNDEzNSAxOC45MjQxIDIxLjExNjUgMTguMTk3MyAyMC44OTNDMTcuNDcyMSAyMC42NzEgMTYuNTQ0OSAyMC41NiAxNS40MTU2IDIwLjU2QzEzLjE5NzYgMjAuNTYgMTEuNzA0OSAyMC45NjggMTAuODk4MiAyMS44MjE1QzEwLjIwMjQgMjIuNTcxNCA5Ljc5MTU1IDIzLjUxIDkuNzI4MTUgMjQuNDk0NUM5LjcyODE1IDI0LjcxOCA5LjUyNjA3IDI0Ljg2NjUgOS4yODQ4OSAyNC44NjY1SDQuNDQ0ODlDNC4zMjc0NCAyNC44NjU3IDQuMjE1MDIgMjQuODIyNSA0LjEzMTgyIDI0Ljc0NjJDNC4wNDg2MSAyNC42Njk5IDQuMDAxMjggMjQuNTY2NiA0IDI0LjQ1ODVWMjMuMzgxNUM0IDIyLjM0MiA0LjIwMjA3IDIxLjM3NiA0LjY0NTMzIDIwLjQ4NjVDNS4wNDk0OCAxOS41OTQgNS43MzM5MyAxOC43NzY1IDYuNzAxOTMgMTguMTA5QzcuNjMwODIgMTcuNDQgOC44MDA4OSAxNi44ODM1IDEwLjI1MjkgMTYuNTEzQzExLjY2NDEgMTYuMTQxIDEzLjM5ODEgMTUuOTE5IDE1LjQxNTYgMTUuOTE5Wk0yMS4xNDM3IDMyLjIxOEMyMS4xMDY3IDMyLjQwODUgMjEuMDI2NSAzMi41ODk2IDIwLjkwODMgMzIuNzQ5NkMyMC43OTAxIDMyLjkwOTYgMjAuNjM2NSAzMy4wNDQ5IDIwLjQ1NzYgMzMuMTQ2NUMyMC4wOTQyIDMzLjM2ODUgMTkuNzczMiAzMy40Nzk1IDE5LjQ0ODkgMzMuNTkyQzE4Ljc2NDQgMzMuODE0IDE4LjAzNzYgMzQuMDM3NSAxNy4yNzE3IDM0LjI5N0MxNi41MDU4IDM0LjU1NjUgMTUuNzc5IDM0LjgxNzUgMTUuMDkyOSAzNS4wMDJDMTQuMjg2MiAzNS4yNjMgMTMuNTIwMyAzNS40ODUgMTIuODM0MiAzNS43NDQ1QzEyLjI4NDcgMzUuOTY1NyAxMS43Njk1IDM2LjI1MzIgMTEuMzAyNCAzNi41OTk1QzEwLjg5ODIgMzYuOTMyNSAxMC41MzQ4IDM3LjM0MiAxMC4yMTA1IDM3Ljg2MUM5Ljg4OTQ4IDM4LjM4MTUgOS43MjgxNSAzOS4wMTMgOS43MjgxNSAzOS43OTE1QzkuNzI4MTUgNDEuMzUxNSAxMC4xMzA3IDQyLjUwMiAxMC45MzczIDQzLjI4MkMxMS43NDQgNDQuMDI0NSAxMy4yMzY3IDQ0LjQzMjUgMTUuNDE1NiA0NC40MzI1QzE3LjYzMzUgNDQuNDMyNSAxOS4xNjcgNDQuMDI0NSAxOS45NzM2IDQzLjI0NDVDMjAuNzgwMyA0Mi40Mjg1IDIxLjE4NDQgNDEuMzE0IDIxLjE4NDQgMzkuODI5VjMyLjIxOEgyMS4xNDM3Wk05OC41NTExIDE1LjkxOUMxMDIuNDYyIDE1LjkxOSAxMDUuMzI3IDE2LjYyNCAxMDcuMTgzIDE4LjAzNEMxMDguOTk5IDE5LjQ0NTUgMTA5LjkyNiAyMS4yMjkgMTA5LjkyNiAyMy4zNDRWNDEuNTM3NUMxMDkuOTI2IDQyLjI4IDEwOS43NjUgNDMuMDk3NSAxMDkuNDgzIDQzLjk1MUMxMDkuMTk5IDQ0Ljg0MiAxMDguNjM1IDQ1LjY1OCAxMDcuNzg4IDQ2LjM2NDVDMTA2Ljk0IDQ3LjEwNyAxMDUuNzcgNDcuNjk5NSAxMDQuMzE4IDQ4LjIyQzEwMi44NjggNDguNzAzIDEwMC45MyA0OC45NjI1IDk4LjU5MTkgNDguOTYyNUM5Ni4yMTI2IDQ4Ljk2MjUgOTQuMzE1NyA0OC43MDMgOTIuODYzNyA0OC4yMkM5MS40MTE3IDQ3LjczNyA5MC4yNCA0Ny4xMDcgODkuMzk0MiA0Ni4zNjQ1Qzg4LjU0NjggNDUuNjIyIDg3Ljk4MyA0NC44MDQ1IDg3LjY5OTQgNDMuOTQ5NUM4Ny40MTc1IDQzLjA2IDg3LjI1NjIgNDIuMjQyNSA4Ny4yNTYyIDQxLjUzNzVWMzguNjQyNUM4Ny4yNTYyIDM3LjA4MjUgODcuNjk5NCAzNS42NzEgODguNTQ2OCAzNC40MDhDODkuNDM1IDMzLjE0NjUgOTAuNjQ0MiAzMi4yMTggOTIuMjU3NSAzMS42OTc1QzkzLjA2NDIgMzEuNDM4IDkzLjk1MjMgMzEuMTc4NSA5NS4wMDE4IDMwLjg0NEM5Ni4wMDg5IDMwLjUwOTUgOTcuMDE3NiAzMC4yMTQgOTcuOTg1NiAyOS44NzhDOTguOTUzNiAyOS41ODEgOTkuNzYxOSAyOS4yODQgMTAwLjQ4NyAyOS4wNjJDMTAxLjIxMiAyOC44MDI1IDEwMS42NTcgMjguNjkgMTAxLjgxOSAyOC42MTY1QzEwMS45OCAyOC41NDE1IDEwMi4yMjEgMjguNDMwNSAxMDIuNTAzIDI4LjI4MkMxMDIuNzg3IDI4LjEzMzUgMTAzLjA2OCAyNy45MTE1IDEwMy4zNSAyNy42NTJDMTAzLjYzNCAyNy4zNTM1IDEwMy44MzQgMjcuMDIwNSAxMDQuMDM2IDI2LjY4NkMxMDQuMjM5IDI2LjMxNCAxMDQuMzE4IDI1Ljg2ODUgMTA0LjMxOCAyNS4zODU1VjI0LjIzNUMxMDQuMzE4IDIzLjgyNyAxMDQuMjM3IDIzLjQxOSAxMDQuMDM2IDIyLjk3MzVDMTAzLjg3NSAyMi41MjY1IDEwMy41NTIgMjIuMTU2IDEwMy4xMDggMjEuNzg0QzEwMi42NjYgMjEuNDEzNSAxMDIuMDYgMjEuMTE2NSAxMDEuMzM1IDIwLjg5M0MxMDAuNjA4IDIwLjY3MSA5OS42ODA1IDIwLjU2IDk4LjU1MTEgMjAuNTZDOTYuMzMxNiAyMC41NiA5NC44NDA1IDIwLjk2OCA5NC4wMzM4IDIxLjgyMTVDOTMuMzM3OSAyMi41NzE0IDkyLjkyNzEgMjMuNTEgOTIuODYzNyAyNC40OTQ1QzkyLjg2MzcgMjQuNzE4IDkyLjY2MTYgMjQuODY2NSA5Mi40MTg4IDI0Ljg2NjVIODcuNTc4OEM4Ny40NjE3IDI0Ljg2NTMgODcuMzQ5NiAyNC44MjIgODcuMjY2OCAyNC43NDU3Qzg3LjE4MzkgMjQuNjY5NCA4Ny4xMzY4IDI0LjU2NjMgODcuMTM1NiAyNC40NTg1VjIzLjM4MTVDODcuMTM1NiAyMi4zNDIgODcuMzM3NiAyMS4zNzYgODcuNzgwOSAyMC40ODY1Qzg4LjE4MzQgMTkuNTk0IDg4Ljg2OTUgMTguNzc2NSA4OS44Mzc1IDE4LjEwOUM5MC43NjY0IDE3LjQ0IDkxLjkzNDggMTYuODgzNSA5My4zODY4IDE2LjUxM0M5NC44NDA1IDE2LjE0MSA5Ni41MzM2IDE1LjkxOSA5OC41NTExIDE1LjkxOVpNMTA0LjI3OSAzMi4yMThDMTA0LjI0MiAzMi40MDg1IDEwNC4xNjIgMzIuNTg5NiAxMDQuMDQ0IDMyLjc0OTZDMTAzLjkyNiAzMi45MDk2IDEwMy43NzIgMzMuMDQ0OSAxMDMuNTkzIDMzLjE0NjVDMTAzLjIzIDMzLjM2ODUgMTAyLjkwOSAzMy40Nzk1IDEwMi41ODQgMzMuNTkyQzEwMS45IDMzLjgxNCAxMDEuMTczIDM0LjAzNzUgMTAwLjQwNiAzNC4yOTdDOTkuNjM5NyAzNC41NTY1IDk4LjkxNDUgMzQuODE3NSA5OC4yMjg0IDM1LjAwMkM5Ny40MjE4IDM1LjI2MyA5Ni42NTQyIDM1LjQ4NSA5NS45Njk4IDM1Ljc0NDVDOTUuNDE5NiAzNS45NjU2IDk0LjkwMzkgMzYuMjUzMSA5NC40MzYzIDM2LjU5OTVDOTQuMDMzOCAzNi45MzI1IDkzLjY3MDQgMzcuMzQyIDkzLjM0NzcgMzcuODYxQzkzLjAyNSAzOC4zODE1IDkyLjg2MzcgMzkuMDEzIDkyLjg2MzcgMzkuNzkxNUM5Mi44NjM3IDQxLjM1MTUgOTMuMjY2MiA0Mi41MDIgOTQuMDcyOSA0My4yODJDOTQuODc5NiA0NC4wMjQ1IDk2LjM3MjMgNDQuNDMyNSA5OC41NTExIDQ0LjQzMjVDMTAwLjc2OSA0NC40MzI1IDEwMi4zMDMgNDQuMDI0NSAxMDMuMTA5IDQzLjI0NDVDMTAzLjkxNiA0Mi40Mjg1IDEwNC4zMTggNDEuMzE0IDEwNC4zMTggMzkuODI5VjMyLjIxOEgxMDQuMjc5WlwiIC8+XHJcbiAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzIuMDM0NSA0SDM2LjgzNTRDMzcuMDc2NiA0IDM3LjI3ODcgNC4xODYgMzcuMjc4NyA0LjQwOFY0OC42MjhDMzcuMjc3OCA0OC43MzYxIDM3LjIzMDkgNDguODM5NiAzNy4xNDggNDguOTE2MkMzNy4wNjUxIDQ4Ljk5MjggMzYuOTUyOSA0OS4wMzYzIDM2LjgzNTQgNDkuMDM3NUgzMi4wMzQ1QzMxLjkxNzEgNDkuMDM2MyAzMS44MDQ4IDQ4Ljk5MjggMzEuNzIxOSA0OC45MTYyQzMxLjYzOSA0OC44Mzk2IDMxLjU5MjEgNDguNzM2MSAzMS41OTEzIDQ4LjYyOFY0LjQwOEMzMS41OTEzIDQuMTg2IDMxLjc5MTcgNCAzMi4wMzQ1IDRaTTY1LjAyOTYgNDAuMzg1NVY0MS41QzY1LjAyOTYgNDEuOTgzIDY0Ljk0OTggNDIuNjUwNSA2NC43NDc3IDQzLjUwNTVDNjQuNTg2NCA0NC4zMjE1IDY0LjEwMjQgNDUuMTc1IDYzLjMzNjQgNDUuOTkyNUM2Mi41NzA1IDQ2LjgxIDYxLjQ0MTIgNDcuNTUyNSA1OS45MDc3IDQ4LjE0NjVDNTguMzc1OSA0OC43NDA1IDU2LjI3NjkgNDkuMDM3NSA1My41NzUgNDkuMDM3NUM1MC44NzE0IDQ5LjAzNzUgNDguNzc0MSA0OC43NDA1IDQ3LjI0MjIgNDguMTQ2NUM0NS43MTA0IDQ3LjU1MjUgNDQuNTc5NCA0Ni44NDYgNDMuODEzNSA0NS45OTI1QzQzLjA0NzYgNDUuMTc1IDQyLjU2MTkgNDQuMzIxNSA0Mi40MDA2IDQzLjQ2OEM0Mi4yMzkzIDQyLjYxMyA0Mi4xMTg3IDQxLjk4MyA0Mi4xMTg3IDQxLjVWMTYuMzI3QzQyLjExODcgMTYuMTAzNSA0Mi4zMjA3IDE1LjkxOSA0Mi41NjE5IDE1LjkxOUg0Ny4zNjI4QzQ3LjYwNCAxNS45MTkgNDcuODA2MSAxNi4xMDM1IDQ3LjgwNjEgMTYuMzI3VjM5LjkwNEM0Ny44MDYxIDQwLjY4NCA0Ny45MjY3IDQxLjIzOSA0OC4wNDg5IDQxLjY4NkM0OC4xNjk1IDQyLjEzMTUgNDguNDEwNyA0Mi41NzcgNDguNzc0MSA0Mi45NDc1QzQ5LjEzNzUgNDMuMzU3IDQ5LjcwMyA0My42OSA1MC40Njg5IDQzLjk1MUM1MS4xOTQxIDQ0LjIxMDUgNTIuMjAyOCA0NC4zNTkgNTMuNDU0NCA0NC4zNTlDNTQuNzQ1IDQ0LjM1OSA1NS43OTI5IDQ0LjIwOSA1Ni41NTg4IDQzLjk1MUM1Ny4zMjQ3IDQzLjY5IDU3Ljg5MDIgNDMuMzU3IDU4LjI5NDQgNDIuOTg1QzU4LjY5NjkgNDIuNjE0NSA1OC45Nzg4IDQyLjIwNSA1OS4xMDEgNDEuNzU5NUM1OS4yMjE2IDQxLjMxNCA1OS4zODMgNDAuOTQzNSA1OS4zODMgMzkuODY2NVYxNi4zMjdDNTkuMzgzIDE2LjEwMzUgNTkuNTg1IDE1LjkxOSA1OS44MjYyIDE1LjkxOUg2NC42MjcxQzY0Ljg2ODMgMTUuOTE5IDY1LjA3MDQgMTYuMTAzNSA2NS4wNzA0IDE2LjMyN1Y0MC4zODdINjUuMDI5NlY0MC4zODU1Wk04MS4zNjY3IDE1LjkxOUg4NC41OTMzQzg0Ljg3NjkgMTUuOTE5IDg1LjA3NzMgMTYuMTc4NSA4NC45OTc1IDE2LjQzOEw4My45MDg5IDIwLjI5OUM4My44NjgyIDIwLjQ4NSA4My42NjYxIDIwLjU5NiA4My41MDQ3IDIwLjU5Nkg4MS4yNDYxQzgwLjAzNTMgMjAuNTk2IDc5LjA2NzMgMjAuNzQ2IDc4LjMwMTMgMjEuMDQxNUM3Ny41NzYyIDIxLjMzODUgNzYuOTY5OSAyMS42NzMgNzYuNTY3NCAyMi4wODFDNzYuMjA5MiAyMi40MjcyIDc1Ljk0NjYgMjIuODQ3NSA3NS44MDE1IDIzLjMwNjVDNzUuNjc5MyAyMy43NTIgNzUuNjM4NSAyNC4xNjE1IDc1LjYzODUgMjQuNTMyVjQ4LjY2NTVDNzUuNjM3NyA0OC43NzM2IDc1LjU5MDggNDguODc3MSA3NS41MDc5IDQ4Ljk1MzdDNzUuNDI1IDQ5LjAzMDMgNzUuMzEyNyA0OS4wNzM4IDc1LjE5NTMgNDkuMDc1SDcwLjM1NTNDNzAuMjM3OCA0OS4wNzM4IDcwLjEyNTYgNDkuMDMwMyA3MC4wNDI3IDQ4Ljk1MzdDNjkuOTU5OCA0OC44NzcxIDY5LjkxMjggNDguNzczNiA2OS45MTIgNDguNjY1NVYyMy40OTI1QzY5LjkxMiAyMy4wNDcgNjkuOTkxOSAyMi4zNzggNzAuMTkzOSAyMS41MjQ1QzcwLjM1NTMgMjAuNjY5NSA3MC44MzkzIDE5Ljg1MzUgNzEuNjA1MiAxOUM3Mi4zNzExIDE4LjE4MjUgNzMuNTAyMSAxNy40NCA3NS4wMzM5IDE2Ljg0NkM3Ni41MjY3IDE2LjIxNiA3OC42NjQ3IDE1LjkxOSA4MS4zNjY3IDE1LjkxOVpNMTUuNDE1NiAxNS45MTlDMTkuMzI2NyAxNS45MTkgMjIuMTkxNiAxNi42MjQgMjQuMDQ3NyAxOC4wMzRDMjUuODYzMSAxOS40NDU1IDI2Ljc5MDQgMjEuMjI5IDI2Ljc5MDQgMjMuMzQ0VjQxLjUzNzVDMjYuNzkwNCA0Mi4yOCAyNi42MjkgNDMuMDk3NSAyNi4zNDcxIDQzLjk1MUMyNi4wNjUyIDQ0Ljg0MiAyNS40OTk3IDQ1LjY1OCAyNC42NTIzIDQ2LjM2NDVDMjMuODA0OSA0Ny4xMDcgMjIuNjM2NCA0Ny42OTk1IDIxLjE4NDQgNDguMjJDMTkuNzMwOCA0OC43MDMgMTcuNzk0OCA0OC45NjI1IDE1LjQ1NjMgNDguOTYyNUMxMy4wNzcgNDguOTYyNSAxMS4xODAxIDQ4LjcwMyA5LjcyODE1IDQ4LjIyQzguMjc2MTUgNDcuNzM3IDcuMTA0NDQgNDcuMTA3IDYuMjU4NjcgNDYuMzY0NUM1LjQxMTI2IDQ1LjYyMiA0Ljg0NzQxIDQ0LjgwNDUgNC41NjM4NSA0My45NDk1QzQuMjgxOTMgNDMuMDYgNC4xMjA1OSA0Mi4yNDI1IDQuMTIwNTkgNDEuNTM3NVYzOC42NDI1QzQuMTIwNTkgMzcuMDgyNSA0LjU2NTQ4IDM1LjY3MSA1LjQxMTI2IDM0LjQwOEM2LjI5OTQxIDMzLjE0NjUgNy41MDg1OSAzMi4yMTggOS4xMjM1NiAzMS42OTc1QzkuOTMwMjIgMzEuNDM4IDEwLjgxODQgMzEuMTc4NSAxMS44NjYyIDMwLjg0NEMxMi44NzUgMzAuNTA5NSAxMy44ODIxIDMwLjIxNCAxNC44NTAxIDI5Ljg3OEMxNS44MTgxIDI5LjU4MSAxNi42MjY0IDI5LjI4NCAxNy4zNTE2IDI5LjA2MkMxOC4wNzg0IDI4LjgwMjUgMTguNTIxNiAyOC42OSAxOC42ODMgMjguNjE2NUMxOC44NDQzIDI4LjU0MTUgMTkuMDg1NSAyOC40MzA1IDE5LjM2NzQgMjguMjgyQzE5LjY1MSAyOC4xMzM1IDE5LjkzMjkgMjcuOTExNSAyMC4yMTQ4IDI3LjY1MkMyMC40OTg0IDI3LjM1MzUgMjAuNzAwNCAyNy4wMjA1IDIwLjkwMDkgMjYuNjg2QzIxLjEwMyAyNi4zMTQgMjEuMTg0NCAyNS44Njg1IDIxLjE4NDQgMjUuMzg1NVYyNC4yMzVDMjEuMTg0NCAyMy44MjcgMjEuMTAzIDIzLjQxOSAyMC45MDA5IDIyLjk3MzVDMjAuNzM5NiAyMi41MjY1IDIwLjQxNjkgMjIuMTU2IDE5Ljk3MzYgMjEuNzg0QzE5LjUzMDQgMjEuNDEzNSAxOC45MjQxIDIxLjExNjUgMTguMTk3MyAyMC44OTNDMTcuNDcyMSAyMC42NzEgMTYuNTQ0OSAyMC41NiAxNS40MTU2IDIwLjU2QzEzLjE5NzYgMjAuNTYgMTEuNzA0OSAyMC45NjggMTAuODk4MiAyMS44MjE1QzEwLjIwMjQgMjIuNTcxNCA5Ljc5MTU1IDIzLjUxIDkuNzI4MTUgMjQuNDk0NUM5LjcyODE1IDI0LjcxOCA5LjUyNjA3IDI0Ljg2NjUgOS4yODQ4OSAyNC44NjY1SDQuNDQ0ODlDNC4zMjc0NCAyNC44NjU3IDQuMjE1MDIgMjQuODIyNSA0LjEzMTgyIDI0Ljc0NjJDNC4wNDg2MSAyNC42Njk5IDQuMDAxMjggMjQuNTY2NiA0IDI0LjQ1ODVWMjMuMzgxNUM0IDIyLjM0MiA0LjIwMjA3IDIxLjM3NiA0LjY0NTMzIDIwLjQ4NjVDNS4wNDk0OCAxOS41OTQgNS43MzM5MyAxOC43NzY1IDYuNzAxOTMgMTguMTA5QzcuNjMwODIgMTcuNDQgOC44MDA4OSAxNi44ODM1IDEwLjI1MjkgMTYuNTEzQzExLjY2NDEgMTYuMTQxIDEzLjM5ODEgMTUuOTE5IDE1LjQxNTYgMTUuOTE5Wk0yMS4xNDM3IDMyLjIxOEMyMS4xMDY3IDMyLjQwODUgMjEuMDI2NSAzMi41ODk2IDIwLjkwODMgMzIuNzQ5NkMyMC43OTAxIDMyLjkwOTYgMjAuNjM2NSAzMy4wNDQ5IDIwLjQ1NzYgMzMuMTQ2NUMyMC4wOTQyIDMzLjM2ODUgMTkuNzczMiAzMy40Nzk1IDE5LjQ0ODkgMzMuNTkyQzE4Ljc2NDQgMzMuODE0IDE4LjAzNzYgMzQuMDM3NSAxNy4yNzE3IDM0LjI5N0MxNi41MDU4IDM0LjU1NjUgMTUuNzc5IDM0LjgxNzUgMTUuMDkyOSAzNS4wMDJDMTQuMjg2MiAzNS4yNjMgMTMuNTIwMyAzNS40ODUgMTIuODM0MiAzNS43NDQ1QzEyLjI4NDcgMzUuOTY1NyAxMS43Njk1IDM2LjI1MzIgMTEuMzAyNCAzNi41OTk1QzEwLjg5ODIgMzYuOTMyNSAxMC41MzQ4IDM3LjM0MiAxMC4yMTA1IDM3Ljg2MUM5Ljg4OTQ4IDM4LjM4MTUgOS43MjgxNSAzOS4wMTMgOS43MjgxNSAzOS43OTE1QzkuNzI4MTUgNDEuMzUxNSAxMC4xMzA3IDQyLjUwMiAxMC45MzczIDQzLjI4MkMxMS43NDQgNDQuMDI0NSAxMy4yMzY3IDQ0LjQzMjUgMTUuNDE1NiA0NC40MzI1QzE3LjYzMzUgNDQuNDMyNSAxOS4xNjcgNDQuMDI0NSAxOS45NzM2IDQzLjI0NDVDMjAuNzgwMyA0Mi40Mjg1IDIxLjE4NDQgNDEuMzE0IDIxLjE4NDQgMzkuODI5VjMyLjIxOEgyMS4xNDM3Wk05OC41NTExIDE1LjkxOUMxMDIuNDYyIDE1LjkxOSAxMDUuMzI3IDE2LjYyNCAxMDcuMTgzIDE4LjAzNEMxMDguOTk5IDE5LjQ0NTUgMTA5LjkyNiAyMS4yMjkgMTA5LjkyNiAyMy4zNDRWNDEuNTM3NUMxMDkuOTI2IDQyLjI4IDEwOS43NjUgNDMuMDk3NSAxMDkuNDgzIDQzLjk1MUMxMDkuMTk5IDQ0Ljg0MiAxMDguNjM1IDQ1LjY1OCAxMDcuNzg4IDQ2LjM2NDVDMTA2Ljk0IDQ3LjEwNyAxMDUuNzcgNDcuNjk5NSAxMDQuMzE4IDQ4LjIyQzEwMi44NjggNDguNzAzIDEwMC45MyA0OC45NjI1IDk4LjU5MTkgNDguOTYyNUM5Ni4yMTI2IDQ4Ljk2MjUgOTQuMzE1NyA0OC43MDMgOTIuODYzNyA0OC4yMkM5MS40MTE3IDQ3LjczNyA5MC4yNCA0Ny4xMDcgODkuMzk0MiA0Ni4zNjQ1Qzg4LjU0NjggNDUuNjIyIDg3Ljk4MyA0NC44MDQ1IDg3LjY5OTQgNDMuOTQ5NUM4Ny40MTc1IDQzLjA2IDg3LjI1NjIgNDIuMjQyNSA4Ny4yNTYyIDQxLjUzNzVWMzguNjQyNUM4Ny4yNTYyIDM3LjA4MjUgODcuNjk5NCAzNS42NzEgODguNTQ2OCAzNC40MDhDODkuNDM1IDMzLjE0NjUgOTAuNjQ0MiAzMi4yMTggOTIuMjU3NSAzMS42OTc1QzkzLjA2NDIgMzEuNDM4IDkzLjk1MjMgMzEuMTc4NSA5NS4wMDE4IDMwLjg0NEM5Ni4wMDg5IDMwLjUwOTUgOTcuMDE3NiAzMC4yMTQgOTcuOTg1NiAyOS44NzhDOTguOTUzNiAyOS41ODEgOTkuNzYxOSAyOS4yODQgMTAwLjQ4NyAyOS4wNjJDMTAxLjIxMiAyOC44MDI1IDEwMS42NTcgMjguNjkgMTAxLjgxOSAyOC42MTY1QzEwMS45OCAyOC41NDE1IDEwMi4yMjEgMjguNDMwNSAxMDIuNTAzIDI4LjI4MkMxMDIuNzg3IDI4LjEzMzUgMTAzLjA2OCAyNy45MTE1IDEwMy4zNSAyNy42NTJDMTAzLjYzNCAyNy4zNTM1IDEwMy44MzQgMjcuMDIwNSAxMDQuMDM2IDI2LjY4NkMxMDQuMjM5IDI2LjMxNCAxMDQuMzE4IDI1Ljg2ODUgMTA0LjMxOCAyNS4zODU1VjI0LjIzNUMxMDQuMzE4IDIzLjgyNyAxMDQuMjM3IDIzLjQxOSAxMDQuMDM2IDIyLjk3MzVDMTAzLjg3NSAyMi41MjY1IDEwMy41NTIgMjIuMTU2IDEwMy4xMDggMjEuNzg0QzEwMi42NjYgMjEuNDEzNSAxMDIuMDYgMjEuMTE2NSAxMDEuMzM1IDIwLjg5M0MxMDAuNjA4IDIwLjY3MSA5OS42ODA1IDIwLjU2IDk4LjU1MTEgMjAuNTZDOTYuMzMxNiAyMC41NiA5NC44NDA1IDIwLjk2OCA5NC4wMzM4IDIxLjgyMTVDOTMuMzM3OSAyMi41NzE0IDkyLjkyNzEgMjMuNTEgOTIuODYzNyAyNC40OTQ1QzkyLjg2MzcgMjQuNzE4IDkyLjY2MTYgMjQuODY2NSA5Mi40MTg4IDI0Ljg2NjVIODcuNTc4OEM4Ny40NjE3IDI0Ljg2NTMgODcuMzQ5NiAyNC44MjIgODcuMjY2OCAyNC43NDU3Qzg3LjE4MzkgMjQuNjY5NCA4Ny4xMzY4IDI0LjU2NjMgODcuMTM1NiAyNC40NTg1VjIzLjM4MTVDODcuMTM1NiAyMi4zNDIgODcuMzM3NiAyMS4zNzYgODcuNzgwOSAyMC40ODY1Qzg4LjE4MzQgMTkuNTk0IDg4Ljg2OTUgMTguNzc2NSA4OS44Mzc1IDE4LjEwOUM5MC43NjY0IDE3LjQ0IDkxLjkzNDggMTYuODgzNSA5My4zODY4IDE2LjUxM0M5NC44NDA1IDE2LjE0MSA5Ni41MzM2IDE1LjkxOSA5OC41NTExIDE1LjkxOVpNMTA0LjI3OSAzMi4yMThDMTA0LjI0MiAzMi40MDg1IDEwNC4xNjIgMzIuNTg5NiAxMDQuMDQ0IDMyLjc0OTZDMTAzLjkyNiAzMi45MDk2IDEwMy43NzIgMzMuMDQ0OSAxMDMuNTkzIDMzLjE0NjVDMTAzLjIzIDMzLjM2ODUgMTAyLjkwOSAzMy40Nzk1IDEwMi41ODQgMzMuNTkyQzEwMS45IDMzLjgxNCAxMDEuMTczIDM0LjAzNzUgMTAwLjQwNiAzNC4yOTdDOTkuNjM5NyAzNC41NTY1IDk4LjkxNDUgMzQuODE3NSA5OC4yMjg0IDM1LjAwMkM5Ny40MjE4IDM1LjI2MyA5Ni42NTQyIDM1LjQ4NSA5NS45Njk4IDM1Ljc0NDVDOTUuNDE5NiAzNS45NjU2IDk0LjkwMzkgMzYuMjUzMSA5NC40MzYzIDM2LjU5OTVDOTQuMDMzOCAzNi45MzI1IDkzLjY3MDQgMzcuMzQyIDkzLjM0NzcgMzcuODYxQzkzLjAyNSAzOC4zODE1IDkyLjg2MzcgMzkuMDEzIDkyLjg2MzcgMzkuNzkxNUM5Mi44NjM3IDQxLjM1MTUgOTMuMjY2MiA0Mi41MDIgOTQuMDcyOSA0My4yODJDOTQuODc5NiA0NC4wMjQ1IDk2LjM3MjMgNDQuNDMyNSA5OC41NTExIDQ0LjQzMjVDMTAwLjc2OSA0NC40MzI1IDEwMi4zMDMgNDQuMDI0NSAxMDMuMTA5IDQzLjI0NDVDMTAzLjkxNiA0Mi40Mjg1IDEwNC4zMTggNDEuMzE0IDEwNC4zMTggMzkuODI5VjMyLjIxOEgxMDQuMjc5WlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMi4wMzQ1IDRIMzYuODM1NEMzNy4wNzY2IDQgMzcuMjc4NyA0LjE4NiAzNy4yNzg3IDQuNDA4VjQ4LjYyOEMzNy4yNzc4IDQ4LjczNjEgMzcuMjMwOSA0OC44Mzk2IDM3LjE0OCA0OC45MTYyQzM3LjA2NTEgNDguOTkyOCAzNi45NTI5IDQ5LjAzNjMgMzYuODM1NCA0OS4wMzc1SDMyLjAzNDVDMzEuOTE3MSA0OS4wMzYzIDMxLjgwNDggNDguOTkyOCAzMS43MjE5IDQ4LjkxNjJDMzEuNjM5IDQ4LjgzOTYgMzEuNTkyMSA0OC43MzYxIDMxLjU5MTMgNDguNjI4VjQuNDA4QzMxLjU5MTMgNC4xODYgMzEuNzkxNyA0IDMyLjAzNDUgNFpNNjUuMDI5NiA0MC4zODU1VjQxLjVDNjUuMDI5NiA0MS45ODMgNjQuOTQ5OCA0Mi42NTA1IDY0Ljc0NzcgNDMuNTA1NUM2NC41ODY0IDQ0LjMyMTUgNjQuMTAyNCA0NS4xNzUgNjMuMzM2NCA0NS45OTI1QzYyLjU3MDUgNDYuODEgNjEuNDQxMiA0Ny41NTI1IDU5LjkwNzcgNDguMTQ2NUM1OC4zNzU5IDQ4Ljc0MDUgNTYuMjc2OSA0OS4wMzc1IDUzLjU3NSA0OS4wMzc1QzUwLjg3MTQgNDkuMDM3NSA0OC43NzQxIDQ4Ljc0MDUgNDcuMjQyMiA0OC4xNDY1QzQ1LjcxMDQgNDcuNTUyNSA0NC41Nzk0IDQ2Ljg0NiA0My44MTM1IDQ1Ljk5MjVDNDMuMDQ3NiA0NS4xNzUgNDIuNTYxOSA0NC4zMjE1IDQyLjQwMDYgNDMuNDY4QzQyLjIzOTMgNDIuNjEzIDQyLjExODcgNDEuOTgzIDQyLjExODcgNDEuNVYxNi4zMjdDNDIuMTE4NyAxNi4xMDM1IDQyLjMyMDcgMTUuOTE5IDQyLjU2MTkgMTUuOTE5SDQ3LjM2MjhDNDcuNjA0IDE1LjkxOSA0Ny44MDYxIDE2LjEwMzUgNDcuODA2MSAxNi4zMjdWMzkuOTA0QzQ3LjgwNjEgNDAuNjg0IDQ3LjkyNjcgNDEuMjM5IDQ4LjA0ODkgNDEuNjg2QzQ4LjE2OTUgNDIuMTMxNSA0OC40MTA3IDQyLjU3NyA0OC43NzQxIDQyLjk0NzVDNDkuMTM3NSA0My4zNTcgNDkuNzAzIDQzLjY5IDUwLjQ2ODkgNDMuOTUxQzUxLjE5NDEgNDQuMjEwNSA1Mi4yMDI4IDQ0LjM1OSA1My40NTQ0IDQ0LjM1OUM1NC43NDUgNDQuMzU5IDU1Ljc5MjkgNDQuMjA5IDU2LjU1ODggNDMuOTUxQzU3LjMyNDcgNDMuNjkgNTcuODkwMiA0My4zNTcgNTguMjk0NCA0Mi45ODVDNTguNjk2OSA0Mi42MTQ1IDU4Ljk3ODggNDIuMjA1IDU5LjEwMSA0MS43NTk1QzU5LjIyMTYgNDEuMzE0IDU5LjM4MyA0MC45NDM1IDU5LjM4MyAzOS44NjY1VjE2LjMyN0M1OS4zODMgMTYuMTAzNSA1OS41ODUgMTUuOTE5IDU5LjgyNjIgMTUuOTE5SDY0LjYyNzFDNjQuODY4MyAxNS45MTkgNjUuMDcwNCAxNi4xMDM1IDY1LjA3MDQgMTYuMzI3VjQwLjM4N0g2NS4wMjk2VjQwLjM4NTVaTTgxLjM2NjcgMTUuOTE5SDg0LjU5MzNDODQuODc2OSAxNS45MTkgODUuMDc3MyAxNi4xNzg1IDg0Ljk5NzUgMTYuNDM4TDgzLjkwODkgMjAuMjk5QzgzLjg2ODIgMjAuNDg1IDgzLjY2NjEgMjAuNTk2IDgzLjUwNDcgMjAuNTk2SDgxLjI0NjFDODAuMDM1MyAyMC41OTYgNzkuMDY3MyAyMC43NDYgNzguMzAxMyAyMS4wNDE1Qzc3LjU3NjIgMjEuMzM4NSA3Ni45Njk5IDIxLjY3MyA3Ni41Njc0IDIyLjA4MUM3Ni4yMDkyIDIyLjQyNzIgNzUuOTQ2NiAyMi44NDc1IDc1LjgwMTUgMjMuMzA2NUM3NS42NzkzIDIzLjc1MiA3NS42Mzg1IDI0LjE2MTUgNzUuNjM4NSAyNC41MzJWNDguNjY1NUM3NS42Mzc3IDQ4Ljc3MzYgNzUuNTkwOCA0OC44NzcxIDc1LjUwNzkgNDguOTUzN0M3NS40MjUgNDkuMDMwMyA3NS4zMTI3IDQ5LjA3MzggNzUuMTk1MyA0OS4wNzVINzAuMzU1M0M3MC4yMzc4IDQ5LjA3MzggNzAuMTI1NiA0OS4wMzAzIDcwLjA0MjcgNDguOTUzN0M2OS45NTk4IDQ4Ljg3NzEgNjkuOTEyOCA0OC43NzM2IDY5LjkxMiA0OC42NjU1VjIzLjQ5MjVDNjkuOTEyIDIzLjA0NyA2OS45OTE5IDIyLjM3OCA3MC4xOTM5IDIxLjUyNDVDNzAuMzU1MyAyMC42Njk1IDcwLjgzOTMgMTkuODUzNSA3MS42MDUyIDE5QzcyLjM3MTEgMTguMTgyNSA3My41MDIxIDE3LjQ0IDc1LjAzMzkgMTYuODQ2Qzc2LjUyNjcgMTYuMjE2IDc4LjY2NDcgMTUuOTE5IDgxLjM2NjcgMTUuOTE5Wk0xNS40MTU2IDE1LjkxOUMxOS4zMjY3IDE1LjkxOSAyMi4xOTE2IDE2LjYyNCAyNC4wNDc3IDE4LjAzNEMyNS44NjMxIDE5LjQ0NTUgMjYuNzkwNCAyMS4yMjkgMjYuNzkwNCAyMy4zNDRWNDEuNTM3NUMyNi43OTA0IDQyLjI4IDI2LjYyOSA0My4wOTc1IDI2LjM0NzEgNDMuOTUxQzI2LjA2NTIgNDQuODQyIDI1LjQ5OTcgNDUuNjU4IDI0LjY1MjMgNDYuMzY0NUMyMy44MDQ5IDQ3LjEwNyAyMi42MzY0IDQ3LjY5OTUgMjEuMTg0NCA0OC4yMkMxOS43MzA4IDQ4LjcwMyAxNy43OTQ4IDQ4Ljk2MjUgMTUuNDU2MyA0OC45NjI1QzEzLjA3NyA0OC45NjI1IDExLjE4MDEgNDguNzAzIDkuNzI4MTUgNDguMjJDOC4yNzYxNSA0Ny43MzcgNy4xMDQ0NCA0Ny4xMDcgNi4yNTg2NyA0Ni4zNjQ1QzUuNDExMjYgNDUuNjIyIDQuODQ3NDEgNDQuODA0NSA0LjU2Mzg1IDQzLjk0OTVDNC4yODE5MyA0My4wNiA0LjEyMDU5IDQyLjI0MjUgNC4xMjA1OSA0MS41Mzc1VjM4LjY0MjVDNC4xMjA1OSAzNy4wODI1IDQuNTY1NDggMzUuNjcxIDUuNDExMjYgMzQuNDA4QzYuMjk5NDEgMzMuMTQ2NSA3LjUwODU5IDMyLjIxOCA5LjEyMzU2IDMxLjY5NzVDOS45MzAyMiAzMS40MzggMTAuODE4NCAzMS4xNzg1IDExLjg2NjIgMzAuODQ0QzEyLjg3NSAzMC41MDk1IDEzLjg4MjEgMzAuMjE0IDE0Ljg1MDEgMjkuODc4QzE1LjgxODEgMjkuNTgxIDE2LjYyNjQgMjkuMjg0IDE3LjM1MTYgMjkuMDYyQzE4LjA3ODQgMjguODAyNSAxOC41MjE2IDI4LjY5IDE4LjY4MyAyOC42MTY1QzE4Ljg0NDMgMjguNTQxNSAxOS4wODU1IDI4LjQzMDUgMTkuMzY3NCAyOC4yODJDMTkuNjUxIDI4LjEzMzUgMTkuOTMyOSAyNy45MTE1IDIwLjIxNDggMjcuNjUyQzIwLjQ5ODQgMjcuMzUzNSAyMC43MDA0IDI3LjAyMDUgMjAuOTAwOSAyNi42ODZDMjEuMTAzIDI2LjMxNCAyMS4xODQ0IDI1Ljg2ODUgMjEuMTg0NCAyNS4zODU1VjI0LjIzNUMyMS4xODQ0IDIzLjgyNyAyMS4xMDMgMjMuNDE5IDIwLjkwMDkgMjIuOTczNUMyMC43Mzk2IDIyLjUyNjUgMjAuNDE2OSAyMi4xNTYgMTkuOTczNiAyMS43ODRDMTkuNTMwNCAyMS40MTM1IDE4LjkyNDEgMjEuMTE2NSAxOC4xOTczIDIwLjg5M0MxNy40NzIxIDIwLjY3MSAxNi41NDQ5IDIwLjU2IDE1LjQxNTYgMjAuNTZDMTMuMTk3NiAyMC41NiAxMS43MDQ5IDIwLjk2OCAxMC44OTgyIDIxLjgyMTVDMTAuMjAyNCAyMi41NzE0IDkuNzkxNTUgMjMuNTEgOS43MjgxNSAyNC40OTQ1QzkuNzI4MTUgMjQuNzE4IDkuNTI2MDcgMjQuODY2NSA5LjI4NDg5IDI0Ljg2NjVINC40NDQ4OUM0LjMyNzQ0IDI0Ljg2NTcgNC4yMTUwMiAyNC44MjI1IDQuMTMxODIgMjQuNzQ2MkM0LjA0ODYxIDI0LjY2OTkgNC4wMDEyOCAyNC41NjY2IDQgMjQuNDU4NVYyMy4zODE1QzQgMjIuMzQyIDQuMjAyMDcgMjEuMzc2IDQuNjQ1MzMgMjAuNDg2NUM1LjA0OTQ4IDE5LjU5NCA1LjczMzkzIDE4Ljc3NjUgNi43MDE5MyAxOC4xMDlDNy42MzA4MiAxNy40NCA4LjgwMDg5IDE2Ljg4MzUgMTAuMjUyOSAxNi41MTNDMTEuNjY0MSAxNi4xNDEgMTMuMzk4MSAxNS45MTkgMTUuNDE1NiAxNS45MTlaTTIxLjE0MzcgMzIuMjE4QzIxLjEwNjcgMzIuNDA4NSAyMS4wMjY1IDMyLjU4OTYgMjAuOTA4MyAzMi43NDk2QzIwLjc5MDEgMzIuOTA5NiAyMC42MzY1IDMzLjA0NDkgMjAuNDU3NiAzMy4xNDY1QzIwLjA5NDIgMzMuMzY4NSAxOS43NzMyIDMzLjQ3OTUgMTkuNDQ4OSAzMy41OTJDMTguNzY0NCAzMy44MTQgMTguMDM3NiAzNC4wMzc1IDE3LjI3MTcgMzQuMjk3QzE2LjUwNTggMzQuNTU2NSAxNS43NzkgMzQuODE3NSAxNS4wOTI5IDM1LjAwMkMxNC4yODYyIDM1LjI2MyAxMy41MjAzIDM1LjQ4NSAxMi44MzQyIDM1Ljc0NDVDMTIuMjg0NyAzNS45NjU3IDExLjc2OTUgMzYuMjUzMiAxMS4zMDI0IDM2LjU5OTVDMTAuODk4MiAzNi45MzI1IDEwLjUzNDggMzcuMzQyIDEwLjIxMDUgMzcuODYxQzkuODg5NDggMzguMzgxNSA5LjcyODE1IDM5LjAxMyA5LjcyODE1IDM5Ljc5MTVDOS43MjgxNSA0MS4zNTE1IDEwLjEzMDcgNDIuNTAyIDEwLjkzNzMgNDMuMjgyQzExLjc0NCA0NC4wMjQ1IDEzLjIzNjcgNDQuNDMyNSAxNS40MTU2IDQ0LjQzMjVDMTcuNjMzNSA0NC40MzI1IDE5LjE2NyA0NC4wMjQ1IDE5Ljk3MzYgNDMuMjQ0NUMyMC43ODAzIDQyLjQyODUgMjEuMTg0NCA0MS4zMTQgMjEuMTg0NCAzOS44MjlWMzIuMjE4SDIxLjE0MzdaTTk4LjU1MTEgMTUuOTE5QzEwMi40NjIgMTUuOTE5IDEwNS4zMjcgMTYuNjI0IDEwNy4xODMgMTguMDM0QzEwOC45OTkgMTkuNDQ1NSAxMDkuOTI2IDIxLjIyOSAxMDkuOTI2IDIzLjM0NFY0MS41Mzc1QzEwOS45MjYgNDIuMjggMTA5Ljc2NSA0My4wOTc1IDEwOS40ODMgNDMuOTUxQzEwOS4xOTkgNDQuODQyIDEwOC42MzUgNDUuNjU4IDEwNy43ODggNDYuMzY0NUMxMDYuOTQgNDcuMTA3IDEwNS43NyA0Ny42OTk1IDEwNC4zMTggNDguMjJDMTAyLjg2OCA0OC43MDMgMTAwLjkzIDQ4Ljk2MjUgOTguNTkxOSA0OC45NjI1Qzk2LjIxMjYgNDguOTYyNSA5NC4zMTU3IDQ4LjcwMyA5Mi44NjM3IDQ4LjIyQzkxLjQxMTcgNDcuNzM3IDkwLjI0IDQ3LjEwNyA4OS4zOTQyIDQ2LjM2NDVDODguNTQ2OCA0NS42MjIgODcuOTgzIDQ0LjgwNDUgODcuNjk5NCA0My45NDk1Qzg3LjQxNzUgNDMuMDYgODcuMjU2MiA0Mi4yNDI1IDg3LjI1NjIgNDEuNTM3NVYzOC42NDI1Qzg3LjI1NjIgMzcuMDgyNSA4Ny42OTk0IDM1LjY3MSA4OC41NDY4IDM0LjQwOEM4OS40MzUgMzMuMTQ2NSA5MC42NDQyIDMyLjIxOCA5Mi4yNTc1IDMxLjY5NzVDOTMuMDY0MiAzMS40MzggOTMuOTUyMyAzMS4xNzg1IDk1LjAwMTggMzAuODQ0Qzk2LjAwODkgMzAuNTA5NSA5Ny4wMTc2IDMwLjIxNCA5Ny45ODU2IDI5Ljg3OEM5OC45NTM2IDI5LjU4MSA5OS43NjE5IDI5LjI4NCAxMDAuNDg3IDI5LjA2MkMxMDEuMjEyIDI4LjgwMjUgMTAxLjY1NyAyOC42OSAxMDEuODE5IDI4LjYxNjVDMTAxLjk4IDI4LjU0MTUgMTAyLjIyMSAyOC40MzA1IDEwMi41MDMgMjguMjgyQzEwMi43ODcgMjguMTMzNSAxMDMuMDY4IDI3LjkxMTUgMTAzLjM1IDI3LjY1MkMxMDMuNjM0IDI3LjM1MzUgMTAzLjgzNCAyNy4wMjA1IDEwNC4wMzYgMjYuNjg2QzEwNC4yMzkgMjYuMzE0IDEwNC4zMTggMjUuODY4NSAxMDQuMzE4IDI1LjM4NTVWMjQuMjM1QzEwNC4zMTggMjMuODI3IDEwNC4yMzcgMjMuNDE5IDEwNC4wMzYgMjIuOTczNUMxMDMuODc1IDIyLjUyNjUgMTAzLjU1MiAyMi4xNTYgMTAzLjEwOCAyMS43ODRDMTAyLjY2NiAyMS40MTM1IDEwMi4wNiAyMS4xMTY1IDEwMS4zMzUgMjAuODkzQzEwMC42MDggMjAuNjcxIDk5LjY4MDUgMjAuNTYgOTguNTUxMSAyMC41NkM5Ni4zMzE2IDIwLjU2IDk0Ljg0MDUgMjAuOTY4IDk0LjAzMzggMjEuODIxNUM5My4zMzc5IDIyLjU3MTQgOTIuOTI3MSAyMy41MSA5Mi44NjM3IDI0LjQ5NDVDOTIuODYzNyAyNC43MTggOTIuNjYxNiAyNC44NjY1IDkyLjQxODggMjQuODY2NUg4Ny41Nzg4Qzg3LjQ2MTcgMjQuODY1MyA4Ny4zNDk2IDI0LjgyMiA4Ny4yNjY4IDI0Ljc0NTdDODcuMTgzOSAyNC42Njk0IDg3LjEzNjggMjQuNTY2MyA4Ny4xMzU2IDI0LjQ1ODVWMjMuMzgxNUM4Ny4xMzU2IDIyLjM0MiA4Ny4zMzc2IDIxLjM3NiA4Ny43ODA5IDIwLjQ4NjVDODguMTgzNCAxOS41OTQgODguODY5NSAxOC43NzY1IDg5LjgzNzUgMTguMTA5QzkwLjc2NjQgMTcuNDQgOTEuOTM0OCAxNi44ODM1IDkzLjM4NjggMTYuNTEzQzk0Ljg0MDUgMTYuMTQxIDk2LjUzMzYgMTUuOTE5IDk4LjU1MTEgMTUuOTE5Wk0xMDQuMjc5IDMyLjIxOEMxMDQuMjQyIDMyLjQwODUgMTA0LjE2MiAzMi41ODk2IDEwNC4wNDQgMzIuNzQ5NkMxMDMuOTI2IDMyLjkwOTYgMTAzLjc3MiAzMy4wNDQ5IDEwMy41OTMgMzMuMTQ2NUMxMDMuMjMgMzMuMzY4NSAxMDIuOTA5IDMzLjQ3OTUgMTAyLjU4NCAzMy41OTJDMTAxLjkgMzMuODE0IDEwMS4xNzMgMzQuMDM3NSAxMDAuNDA2IDM0LjI5N0M5OS42Mzk3IDM0LjU1NjUgOTguOTE0NSAzNC44MTc1IDk4LjIyODQgMzUuMDAyQzk3LjQyMTggMzUuMjYzIDk2LjY1NDIgMzUuNDg1IDk1Ljk2OTggMzUuNzQ0NUM5NS40MTk2IDM1Ljk2NTYgOTQuOTAzOSAzNi4yNTMxIDk0LjQzNjMgMzYuNTk5NUM5NC4wMzM4IDM2LjkzMjUgOTMuNjcwNCAzNy4zNDIgOTMuMzQ3NyAzNy44NjFDOTMuMDI1IDM4LjM4MTUgOTIuODYzNyAzOS4wMTMgOTIuODYzNyAzOS43OTE1QzkyLjg2MzcgNDEuMzUxNSA5My4yNjYyIDQyLjUwMiA5NC4wNzI5IDQzLjI4MkM5NC44Nzk2IDQ0LjAyNDUgOTYuMzcyMyA0NC40MzI1IDk4LjU1MTEgNDQuNDMyNUMxMDAuNzY5IDQ0LjQzMjUgMTAyLjMwMyA0NC4wMjQ1IDEwMy4xMDkgNDMuMjQ0NUMxMDMuOTE2IDQyLjQyODUgMTA0LjMxOCA0MS4zMTQgMTA0LjMxOCAzOS44MjlWMzIuMjE4SDEwNC4yNzlaXCIgc3Ryb2tlPVwiIzI1MkI1MVwiIHN0cm9rZVdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTg2Ljg0NjkgNjIuMzY4Qzg0Ljg5MTcgNjMuMDE0MiA4My4yMTEgNjIuOTM4IDgxLjgwNSA2Mi4xMzkzQzgwLjM5ODkgNjEuMzQwNiA3OS4zMDk1IDU5Ljk1MDYgNzguNTM2NSA1Ny45Njk0Qzc3Ljg5MzQgNTYuMzIwOSA3Ny42ODk1IDU0LjY4MDkgNzcuOTI0OCA1My4wNDkzQzc4LjE2MDEgNTEuNDE3OCA3OC44MTE1IDQ5Ljk3MzIgNzkuODc5IDQ4LjcxNTRDODAuOTQwNiA0Ny40NDI1IDgyLjMzNCA0Ni41MjEgODQuMDU5MiA0NS45NTA3Qzg1LjczNTEgNDUuMzk2OCA4Ny4yODA3IDQ1LjQ4MzUgODguNjk2IDQ2LjIxMDlDOTAuMTIxOSA0Ni45MTc3IDkxLjI0MTkgNDguMzE0NiA5Mi4wNTYxIDUwLjQwMTdDOTIuNDkyOCA1MS41MjA5IDkyLjcwOTkgNTIuNjk1NSA5Mi43MDc1IDUzLjkyNTZDOTIuNzA1MSA1NS4xNTU4IDkyLjQ3NzggNTYuMzMyMiA5Mi4wMjU0IDU3LjQ1NDlDOTMuODk0IDU4LjIwMzIgOTQuODU3OSA1OC42NTI5IDk0LjkxNjkgNTguODA0MkM5NS4wNzAzIDU5LjE5NzQgOTUuMDU5OCA1OS41NTA5IDk0Ljg4NTQgNTkuODY0NkM5NC43MzMzIDYwLjE4ODEgOTQuNDI3MyA2MC40MjU4IDkzLjk2NzIgNjAuNTc3OUM5My42MjIyIDYwLjY5MiA5Mi41MzAxIDYwLjQxMjcgOTAuNjkwOSA1OS43NEM4OS42ODkyIDYwLjk3NiA4OC40MDc5IDYxLjg1MiA4Ni44NDY5IDYyLjM2OFpNODYuMzk1NCA2MC4yMTIyQzg3LjEwMiA1OS45Nzg3IDg3LjcxMDUgNTkuNDcwMiA4OC4yMjEgNTguNjg2OEM4Ny40OTkzIDU4LjMxMDcgODYuNzY1MSA1Ny44Nzg5IDg2LjAxODQgNTcuMzkxNUM4NS4yODgyIDU2Ljg5ODcgODQuODg3NyA1Ni41NjE2IDg0LjgxNjkgNTYuMzgwMUM4NC42NTc2IDU1Ljk3MTcgODQuNjMwNiA1NS42NjQ4IDg0LjczNTkgNTUuNDU5MkM4NC44NTE4IDU1LjIzMzEgODUuMTA2OCA1NS4wNTQ5IDg1LjUwMTIgNTQuOTI0NkM4NS41NTA1IDU0LjkwODMgODUuOTkzNSA1NS4wNjkyIDg2LjgzMDMgNTUuNDA3M0M4Ny4xNjUzIDU1LjU1MjcgODcuOTIzOSA1NS44NTY4IDg5LjEwNjIgNTYuMzE5N0M4OS4yNjE5IDU1LjQ4MjggODkuMjkyNiA1NC42MTA1IDg5LjE5ODEgNTMuNzAyNkM4OS4xMTQyIDUyLjc3NDIgODguODk1MiA1MS44NTYzIDg4LjU0MTEgNTAuOTQ4OUM4OC4xMjgxIDQ5Ljg5MDIgODcuNTg3MSA0OS4xMjE1IDg2LjkxNzkgNDguNjQyNkM4Ni4yNjUzIDQ4LjE1ODMgODUuNDc4OSA0OC4wNjgyIDg0LjU1ODcgNDguMzcyM0M4My41MDcyIDQ4LjcxOTkgODIuNzEyMiA0OS4zOTI0IDgyLjE3MzkgNTAuMzg5OUM4MS42MzU2IDUxLjM4NzQgODEuMzU3NiA1Mi41MjkzIDgxLjM0MDEgNTMuODE1N0M4MS4zMTY3IDU1LjA4NjkgODEuNTI5MiA1Ni4yOTcyIDgxLjk3NzYgNTcuNDQ2NkM4Mi4yNDkgNTguMTQyMyA4Mi42MzY1IDU4LjczMTQgODMuMTQgNTkuMjEzN0M4My42NTQxIDU5LjY3NTYgODQuMjA2IDU5Ljk5NjggODQuNzk1OSA2MC4xNzc1Qzg1LjM4NTggNjAuMzU4MSA4NS45MTg5IDYwLjM2OTcgODYuMzk1NCA2MC4yMTIyWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMDUuNjQ3IDU1LjUzOTFDMTA1LjY4MiA1NS44MTc5IDEwNS42MDIgNTYuMDQwNyAxMDUuNDA3IDU2LjIwNzVDMTA1LjIxOSA1Ni4zODk0IDEwNC45MzUgNTYuNTQyOCAxMDQuNTU3IDU2LjY2NzdDMTAzLjQyNCA1Ny4wNDI0IDEwMi43NjUgNTYuOTk1NCAxMDIuNTgzIDU2LjUyNjVMMTAyLjM5NCA1NS42MTU2QzEwMi4wNTggNTYuMDg1MyAxMDEuNjQgNTYuNTgyMSAxMDEuMTM5IDU3LjEwNjFDMTAwLjYzOSA1Ny42MyAxMDAuMTgzIDU3Ljk1OTkgOTkuNzcyMyA1OC4wOTU3Qzk3LjM0MDUgNTguODk5NSA5NS44Mzg1IDU4LjU2NzggOTUuMjY2MiA1Ny4xMDA4Qzk0LjI5MjYgNTQuNjA1NCA5NC4wNDk4IDUxLjYyOTQgOTQuNTM3NyA0OC4xNzI5Qzk0LjU5OTIgNDcuNzU5OSA5NC43MDcyIDQ3LjQ0MjQgOTQuODYxOCA0Ny4yMjA2Qzk1LjAzMjggNDYuOTkzMyA5NS4zODk0IDQ2Ljc5MDEgOTUuOTMxNiA0Ni42MTA4Qzk2LjUwNjcgNDYuNDIwOCA5Ni45NjM0IDQ2LjM1NTIgOTcuMzAxOCA0Ni40MTQxQzk3LjY1MDYgNDYuNDUyNCA5Ny44NjM0IDQ2LjU2OTkgOTcuOTQwMSA0Ni43NjY1Qzk3Ljk1NzggNDYuODExOSA5Ny45MjA1IDQ2Ljk3NzkgOTcuODI4MyA0Ny4yNjQ1Qzk3LjcyNDMgNDcuNTIwOCA5Ny42NDQ5IDQ3Ljc2OSA5Ny41OTAxIDQ4LjAwOTFDOTYuOTcyIDUwLjg5NCA5Ny4xMDI1IDUzLjQ2MzIgOTcuOTgxNiA1NS43MTY3Qzk4LjA1ODMgNTUuOTEzMyA5OC4yMDgzIDU2LjA2MDEgOTguNDMxNiA1Ni4xNTdDOTguNjU1IDU2LjI1MzkgOTguODMyMyA1Ni4yODA3IDk4Ljk2MzggNTYuMjM3MkM5OS4zMjUzIDU2LjExNzcgOTkuODcxMiA1NS43NTggMTAwLjYwMiA1NS4xNThDMTAxLjM0OSA1NC41NTI1IDEwMS44ODcgNTQuMDA3NCAxMDIuMjE4IDUzLjUyMjZMMTAxLjk5NCA1MS41MjIyQzEwMS43MyA0OS4xMzM3IDEwMS41NzQgNDcuNjY1NSAxMDEuNTI3IDQ3LjExNzVDMTAxLjQ3MiA0Ni40NTI4IDEwMS41MSA0NS44ODUzIDEwMS42NDIgNDUuNDE0OUMxMDEuNzg0IDQ0LjkyMzkgMTAyLjE2OCA0NC41NzUyIDEwMi43OTIgNDQuMzY4OEMxMDMuNjYzIDQ0LjA4MSAxMDQuMTkzIDQ0LjE3OSAxMDQuMzgyIDQ0LjY2M0MxMDQuNDExIDQ0LjczODYgMTA0LjQyNSA0NC44NDUxIDEwNC40MjMgNDQuOTgyNEMxMDQuNDMxIDQ1LjA5OTEgMTA0LjQ0MiA0NS4xOTggMTA0LjQ1NSA0NS4yNzlMMTA0LjkwMyA0OS4yOEMxMDUuMjUzIDUyLjQ1OTUgMTA1LjUwMSA1NC41NDU5IDEwNS42NDcgNTUuNTM5MVpcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTA1LjY0NSA0MC40MDM3QzEwNS40NjIgMzkuOTM0OSAxMDUuNDU2IDM5LjQ2NzQgMTA1LjYyNyAzOS4wMDEyQzEwNS44MTQgMzguNTI5NiAxMDYuMTk1IDM4LjE5ODggMTA2Ljc3IDM4LjAwODdDMTA3LjM3OCAzNy44MDc4IDEwNy45NzEgMzcuODA3OSAxMDguNTUxIDM4LjAwOTFDMTA5LjE0NiAzOC4yMDQ5IDEwOS41MyAzOC41MjIxIDEwOS43MDEgMzguOTYwN0MxMDkuODcyIDM5LjM5OTIgMTA5Ljc5IDM5Ljg1MzQgMTA5LjQ1MyA0MC4zMjNDMTA5LjExNyA0MC43OTI3IDEwOC42NDUgNDEuMTI4IDEwOC4wMzcgNDEuMzI5QzEwNy40NDYgNDEuNTI0NSAxMDYuOTQxIDQxLjUzNzcgMTA2LjUyMiA0MS4zNjg3QzEwNi4xMTUgNDEuMTc5MSAxMDUuODIyIDQwLjg1NzQgMTA1LjY0NSA0MC40MDM3Wk0xMDcuOTY4IDUzLjEzM0MxMDcuODYyIDUyLjg2MDcgMTA3LjUzMSA0OS44OTY4IDEwNi45NzUgNDQuMjQxMUwxMDYuNSA0My40NTA2QzEwNi40MzUgNDMuMjg0MiAxMDYuNDkyIDQzLjEyMDQgMTA2LjY3IDQyLjk1OUMxMDYuODQ4IDQyLjc5NzcgMTA3LjI0MSA0Mi42MTY2IDEwNy44NDkgNDIuNDE1NkMxMDguMzI2IDQyLjI1ODEgMTA4LjcxOCA0Mi4yNjUgMTA5LjAyNiA0Mi40MzY0QzEwOS4zNSA0Mi42MDI0IDEwOS41NzcgNDIuODUxNyAxMDkuNzA3IDQzLjE4NDRDMTA5Ljc0MyA0My4yNzUyIDEwOS43NzMgNDMuNDAxNiAxMDkuOCA0My41NjM3TDExMC43OTIgNTIuNDU1NkwxMTEuMjY4IDUzLjI0NjFDMTExLjMzMiA1My40MTI0IDExMS4yNzYgNTMuNTc2MyAxMTEuMDk4IDUzLjczNzZDMTEwLjkxOSA1My44OTkgMTEwLjUyNiA1NC4wODAxIDEwOS45MTggNTQuMjgxMUMxMDkuMzc2IDU0LjQ2MDMgMTA4Ljk2NyA1NC40MzM0IDEwOC42OSA1NC4yMDAzQzEwOC40MDggNTMuOTUyMiAxMDguMTY3IDUzLjU5NjQgMTA3Ljk2OCA1My4xMzNaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTEyMi4xOTUgNDkuOTkyNUMxMTguMTYgNTEuODIxNCAxMTUuODYyIDUyLjg3MTUgMTE1LjMgNTMuMTQyNkMxMTQuNzE1IDUzLjQwNCAxMTQuNDE1IDUzLjUzNzUgMTE0LjM5OSA1My41NDI5QzExNC4xMDMgNTMuNjQwNyAxMTMuODI1IDUzLjY4OTggMTEzLjU2NiA1My42OTAyQzExMy4yOSA1My42OTYgMTEzLjExMiA1My42NDM5IDExMy4wMzIgNTMuNTMzN0MxMTIuOTY5IDUzLjQ2OSAxMTIuODUgNTMuMzU0NiAxMTIuNjc1IDUzLjE5MDZDMTEyLjUgNTMuMDI2NSAxMTIuMzg2IDUyLjg3NjUgMTEyLjMzMyA1Mi43NDA0QzExMi4yNzkgNTIuNjA0MiAxMTIuMjc5IDUyLjQ4NDggMTEyLjMzMiA1Mi4zODJDMTEyLjM3OSA1Mi4yNjQxIDExMi41MzMgNTIuMTM2MyAxMTIuNzk0IDUxLjk5ODZDMTEzLjA0IDUxLjg2NjQgMTEzLjIxMSA1MS43ODM5IDExMy4zMSA1MS43NTE0QzExMy44MDQgNTAuNzM0NSAxMTQuNDQzIDQ5LjM1MzYgMTE1LjIyOCA0Ny42MDg4QzExNi4zMjcgNDUuMTk2NiAxMTcuMTggNDMuNDEyMiAxMTcuNzg2IDQyLjI1NTdMMTEzLjA0OSA0NC4zMDc5QzExMi41NCA0NC40NzYyIDExMi4xOTQgNDQuMzI2IDExMi4wMTEgNDMuODU3MUMxMTEuODY0IDQzLjQ3OTEgMTExLjg2NCA0My4wNTIxIDExMi4wMTIgNDIuNTc2MkMxMTIuMDUzIDQyLjQ0MzIgMTEyLjY1NSA0Mi4xMDc3IDExMy44MTggNDEuNTY5N0MxMTQuOTggNDEuMDMxNyAxMTYuMjU2IDQwLjQ3MzUgMTE3LjY0NCAzOS44OTUxQzExOS4wNDMgMzkuMjk2MiAxMTkuOTM5IDM4LjkzMTYgMTIwLjMzNCAzOC44MDEzQzEyMC45NTggMzguNTk0OSAxMjEuNCAzOC44MjQ0IDEyMS42NiAzOS40ODk5QzEyMS43MzYgMzkuNjg2NSAxMjEuNzM2IDM5LjkgMTIxLjY1OSA0MC4xMzAzQzEyMS41NzYgNDAuMzQ1NiAxMjEuNDQ1IDQwLjUzMzkgMTIxLjI2NyA0MC42OTUyTDEyMC44OTMgNDEuMzA1NUMxMjAuMzIgNDIuNDUxMSAxMTkuNjMzIDQzLjg5OSAxMTguODMyIDQ1LjY0OTNMMTE2Ljc4NiA0OS45NjIzQzExOS4yNjQgNDguODAxNyAxMjAuODY0IDQ4LjEwMTkgMTIxLjU4NyA0Ny44NjNDMTIyLjIxMiA0Ny42NTY2IDEyMi42NTQgNDcuODg2MSAxMjIuOTEzIDQ4LjU1MTZDMTIzLjAxNCA0OC44MDg3IDEyMi45ODIgNDkuMDgzOCAxMjIuODE4IDQ5LjM3N0MxMjIuNjY1IDQ5LjY0OTcgMTIyLjQ1NyA0OS44NTQ4IDEyMi4xOTUgNDkuOTkyNVpcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTI3LjE0NCA0My4yMzQ2QzEyNy4yMDUgNDMuNjc1NSAxMjcuMTUgNDQuMDA5NiAxMjYuOTc5IDQ0LjIzNjlDMTI2LjgyNCA0NC40NTg3IDEyNi40NzYgNDQuNjU5MyAxMjUuOTMzIDQ0LjgzODVDMTI1LjAxMyA0NS4xNDI2IDEyNC40MzggNDQuOTk5OCAxMjQuMjA4IDQ0LjQxQzEyNC4wNjEgNDQuMDMxOSAxMjMuOTI2IDQzLjQwMTkgMTIzLjgwNSA0Mi41MkMxMjMuNjk0IDQxLjYxNzYgMTIzLjU2NyA0MC40MTMxIDEyMy40MjQgMzguOTA2NUMxMjMuMjMgMzYuODg3NiAxMjMuMDM5IDM1LjIwOTIgMTIyLjg1MSAzMy44NzEzQzEyMi43MjYgMzMuMDc1OSAxMjMuMTY1IDMyLjUxMjYgMTI0LjE2NyAzMi4xODEzQzEyNC42NiAzMi4wMTg0IDEyNS4wNzEgMzEuOTc2NyAxMjUuMzk5IDMyLjA1NjFDMTI1LjcyNiAzMi4xMzU2IDEyNS45MTMgMzIuMzI5OSAxMjUuOTYgMzIuNjM4OUwxMjcuMTQ0IDQzLjIzNDZaTTEyNi40OTUgNDkuMDU4MUMxMjYuMDY3IDQ5LjE5OTMgMTI1LjY0MiA0OS4xNzc5IDEyNS4yMTcgNDguOTkzN0MxMjQuNzg3IDQ4Ljc5NDQgMTI0LjQ5NSA0OC40OTgyIDEyNC4zNDIgNDguMTA0OUMxMjQuMTg5IDQ3LjcxMTcgMTI0LjI0NCA0Ny4yODM2IDEyNC41MDkgNDYuODIwNUMxMjQuNzY3IDQ2LjM0MjMgMTI1LjE4NCA0Ni4wMDgyIDEyNS43NTkgNDUuODE4MUMxMjYuMjY5IDQ1LjY0OTggMTI2Ljc0IDQ1LjYyMiAxMjcuMTc0IDQ1LjczNDhDMTI3LjYwMSA0NS44MzI1IDEyNy45MDQgNDYuMTA4MiAxMjguMDgxIDQ2LjU2MTlDMTI4LjI2MyA0Ny4wMzA3IDEyOC4xODUgNDcuNTE3OCAxMjcuODQ0IDQ4LjAyMzJDMTI3LjUxOSA0OC41MjMxIDEyNy4wNyA0OC44NjgxIDEyNi40OTUgNDkuMDU4MVpcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNODYuOTE4IDQ4LjY0MjVDODYuMjY1MyA0OC4xNTgyIDg1LjQ3ODkgNDguMDY4MSA4NC41NTg4IDQ4LjM3MjNDODMuNTA3MiA0OC43MTk5IDgyLjcxMjMgNDkuMzkyNCA4Mi4xNzM5IDUwLjM4OTlDODEuNjM1NiA1MS4zODc0IDgxLjM1NzcgNTIuNTI5MyA4MS4zNDAxIDUzLjgxNTZDODEuMzE2NyA1NS4wODY5IDgxLjUyOTIgNTYuMjk3MiA4MS45Nzc2IDU3LjQ0NjZDODIuMjQ5IDU4LjE0MjMgODIuNjM2NSA1OC43MzEzIDgzLjE0IDU5LjIxMzdDODMuNjU0MSA1OS42NzU1IDg0LjIwNjEgNTkuOTk2OCA4NC43OTU5IDYwLjE3NzRDODUuMzg1OCA2MC4zNTgxIDg1LjkxOSA2MC4zNjk2IDg2LjM5NTUgNjAuMjEyMUM4Ni41NzUyIDYwLjE1MjggODYuNzQ4NSA2MC4wNzU2IDg2LjkxNTUgNTkuOTgwNkM4Ny40MDUyIDU5LjcwMjIgODcuODQwNCA1OS4yNzA5IDg4LjIyMTEgNTguNjg2N0M4Ny44ODk0IDU4LjUxMzkgODcuNTU1MiA1OC4zMjk0IDg3LjIxODMgNTguMTMzMUM4Ni44MjIgNTcuOTAyMSA4Ni40MjIgNTcuNjU0OSA4Ni4wMTg1IDU3LjM5MTVDODUuMjg4MyA1Ni44OTg3IDg0Ljg4NzggNTYuNTYxNSA4NC44MTcgNTYuMzhDODQuNjU3NiA1NS45NzE3IDg0LjYzMDYgNTUuNjY0NyA4NC43MzYgNTUuNDU5MkM4NC44NTE4IDU1LjIzMzEgODUuMTA2OSA1NS4wNTQ5IDg1LjUwMTIgNTQuOTI0NUM4NS41NTA1IDU0LjkwODIgODUuOTkzNSA1NS4wNjkxIDg2LjgzMDMgNTUuNDA3MkM4Ni45NDU2IDU1LjQ1NzIgODcuMTExMSA1NS41MjYxIDg3LjMyNjcgNTUuNjEzN0M4Ny43Mzc3IDU1Ljc4MDggODguMzMwOCA1Ni4wMTYxIDg5LjEwNjIgNTYuMzE5N0M4OS4yMTU2IDU1LjczMTkgODkuMjYzMyA1NS4xMjY3IDg5LjI0OTIgNTQuNTA0Qzg5LjI0MzMgNTQuMjQgODkuMjI2MyA1My45NzI4IDg5LjE5ODEgNTMuNzAyNkM4OS4xMTQyIDUyLjc3NDIgODguODk1MiA1MS44NTYzIDg4LjU0MTIgNTAuOTQ4OEM4OC4xMjgyIDQ5Ljg5MDIgODcuNTg3MSA0OS4xMjE0IDg2LjkxOCA0OC42NDI1Wk03Ni4wNzA2IDUyLjgyMjdDNzYuMzQ4IDUwLjg5OTUgNzcuMTIzOSA0OS4xNjcgNzguNDAwMiA0Ny42NjExQzc5LjY5MSA0Ni4xMTU2IDgxLjM4NTEgNDUuMDA1MiA4My40MjcgNDQuMzMwM0M4NS41NTEgNDMuNjI4MiA4Ny42NjE4IDQzLjcxMTUgODkuNTk1NyA0NC43MDEzQzkwLjkwMjMgNDUuMzUyMyA5MS45MzA3IDQ2LjM3MTYgOTIuNzM2IDQ3LjY0NjNDOTIuODI4NCA0Ny4xOTQ3IDkyLjk5MDUgNDYuNzE3IDkzLjI4NzQgNDYuMjkwOUw5My4zMDUzIDQ2LjI2NTNMOTMuMzI0MiA0Ni4yNDAyQzkzLjg0MzMgNDUuNTUwMyA5NC42NzY0IDQ1LjE5NjMgOTUuMjk5NSA0NC45OTA0Qzk1Ljk2MTEgNDQuNzcxNyA5Ni43NzUxIDQ0LjU4NzEgOTcuNTg1OSA0NC43MTE5Qzk4LjE5ODEgNDQuNzkwNiA5OS4yMDA2IDQ1LjA4NyA5OS42NDkyIDQ2LjA2MzVDOTkuNjc1NiA0NS42OTI2IDk5LjczMzcgNDUuMzMxNCA5OS44MzA5IDQ0Ljk4NDhMOTkuODM0OCA0NC45NzA5QzEwMC4xNjkgNDMuODE5NSAxMDEuMDkxIDQzLjEwMTggMTAyLjE2IDQyLjc0ODRDMTAyLjcxNSA0Mi41NjQ5IDEwMy40NTIgNDIuMzk3OSAxMDQuMjExIDQyLjUzODVDMTA0LjM4NyA0Mi41NzExIDEwNC41NTQgNDIuNjE4MiAxMDQuNzEyIDQyLjY3ODVDMTA0Ljc1MSA0Mi41NzA5IDEwNC43OTcgNDIuNDY4NCAxMDQuODUgNDIuMzcxNEMxMDQuNDA2IDQxLjk4NTkgMTA0LjA4OCA0MS41MDc2IDEwMy44ODUgNDAuOTg1NUMxMDMuNTYxIDQwLjE1NjYgMTAzLjU0NyAzOS4yOTA0IDEwMy44NTQgMzguNDUxNkwxMDMuODYyIDM4LjQzMTFMMTAzLjg3IDM4LjQxMDhDMTA0LjI3MSAzNy4zOTc4IDEwNS4xMTEgMzYuNzI3NiAxMDYuMTM4IDM2LjM4ODJDMTA3LjEzOSAzNi4wNTcyIDEwOC4xODYgMzYuMDQ2IDEwOS4xOTUgMzYuMzkyN0MxMTAuMTY5IDM2LjcxNjEgMTExLjA1NyAzNy4zNDI2IDExMS40NjEgMzguMzc4N0MxMTEuODE3IDM5LjI4ODggMTExLjY2MyA0MC4xNzAzIDExMS4yNCA0MC45MTk1QzExMS4zMzUgNDAuODYgMTExLjQzMiA0MC44MDQgMTExLjUyNSA0MC43NTIxQzExMS44ODkgNDAuNTQ5IDExMi4zODIgNDAuMzA2NyAxMTIuOTc4IDQwLjAzMTNDMTE0LjE2NCAzOS40ODI0IDExNS40NiAzOC45MTU0IDExNi44NjQgMzguMzMwMkMxMTguMjM0IDM3Ljc0MzggMTE5LjIxMSAzNy4zNDI4IDExOS43MDEgMzcuMTgwOEMxMjAuMTc2IDM3LjAyNCAxMjAuNzU5IDM2Ljk0MDkgMTIxLjM1OSAzNy4wNjk2QzEyMS4yMzcgMzUuOTM1MiAxMjEuMTE2IDM0Ljk0NjggMTIwLjk5OCAzNC4xMDI3QzEyMC44ODIgMzMuMzQ0NiAxMjEuMDI0IDMyLjU0NTIgMTIxLjU2NyAzMS44NDkxQzEyMi4wODEgMzEuMTg4MSAxMjIuODE5IDMwLjc5NzUgMTIzLjUzNSAzMC41NjA5QzEyNC4yMDQgMzAuMzM5OSAxMjUuMDMyIDMwLjE4NjcgMTI1Ljg3NSAzMC4zOTExQzEyNi4zMjMgMzAuNDk5NyAxMjYuOCAzMC43MjAzIDEyNy4xODQgMzEuMTE5M0MxMjcuNTY5IDMxLjUxODMgMTI3Ljc0OSAzMS45ODEgMTI3LjgxMyAzMi40MDMzTDEyNy44MTcgMzIuNDMyOUwxMjkuMDAzIDQzLjA0MDRDMTI5LjA2MyA0My40OTY1IDEyOS4wNjcgNDQuMDY5MyAxMjguODQ2IDQ0LjYzMDJDMTI5LjMxMyA0NC45OTExIDEyOS42NDEgNDUuNDY3OSAxMjkuODQxIDQ1Ljk3OTlDMTMwLjI1MyA0Ny4wMzYxIDEzMC4wMTIgNDguMDY1NiAxMjkuNDQxIDQ4LjkxODRDMTI4LjkwNCA0OS43NDExIDEyOC4xMiA1MC4zNTAzIDEyNy4xMjcgNTAuNjc4NUMxMjYuMjE1IDUwLjk3OTcgMTI1LjI3NiA1MC45MjI1IDEyNC40MiA1MC41NTA5TDEyNC4zOTggNTAuNTQxNUwxMjQuMzc2IDUwLjUzMTZDMTI0LjM0MyA1MC41MTYyIDEyNC4zMSA1MC41MDA1IDEyNC4yNzggNTAuNDg0NEMxMjMuOTkgNTAuODg1NCAxMjMuNjA4IDUxLjIzMjMgMTIzLjEyNCA1MS40ODcxTDEyMy4wNzQgNTEuNTEzNUwxMjMuMDIyIDUxLjUzNzFDMTE4Ljk3MiA1My4zNzI5IDExNi43MDMgNTQuNDA5NCAxMTYuMTY4IDU0LjY2NzVMMTE2LjE0MyA1NC42Nzk2TDExNi4xMTcgNTQuNjkxQzExNS44MjUgNTQuODIxOSAxMTUuNjAyIDU0LjkyMTUgMTE1LjQ0OSA1NC45ODkzTDExNS4yNjggNTUuMDY5MkwxMTUuMjA3IDU1LjA5NTlMMTE1LjE3IDU1LjExMTNMMTE1LjEzNSA1NS4xMjU0QzExNS4xMjcgNTUuMTI4OCAxMTUuMDg0IDU1LjE0NTcgMTE1LjAzMSA1NS4xNjMzQzExNC41OCA1NS4zMTIxIDExNC4wOTYgNTUuNDA4NCAxMTMuNTg5IDU1LjQxMTdDMTEzLjMzNyA1NS40MTYgMTEyLjc2NCA1NS40MDMzIDExMi4yMTcgNTUuMTIyNkMxMTEuOTcyIDU1LjMwNjMgMTExLjcxMiA1NS40MzkzIDExMS41MDcgNTUuNTM0QzExMS4yMiA1NS42NjU4IDExMC44OTUgNTUuNzg3NCAxMTAuNTUxIDU1LjkwMTRDMTA5Ljc2NCA1Ni4xNjE0IDEwOC41MzggNTYuMzI5NSAxMDcuNTIzIDU1LjU0NzNDMTA3LjU1MiA1Ni4yMDQ1IDEwNy4zMjUgNTYuODkzNyAxMDYuNzI0IDU3LjQzMUMxMDYuMjY5IDU3Ljg1NSAxMDUuNzA5IDU4LjExNjUgMTA1LjE5IDU4LjI4OEMxMDQuNTQ2IDU4LjUwMDggMTAzLjc5NyA1OC42ODIgMTAzLjA2OSA1OC42Mjk5QzEwMi44MzYgNTguNjEzMyAxMDIuNTc1IDU4LjU3MDcgMTAyLjMwOCA1OC40ODExQzEwMS43NzcgNTguOTk2MiAxMDEuMTQ1IDU5LjQ3MTIgMTAwLjQwNCA1OS43MTZDOTkuMTgxOSA2MC4xMjAxIDk3LjkyMzggNjAuMzU2NCA5Ni43NTQ0IDYwLjE5MDVDOTYuNzA3OSA2MC4zMjc1IDk2LjY0OTMgNjAuNDY0IDk2LjU3NzQgNjAuNTk5NEM5Ni4xNjA0IDYxLjQ0MTkgOTUuMzg3NiA2MS45Mzc3IDk0LjU5OTQgNjIuMTk4M0M5NC4wNzkxIDYyLjM3MDIgOTMuNTc2NSA2Mi4zMjU3IDkzLjMzNjUgNjIuMjk4MUM5My4wMzAzIDYyLjI2MjkgOTIuNzA2NSA2Mi4xOTQxIDkyLjM4ODYgNjIuMTEyOEM5Mi4wNTM3IDYyLjAyNzEgOTEuNjc0MSA2MS45MTQxIDkxLjI1MzMgNjEuNzc2NUM5MC4xOTU0IDYyLjc2NjIgODguOTMyNCA2My41MDc5IDg3LjQ3OTEgNjMuOTg4M0M4NS4xMzkxIDY0Ljc2MTggODIuODM0OSA2NC43NDc1IDgwLjgyMjYgNjMuNjA0NEM3OC45Mzk3IDYyLjUzNDcgNzcuNjM3OSA2MC43NjAyIDc2Ljc3NjEgNTguNTUxMkM3Ni4wMzg3IDU2LjY2MSA3NS43OTM1IDU0Ljc0NDIgNzYuMDcwNiA1Mi44MjI3Wk05MC42OTEgNTkuNzM5OUM4OS42ODkyIDYwLjk3NiA4OC40MDc5IDYxLjg1MiA4Ni44NDcgNjIuMzY3OUM4NC44OTE3IDYzLjAxNDIgODMuMjExIDYyLjkzOCA4MS44MDUgNjIuMTM5MkM4MC4zOTkgNjEuMzQwNSA3OS4zMDk1IDU5Ljk1MDUgNzguNTM2NiA1Ny45NjkzQzc3Ljg5MzQgNTYuMzIwOCA3Ny42ODk1IDU0LjY4MDggNzcuOTI0OCA1My4wNDkzQzc4LjE2MDIgNTEuNDE3OCA3OC44MTE1IDQ5Ljk3MzEgNzkuODc5IDQ4LjcxNTRDODAuOTQwNiA0Ny40NDI1IDgyLjMzNCA0Ni41MjA5IDg0LjA1OTIgNDUuOTUwN0M4NS43MzUyIDQ1LjM5NjcgODcuMjgwOCA0NS40ODM0IDg4LjY5NjEgNDYuMjEwOEM5MC4xMjE5IDQ2LjkxNzYgOTEuMjQxOSA0OC4zMTQ2IDkyLjA1NjIgNTAuNDAxN0M5Mi4yMDM0IDUwLjc3OTIgOTIuMzI1OCA1MS4xNjMgOTIuNDIzMSA1MS41NTMxQzkyLjYxNDMgNTIuMzE5NiA5Mi43MDkxIDUzLjExMDQgOTIuNzA3NSA1My45MjU2QzkyLjcwNzEgNTQuMTcxOSA5Mi42OTc2IDU0LjQxNiA5Mi42NzkgNTQuNjU4QzkyLjYwNTEgNTUuNjI0NiA5Mi4zODcyIDU2LjU1NjkgOTIuMDI1NCA1Ny40NTQ5QzkyLjcxNjcgNTcuNzMxNyA5My4yODQyIDU3Ljk2NzcgOTMuNzI3OCA1OC4xNjI4Qzk0LjQ4MzQgNTguNDk1MSA5NC44Nzk3IDU4LjcwODggOTQuOTE2OSA1OC44MDQxQzk1LjAyMTYgNTkuMDcyNyA5NS4wNSA1OS4zMjI3IDk1LjAwMTkgNTkuNTU0MUM5NC45Nzk1IDU5LjY2MTYgOTQuOTQwNyA1OS43NjUxIDk0Ljg4NTQgNTkuODY0NkM5NC43MzM0IDYwLjE4OCA5NC40MjczIDYwLjQyNTggOTMuOTY3MiA2MC41Nzc4QzkzLjYyMjIgNjAuNjkxOSA5Mi41MzAxIDYwLjQxMjYgOTAuNjkxIDU5LjczOTlaTTk1LjE5NDQgNTYuOTEyMkM5NS4yMTc5IDU2Ljk3NTQgOTUuMjQxOCA1Ny4wMzgyIDk1LjI2NjIgNTcuMTAwOEM5NS40OTQ3IDU3LjY4NjYgOTUuODcxNSA1OC4wOTEzIDk2LjM5NjYgNTguMzE1Qzk2LjUwODIgNTguMzYyNiA5Ni42MjY3IDU4LjQwMiA5Ni43NTE4IDU4LjQzMzNDOTcuNTExMyA1OC42MjI3IDk4LjUxODIgNTguNTEwMiA5OS43NzIzIDU4LjA5NTZDMTAwLjEyMiA1Ny45Nzk5IDEwMC41MDUgNTcuNzIzMiAxMDAuOTIgNTcuMzI1NUMxMDAuOTkyIDU3LjI1NjUgMTAxLjA2NSA1Ny4xODM0IDEwMS4xMzkgNTcuMTA2QzEwMS4xODcgNTcuMDU2MSAxMDEuMjM0IDU3LjAwNjQgMTAxLjI4IDU2Ljk1N0MxMDEuMzUxIDU2Ljg4MTUgMTAxLjQxOSA1Ni44MDY1IDEwMS40ODYgNTYuNzMyMUMxMDEuNDkxIDU2LjcyNjggMTAxLjQ5NiA1Ni43MjE0IDEwMS41MDEgNTYuNzE2QzEwMS41OTkgNTYuNjA3MiAxMDEuNjkzIDU2LjQ5OTYgMTAxLjc4NCA1Ni4zOTMyQzEwMS43ODYgNTYuMzkwMyAxMDEuNzg4IDU2LjM4NzQgMTAxLjc5MSA1Ni4zODQ1QzEwMi4wMTUgNTYuMTIwNiAxMDIuMjE2IDU1Ljg2NDMgMTAyLjM5NCA1NS42MTU1TDEwMi41ODMgNTYuNTI2NUMxMDIuNzE0IDU2Ljg2NDQgMTAzLjA5MyA1Ni45ODMyIDEwMy43MTkgNTYuODgyOUMxMDMuOTYxIDU2Ljg0NCAxMDQuMjQxIDU2Ljc3MjMgMTA0LjU1NyA1Ni42Njc2QzEwNC45MzUgNTYuNTQyNyAxMDUuMjE5IDU2LjM4OTMgMTA1LjQwNyA1Ni4yMDc0QzEwNS42MDIgNTYuMDQwNiAxMDUuNjgyIDU1LjgxNzggMTA1LjY0OCA1NS41MzlDMTA1LjUwMSA1NC41NDU4IDEwNS4yNTMgNTIuNDU5NSAxMDQuOTAzIDQ5LjI3OTlMMTA0LjQ1NSA0NS4yNzlDMTA0LjQ0MiA0NS4xOTc5IDEwNC40MzEgNDUuMDk5IDEwNC40MjMgNDQuOTgyM0MxMDQuNDI1IDQ0Ljg0NSAxMDQuNDExIDQ0LjczODYgMTA0LjM4MiA0NC42NjNDMTA0LjE5MyA0NC4xNzkgMTAzLjY2MyA0NC4wODA5IDEwMi43OTIgNDQuMzY4OEMxMDIuMTY4IDQ0LjU3NTEgMTAxLjc4NCA0NC45MjM4IDEwMS42NDIgNDUuNDE0OEMxMDEuNTEgNDUuODg1MiAxMDEuNDcyIDQ2LjQ1MjggMTAxLjUyNyA0Ny4xMTc1QzEwMS41NzQgNDcuNjY1NCAxMDEuNzMgNDkuMTMzNiAxMDEuOTk0IDUxLjUyMjFMMTAyLjIxOCA1My41MjI2QzEwMS45NTUgNTMuOTA3NyAxMDEuNTYxIDU0LjMzMDggMTAxLjAzNiA1NC43OTIxQzEwMC45IDU0LjkxMTUgMTAwLjc1NSA1NS4wMzM0IDEwMC42MDIgNTUuMTU3OUMxMDAuNDQzIDU1LjI4OCAxMDAuMjk0IDU1LjQwNjggMTAwLjE1MyA1NS41MTQzQzk5LjY0MzIgNTUuOTAyNiA5OS4yNDY5IDU2LjE0MzYgOTguOTYzOCA1Ni4yMzcyQzk4LjgzMjQgNTYuMjgwNiA5OC42NTUgNTYuMjUzOSA5OC40MzE3IDU2LjE1NjlDOTguMjA4NCA1Ni4wNiA5OC4wNTgzIDU1LjkxMzIgOTcuOTgxNiA1NS43MTY2Qzk3LjEwMjUgNTMuNDYzMiA5Ni45NzIgNTAuODk0IDk3LjU5MDIgNDguMDA5Qzk3LjY0NDkgNDcuNzY5IDk3LjcyNDMgNDcuNTIwOCA5Ny44MjgzIDQ3LjI2NDRDOTcuOTIwNiA0Ni45Nzc4IDk3Ljk1NzggNDYuODExOSA5Ny45NDAxIDQ2Ljc2NjVDOTcuODYzNCA0Ni41Njk5IDk3LjY1MDYgNDYuNDUyNCA5Ny4zMDE4IDQ2LjQxNEM5Ni45NjM1IDQ2LjM1NTEgOTYuNTA2NyA0Ni40MjA3IDk1LjkzMTcgNDYuNjEwOEM5NS4zODk1IDQ2Ljc5IDk1LjAzMjggNDYuOTkzMyA5NC44NjE4IDQ3LjIyMDVDOTQuNzA3MiA0Ny40NDI0IDk0LjU5OTIgNDcuNzU5OCA5NC41Mzc3IDQ4LjE3MjhDOTQuMzgwNCA0OS4yODcyIDk0LjI5OTEgNTAuMzUxNyA5NC4yOTM3IDUxLjM2NjJDOTQuMjg4OSA1Mi4yNTg5IDk0LjM0MyA1My4xMTMgOTQuNDU1OSA1My45Mjg0Qzk0LjQ4NiA1NC4xNDU5IDk0LjUyMDMgNTQuMzYwNyA5NC41NTg4IDU0LjU3MjdDOTQuNzA3OSA1NS4zOTM4IDk0LjkxOTcgNTYuMTczNyA5NS4xOTQ0IDU2LjkxMjJaTTEwNi45NzUgNDQuMjQxQzEwNy41MzEgNDkuODk2NyAxMDcuODYyIDUyLjg2MDcgMTA3Ljk2OCA1My4xMzI5QzEwOC4xNjcgNTMuNTk2MyAxMDguNDA4IDUzLjk1MjEgMTA4LjY5IDU0LjIwMDNDMTA4Ljk2NyA1NC40MzMzIDEwOS4zNzYgNTQuNDYwMiAxMDkuOTE4IDU0LjI4MUMxMTAuMzQ3IDU0LjEzOTQgMTEwLjY2OSA1NC4wMDc2IDExMC44ODQgNTMuODg1NkMxMTAuOTc0IDUzLjgzNDUgMTExLjA0NSA1My43ODUyIDExMS4wOTggNTMuNzM3NkMxMTEuMjc2IDUzLjU3NjIgMTExLjMzMiA1My40MTI0IDExMS4yNjggNTMuMjQ2TDExMC43OTIgNTIuNDU1NUwxMDkuOCA0My41NjM2QzEwOS43NzMgNDMuNDAxNSAxMDkuNzQzIDQzLjI3NTEgMTA5LjcwNyA0My4xODQ0QzEwOS42MjggNDIuOTgwNSAxMDkuNTEyIDQyLjgwNzkgMTA5LjM1OSA0Mi42NjY3QzEwOS4yNjMgNDIuNTc3NCAxMDkuMTUxIDQyLjUwMDYgMTA5LjAyNiA0Mi40MzY0QzEwOC44NSA0Mi4zMzg4IDEwOC42NDggNDIuMjk0NSAxMDguNDE4IDQyLjMwMzZDMTA4LjI0NCA0Mi4zMTA0IDEwOC4wNTQgNDIuMzQ3OCAxMDcuODQ5IDQyLjQxNTVDMTA3LjI0MSA0Mi42MTY1IDEwNi44NDggNDIuNzk3NiAxMDYuNjcgNDIuOTU5QzEwNi41OTggNDMuMDIzOSAxMDYuNTQ2IDQzLjA4OTMgMTA2LjUxNCA0My4xNTVDMTA2LjQ2NiA0My4yNTI2IDEwNi40NjEgNDMuMzUxMSAxMDYuNSA0My40NTA1TDEwNi45NzUgNDQuMjQxWk0xMTcuNzg2IDQyLjI1NTZDMTE3LjQ1OSA0Mi44Nzk5IDExNy4wNiA0My42ODcxIDExNi41ODkgNDQuNjc3MkMxMTYuMTg3IDQ1LjUyMTQgMTE1LjczNCA0Ni40OTg2IDExNS4yMjggNDcuNjA4OEMxMTQuNDQzIDQ5LjM1MzYgMTEzLjgwNCA1MC43MzQ0IDExMy4zMSA1MS43NTEzQzExMy4yMTIgNTEuNzgzOSAxMTMuMDQgNTEuODY2MyAxMTIuNzk0IDUxLjk5ODZDMTEyLjc1OCA1Mi4wMTggMTEyLjcyMyA1Mi4wMzczIDExMi42OSA1Mi4wNTYzQzExMi42NyA1Mi4wNjgxIDExMi42NSA1Mi4wNzk4IDExMi42MzIgNTIuMDkxNEMxMTIuNTEzIDUyLjE2NiAxMTIuNDI4IDUyLjIzNzQgMTEyLjM3NiA1Mi4zMDU3QzExMi4zNTcgNTIuMzMxNiAxMTIuMzQyIDUyLjM1NyAxMTIuMzMyIDUyLjM4MkMxMTIuMjgzIDUyLjQ3NjggMTEyLjI4IDUyLjU4NTkgMTEyLjMyMSA1Mi43MDkyQzExMi4zMjUgNTIuNzE5NSAxMTIuMzI4IDUyLjcyOTggMTEyLjMzMyA1Mi43NDAzQzExMi4zNDkgNTIuNzgyNyAxMTIuMzcyIDUyLjgyNjUgMTEyLjQgNTIuODcxN0MxMTIuNDYzIDUyLjk3MTMgMTEyLjU1NCA1My4wNzc2IDExMi42NzUgNTMuMTkwNUMxMTIuODUgNTMuMzU0NSAxMTIuOTY5IDUzLjQ2ODkgMTEzLjAzMiA1My41MzM3QzExMy4wMzUgNTMuNTM4OCAxMTMuMDM5IDUzLjU0MzkgMTEzLjA0NCA1My41NDg4QzExMy4wNjQgNTMuNTcyNSAxMTMuMDg5IDUzLjU5MzMgMTEzLjExOSA1My42MTExQzExMy4xMjkgNTMuNjE2OSAxMTMuMTQgNTMuNjIyNCAxMTMuMTUxIDUzLjYyNzZDMTEzLjI0OCA1My42NzMxIDExMy4zODYgNTMuNjkzOSAxMTMuNTY2IDUzLjY5MDFDMTEzLjgyNSA1My42ODk3IDExNC4xMDMgNTMuNjQwNiAxMTQuMzk5IDUzLjU0MjlDMTE0LjQxNSA1My41Mzc0IDExNC43MTUgNTMuNDA0IDExNS4zIDUzLjE0MjVDMTE1Ljg2MiA1Mi44NzE0IDExOC4xNiA1MS44MjE0IDEyMi4xOTYgNDkuOTkyNUMxMjIuNDU3IDQ5Ljg1NDggMTIyLjY2NSA0OS42NDk2IDEyMi44MTggNDkuMzc3QzEyMi44MzkgNDkuMzM4NSAxMjIuODU5IDQ5LjMwMDMgMTIyLjg3NiA0OS4yNjI0QzEyMi45ODQgNDkuMDIwMyAxMjIuOTk5IDQ4Ljc5MSAxMjIuOTIyIDQ4LjU3NDNDMTIyLjkxOSA0OC41NjY3IDEyMi45MTYgNDguNTU5MSAxMjIuOTEzIDQ4LjU1MTVDMTIyLjc4NSA0OC4yMjMgMTIyLjYxMiA0OC4wMDA3IDEyMi4zOTUgNDcuODg0N0MxMjIuMTczIDQ3Ljc2NTcgMTIxLjkwMyA0Ny43NTg0IDEyMS41ODcgNDcuODYyOUMxMjEuMTYxIDQ4LjAwMzggMTIwLjQzIDQ4LjMwNDcgMTE5LjM5NCA0OC43NjU3QzExOC42NzMgNDkuMDg2OSAxMTcuODAzIDQ5LjQ4NTcgMTE2Ljc4NiA0OS45NjIyTDExOC44MzIgNDUuNjQ5MkMxMTkuNjMzIDQzLjg5OSAxMjAuMzIgNDIuNDUxIDEyMC44OTMgNDEuMzA1NEwxMjEuMjY3IDQwLjY5NTFDMTIxLjQ0NSA0MC41MzM4IDEyMS41NzYgNDAuMzQ1NSAxMjEuNjU5IDQwLjEzMDNDMTIxLjY2MSA0MC4xMjU1IDEyMS42NjIgNDAuMTIwOCAxMjEuNjY0IDQwLjExNjFDMTIxLjczNiAzOS44OTExIDEyMS43MzUgMzkuNjgyNCAxMjEuNjYgMzkuNDg5OEMxMjEuNjM3IDM5LjQzMSAxMjEuNjEyIDM5LjM3NTYgMTIxLjU4NyAzOS4zMjM3QzEyMS41NTYgMzkuMjYyIDEyMS41MjMgMzkuMjA1MiAxMjEuNDg5IDM5LjE1MzFDMTIxLjQwOCAzOS4wMzE4IDEyMS4zMTcgMzguOTM2NSAxMjEuMjE1IDM4Ljg2NzFDMTIwLjk3OSAzOC43MDcgMTIwLjY4NSAzOC42ODUgMTIwLjMzNCAzOC44MDEyQzExOS45MzkgMzguOTMxNSAxMTkuMDQzIDM5LjI5NjIgMTE3LjY0NCAzOS44OTUxQzExNi4yNTYgNDAuNDczNCAxMTQuOTggNDEuMDMxNiAxMTMuODE4IDQxLjU2OTZDMTEyLjY1NSA0Mi4xMDc2IDExMi4wNTMgNDIuNDQzMiAxMTIuMDEyIDQyLjU3NjJDMTExLjg2NCA0My4wNTIgMTExLjg2NCA0My40NzkgMTEyLjAxMSA0My44NTcxQzExMi4xOTQgNDQuMzI1OSAxMTIuNTQgNDQuNDc2MiAxMTMuMDQ5IDQ0LjMwNzhMMTE3Ljc4NiA0Mi4yNTU2Wk0xMjMuNDI2IDM4LjkyMzdDMTIzLjQ3IDM5LjM4MjYgMTIzLjUxMiAzOS44MTM1IDEyMy41NTIgNDAuMjE2MkMxMjMuNjQ0IDQxLjEyODQgMTIzLjcyOCA0MS44OTYzIDEyMy44MDUgNDIuNTJDMTIzLjkyNiA0My40MDE4IDEyNC4wNjEgNDQuMDMxOCAxMjQuMjA4IDQ0LjQwOTlDMTI0LjIzMSA0NC40NjgzIDEyNC4yNTcgNDQuNTIyMiAxMjQuMjg3IDQ0LjU3MThDMTI0LjQ5NiA0NC45MjQyIDEyNC44NzYgNDUuMDU1OCAxMjUuNDI3IDQ0Ljk2NjZDMTI1LjU4MiA0NC45NDE0IDEyNS43NTEgNDQuODk4NyAxMjUuOTM0IDQ0LjgzODRDMTI2LjQ3NiA0NC42NTkyIDEyNi44MjQgNDQuNDU4NyAxMjYuOTc5IDQ0LjIzNjlDMTI3LjAzNiA0NC4xNjA2IDEyNy4wOCA0NC4wNzIyIDEyNy4xMTIgNDMuOTcxOUMxMjcuMTc0IDQzLjc3MzMgMTI3LjE4NSA0My41Mjc1IDEyNy4xNDQgNDMuMjM0NkwxMjUuOTYgMzIuNjM4OUMxMjUuOTEzIDMyLjMyOTggMTI1LjcyNiAzMi4xMzU1IDEyNS4zOTkgMzIuMDU2MUMxMjUuMDcxIDMxLjk3NjYgMTI0LjY2IDMyLjAxODMgMTI0LjE2OCAzMi4xODEzQzEyMy4xNjUgMzIuNTEyNSAxMjIuNzI2IDMzLjA3NTkgMTIyLjg1MSAzMy44NzEzQzEyMy4wMzkgMzUuMjA5MiAxMjMuMjMgMzYuODg3NiAxMjMuNDI0IDM4LjkwNjVDMTIzLjQyNSAzOC45MTIyIDEyMy40MjYgMzguOTE3OSAxMjMuNDI2IDM4LjkyMzdaTTEyNy42NjggNDUuOTY5MkMxMjcuNTI4IDQ1Ljg1NjEgMTI3LjM2MyA0NS43NzggMTI3LjE3NCA0NS43MzQ3QzEyNi44ODggNDUuNjYwNCAxMjYuNTg2IDQ1LjY0NzEgMTI2LjI2OCA0NS42OTQ4QzEyNi4xMDMgNDUuNzE5NSAxMjUuOTMzIDQ1Ljc2MDYgMTI1Ljc1OSA0NS44MTgxQzEyNS4yNDQgNDUuOTg4NCAxMjQuODU2IDQ2LjI3NDQgMTI0LjU5NCA0Ni42NzZDMTI0LjU2NCA0Ni43MjI2IDEyNC41MzYgNDYuNzcwOCAxMjQuNTA5IDQ2LjgyMDVDMTI0LjQxOSA0Ni45NzcgMTI0LjM1NCA0Ny4xMjk1IDEyNC4zMTIgNDcuMjc4MUMxMjQuMjMzIDQ3LjU2MDUgMTI0LjI0IDQ3LjgyODUgMTI0LjMzMyA0OC4wODIxQzEyNC4zMzYgNDguMDg5NyAxMjQuMzM5IDQ4LjA5NzMgMTI0LjM0MiA0OC4xMDQ5QzEyNC40NDUgNDguMzY5NiAxMjQuNjExIDQ4LjU5MDMgMTI0Ljg0IDQ4Ljc2NzJDMTI0Ljk1MSA0OC44NTMgMTI1LjA3NyA0OC45Mjg1IDEyNS4yMTcgNDguOTkzNkMxMjUuNjQyIDQ5LjE3NzggMTI2LjA2NyA0OS4xOTkzIDEyNi40OTUgNDkuMDU4MUMxMjcuMDcgNDguODY4IDEyNy41MTkgNDguNTIzIDEyNy44NDQgNDguMDIzMUMxMjguMTg1IDQ3LjUxNzcgMTI4LjI2MyA0Ny4wMzA3IDEyOC4wODEgNDYuNTYxOEMxMjcuOTgyIDQ2LjMwOSAxMjcuODQ0IDQ2LjExMTUgMTI3LjY2OCA0NS45NjkyWk0xMDkuMTczIDQwLjY1MzJDMTA5LjI3NSA0MC41NTE3IDEwOS4zNjkgNDAuNDQxNiAxMDkuNDUzIDQwLjMyM0MxMDkuNzkgMzkuODUzMyAxMDkuODcyIDM5LjM5OTIgMTA5LjcwMSAzOC45NjA2QzEwOS41MyAzOC41MjIgMTA5LjE0NiAzOC4yMDQ4IDEwOC41NTEgMzguMDA5QzEwNy45NzEgMzcuODA3OCAxMDcuMzc4IDM3LjgwNzcgMTA2Ljc3IDM4LjAwODZDMTA2LjE5NSAzOC4xOTg3IDEwNS44MTQgMzguNTI5NiAxMDUuNjI3IDM5LjAwMTJDMTA1LjQ1NiAzOS40NjczIDEwNS40NjIgMzkuOTM0OCAxMDUuNjQ1IDQwLjQwMzZDMTA1Ljc3NCA0MC43MzM3IDEwNS45NjQgNDAuOTkzOCAxMDYuMjE1IDQxLjE4NDFDMTA2LjMwOSA0MS4yNTU0IDEwNi40MTEgNDEuMzE2OSAxMDYuNTIyIDQxLjM2ODZDMTA2LjgwMiA0MS40ODE2IDEwNy4xMjEgNDEuNTEzMiAxMDcuNDc4IDQxLjQ2MzJDMTA3LjY1NSA0MS40Mzg1IDEwNy44NDEgNDEuMzkzNyAxMDguMDM3IDQxLjMyODlDMTA4LjQ5MiA0MS4xNzg3IDEwOC44NyA0MC45NTM1IDEwOS4xNzMgNDAuNjUzMlpcIiBmaWxsPVwiIzI1MkI1MVwiIC8+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTM0LjM3M1wiIGhlaWdodD1cIjY3XCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5Mb2dvLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IFF1aXpMb2dvID0gc3R5bGVkKExvZ28pYFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXpMb2dvOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBXaWRnZXQgPSBzdHlsZWQuZGl2YFxyXG4gICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkJnfTtcclxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaDEsIGgyLCBoMyB7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi8qaW5wdXR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgIG1hcmdpbjogOHB4IDA7XHJcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkICM2ZDFiN2I7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDhweDsgXHJcbn0qL1xyXG5cclxuLypidXR0b257XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDFiN2I7IFxyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgcGFkZGluZzogMTBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICBtYXJnaW46IDRweCAycHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Ki9cclxuXHJcbmA7XHJcblxyXG5XaWRnZXQuSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBwYWRkaW5nOiAxOHB4IDMycHg7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGhpcmR9O1xyXG4gICBcclxuICAgKntcclxuICAgbWFyZ2luOiAwO1xyXG4gICB9XHJcbmA7XHJcblxyXG5XaWRnZXQuQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgIHBhZGRpbmc6IDI0cHggMzJweCAzMnB4IDMycHg7XHJcbiAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICB9XHJcbiAgIHVsIHtcclxuICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgIH1cclxuICAgXHJcbmA7XHJcblxyXG5XaWRnZXQuVG9waWMgPSBzdHlsZWQuYWBcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29udHJhc3RUZXh0fTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTcwYH07XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJSYWRpdXN9O1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9