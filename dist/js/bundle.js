/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){"content-type"===d.toLowerCase()&&(this.u=!0);return aa.call(this,d,e)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&
(T.navigator.sendBeacon=function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/parts/accordeon.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordeon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordeon = function accordeon() {
  var accBlock = document.querySelectorAll('.accordion-block'),
      accHeading = document.querySelectorAll('.accordion-heading'),
      accIndex = 1;

  function accHide() {
    accBlock.forEach(function (elem) {
      elem.style.display = 'none';
      elem.classList.remove('ui-accordion-content-active', 'fadeInUp', 'animated');
    });
  }

  accHide();

  function accShow(n) {
    accHide();
    accBlock[n].style.display = 'block';
    accBlock[n].classList.add('ui-accordion-content-active', 'fadeInUp', 'animated');
  }

  function changeHeading() {
    accHeading.forEach(function (elem) {
      if (!elem.classList.contains('ui-accordion-header-active')) {} else {
        elem.classList.remove('ui-accordion-header-active');
      }
    });
  }

  accHeading.forEach(function (elem, i) {
    elem.addEventListener('click', function () {
      accIndex = i;
      accShow(accIndex);
      changeHeading();
      elem.classList.add('ui-accordion-header-active');
    });
  });
};

module.exports = accordeon;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var calc = function calc() {
  var calcForm = document.querySelector('.form'),
      selectSize = document.getElementById('size'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      btn = document.querySelector('.form-btn'),
      optionSize = size.querySelectorAll('option'),
      optionMaterial = material.querySelectorAll('option'),
      optionAdd = options.querySelectorAll('option'),
      promocode = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price');
  optionSize[0].value = 0;
  optionSize[1].value = 500;
  optionSize[2].value = 1000;
  optionSize[3].value = 1500;
  optionSize[4].value = 2000;
  optionMaterial[0].value = 0;
  optionMaterial[1].value = 500;
  optionMaterial[2].value = 1000;
  optionMaterial[3].value = 1500;
  optionAdd[0].value = 0;
  optionAdd[1].value = 500;
  optionAdd[2].value = 1000;
  var valueS = 0;
  var valueM = 0; // selectSize.addEventListener('change', function() {
  //     // calcPrice.innerHTML = optionSize[1].value;
  //     optionSize.forEach(function(elem) {
  //         elem.addEventListener('click', function() {
  //             valueS = elem.value;
  //             calcPrice.innerHTML = valueS;
  //         });
  //     });
  //     console.log(valueS);
  // });
  // console.log(valueS);

  selectSize.addEventListener('change', function () {
    for (var i = 0; i < selectSize.options.length; ++i) {
      selectSize.options[i].foo = function () {
        valueS = this.value;
        console.log(valueS);
        return valueS;
      };
    }

    selectSize.onchange = function () {
      this.options[this.selectedIndex].foo();
    };
  });
  selectMaterial.addEventListener('change', function () {
    for (var i = 0; i < selectMaterial.options.length; ++i) {
      selectMaterial.options[i].foo = function () {
        valueM = this.value;
        console.log(valueM);
        return valueM;
      };
    }

    selectMaterial.onchange = function () {
      this.options[this.selectedIndex].foo();
    };
  }); // calcPrice.addEventListener('change', calcSum);

  function calcSum() {
    calcPrice.innerText = valueS + valueM;
  }

  calcSum();
};

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/loadblocks.js":
/*!************************************!*\
  !*** ./src/js/parts/loadblocks.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var loadBlocks = function loadBlocks() {
  var btnStyles = document.querySelector('.button-styles'),
      blocks = styles.querySelectorAll('.style-block__wrap');
  btnStyles.addEventListener('click', function () {
    blocks.forEach(function (elem) {
      if (elem.classList.contains('styles-2')) {
        elem.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        elem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'fadeInUp', 'animated');
      }
    });
    btnStyles.style.display = 'none';
  });
};

module.exports = loadBlocks;

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menu = function menu() {
  var menuBtn = document.querySelector('.burger'),
      menu = document.querySelector('.burger-menu'),
      width = window.innerWidth;
  console.log(width);

  if (width <= 768) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }
};

module.exports = menu;

/***/ }),

/***/ "./src/js/parts/picsize.js":
/*!*********************************!*\
  !*** ./src/js/parts/picsize.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var picSize = function picSize() {
  var imgSizeOne = document.querySelector('.size-1'),
      imgSizeTwo = document.querySelector('.size-2'),
      imgSizeThree = document.querySelector('.size-3'),
      imgSizeFore = document.querySelector('.size-4');
  imgSizeOne.addEventListener('mouseover', function () {
    imgSizeOne.src = 'src/img/sizes-1-1.png';
  });
  imgSizeTwo.addEventListener('mouseover', function () {
    imgSizeTwo.src = 'src/img/sizes-2-1.png';
  });
  imgSizeThree.addEventListener('mouseover', function () {
    imgSizeThree.src = 'src/img/sizes-3-1.png';
  });
  imgSizeFore.addEventListener('mouseover', function () {
    imgSizeFore.src = 'src/img/sizes-4-1.png';
  });
  imgSizeOne.addEventListener('mouseout', function () {
    imgSizeOne.src = 'src/img/sizes-1.png';
  });
  imgSizeTwo.addEventListener('mouseout', function () {
    imgSizeTwo.src = 'src/img/sizes-2.png';
  });
  imgSizeThree.addEventListener('mouseout', function () {
    imgSizeThree.src = 'src/img/sizes-3.png';
  });
  imgSizeFore.addEventListener('mouseout', function () {
    imgSizeFore.src = 'src/img/sizes-4.png';
  });
};

module.exports = picSize;

/***/ }),

/***/ "./src/js/parts/popup-consultation.js":
/*!********************************************!*\
  !*** ./src/js/parts/popup-consultation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popupConsultation = function popupConsultation() {
  var popupConsult = document.querySelector('.popup-consultation'),
      btnConsult = document.querySelectorAll('.button-consultation'),
      popupClose = document.querySelectorAll('.popup-close'),
      popupOverlay = document.querySelector('.popup-overlay');
  btnConsult.forEach(function (elem) {
    elem.addEventListener('click', function () {
      popupConsult.style.display = 'block';
      popupOverlay.style.display = 'block';
    });
  });
  popupClose.forEach(function (elem) {
    elem.addEventListener('click', function () {
      popupConsult.style.display = 'none';
      popupOverlay.style.display = 'none';
    });
  });
  popupOverlay.addEventListener('click', function () {
    popupConsult.style.display = 'none';
    popupOverlay.style.display = 'none';
  });
  setTimeout(function () {
    popupConsult.style.display = 'block';
    popupOverlay.style.display = 'block';
  }, 60000);
};

module.exports = popupConsultation;

/***/ }),

/***/ "./src/js/parts/popup-design.js":
/*!**************************************!*\
  !*** ./src/js/parts/popup-design.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popupDesign = function popupDesign() {
  var btnDesign = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      popupClose = document.querySelectorAll('.popup-close'),
      popupOverlay = document.querySelector('.popup-overlay');
  btnDesign.forEach(function (elem) {
    elem.addEventListener('click', function () {
      popupDesign.style.display = 'block';
      popupOverlay.style.display = 'block';
    });
  });
  popupClose.forEach(function (elem) {
    elem.addEventListener('click', function () {
      popupDesign.style.display = 'none';
      popupOverlay.style.display = 'none';
    });
  });
  popupOverlay.addEventListener('click', function () {
    popupDesign.style.display = 'none';
    popupOverlay.style.display = 'none';
  });
};

module.exports = popupDesign;

/***/ }),

/***/ "./src/js/parts/popup-gift.js":
/*!************************************!*\
  !*** ./src/js/parts/popup-gift.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popupGift = function popupGift() {
  var btnGift = document.querySelector('.fixed-gift'),
      popupGift = document.querySelector('.popup-gift'),
      popupClose = document.querySelectorAll('.popup-close'),
      popupOverlay = document.querySelector('.popup-overlay'),
      btns = document.getElementsByTagName('button');
  btnGift.addEventListener('click', function () {
    popupGift.style.display = 'block';
    popupOverlay.style.display = 'block';
    btnGift.style.display = 'none';
  });
  popupClose.forEach(function (elem) {
    elem.addEventListener('click', function () {
      popupGift.style.display = 'none';
      popupOverlay.style.display = 'none';
    });
  });
  popupOverlay.addEventListener('click', function () {
    popupGift.style.display = 'none';
    popupOverlay.style.display = 'none';
  });

  var btnClick = function btnClick() {
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (event) {
        var target = event.target;

        if (target == false) {
          giftShow();
        }
      });
    }
  };

  btnClick();

  function giftShow() {
    window.onscroll = function () {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        popupGift.style.display = 'block';
        popupOverlay.style.display = 'block';
        btnGift.style.display = 'none';
      }
    };
  }

  giftShow();
};

module.exports = popupGift;

/***/ }),

/***/ "./src/js/parts/sendform.js":
/*!**********************************!*\
  !*** ./src/js/parts/sendform.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sendform = function sendform() {};

module.exports = sendform;

/***/ }),

/***/ "./src/js/parts/slider-bottom.js":
/*!***************************************!*\
  !*** ./src/js/parts/slider-bottom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliderBottom = function sliderBottom() {
  var prevBtn = document.querySelector('.main-prev-btn'),
      nextBtn = document.querySelector('.main-next-btn'),
      sliderItem = document.querySelectorAll('.feedback-slider-item'),
      slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > sliderItem.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliderItem.length;
    }

    sliderItem.forEach(function (item) {
      return item.style.display = 'none';
    });
    sliderItem[slideIndex - 1].style.display = 'block';
  }

  var plusSlides = function plusSlides(n) {
    showSlides(slideIndex += n);
  };

  prevBtn.addEventListener('click', function () {
    plusSlides(-1);
  });
  nextBtn.addEventListener('click', function () {
    plusSlides(1);
  });
  setInterval(function () {
    plusSlides(1);
  }, 4000);
};

module.exports = sliderBottom;

/***/ }),

/***/ "./src/js/parts/slider-top.js":
/*!************************************!*\
  !*** ./src/js/parts/slider-top.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliderTop = function sliderTop() {
  var sliderItem = document.querySelectorAll('.main-slider-item'),
      slideIndex = 0;
  toggleSlide(slideIndex);

  function toggleSlide(n) {
    for (var i = 0; i < sliderItem.length; i++) {
      sliderItem[i].style.display = 'none';
    }

    function slideShow(index) {
      sliderItem[index].style.display = 'block';
      sliderItem[index].classList.add('fadeInDown', 'animated');
    }

    function slideHide(index) {
      sliderItem[index].style.display = 'none';
      sliderItem[index].classList.remove('fadeInDown', 'animated');
    }

    if (n == 0) {
      slideShow(n);
      slideHide(n + 1);
      slideIndex += 1;
    }

    if (n == 1) {
      slideHide(n - 1);
      slideShow(n);
      slideIndex -= 1;
    }
  }

  setInterval(function () {
    toggleSlide(slideIndex);
  }, 3000);
};

module.exports = sliderTop;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabs = function tabs() {
  var portfolioMenu = document.querySelector('.portfolio-menu'),
      menuItem = document.querySelectorAll('.portfolio-menu li'),
      portfolioBlock = portfolio.querySelectorAll('.portfolio-block'),
      noPortfolio = portfolio.querySelector('.portfolio-no');
  portfolioMenu.addEventListener('click', filterClass);

  function filterClass(event) {
    var target = event.target;

    function classFilter(elementClass, noPort) {
      if (target && event.target.classList.contains(elementClass)) {
        menuItem.forEach(function (item) {
          item.classList.remove('active');
        });
        event.target.classList.add('active');
        portfolioBlock.forEach(function (elem) {
          elem.style.display = 'block';
          elem.classList.remove('fadeIn', 'animated');

          if (!elem.classList.contains(elementClass)) {
            elem.style.display = 'none';
            noPortfolio.style.display = 'block';
          } else {
            elem.classList.add('fadeIn', 'animated');
          }
        });
      }
    }

    classFilter('all');
    classFilter('lovers');
    classFilter('chef');
    classFilter('girl');
    classFilter('guy');
    classFilter('grandmother');
    classFilter('granddad');
  }
};

module.exports = tabs;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var sliderTop = __webpack_require__(/*! ./parts/slider-top.js */ "./src/js/parts/slider-top.js"),
      loadBlocks = __webpack_require__(/*! ./parts/loadblocks.js */ "./src/js/parts/loadblocks.js"),
      menu = __webpack_require__(/*! ./parts/menu */ "./src/js/parts/menu.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      popupConsultation = __webpack_require__(/*! ./parts/popup-consultation.js */ "./src/js/parts/popup-consultation.js"),
      popupDesign = __webpack_require__(/*! ./parts/popup-design.js */ "./src/js/parts/popup-design.js"),
      popupGift = __webpack_require__(/*! ./parts/popup-gift.js */ "./src/js/parts/popup-gift.js"),
      sendform = __webpack_require__(/*! ./parts/sendform.js */ "./src/js/parts/sendform.js"),
      sliderBottom = __webpack_require__(/*! ./parts/slider-bottom.js */ "./src/js/parts/slider-bottom.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
      picSize = __webpack_require__(/*! ./parts/picsize.js */ "./src/js/parts/picsize.js"),
      accordeon = __webpack_require__(/*! ./parts/accordeon.js */ "./src/js/parts/accordeon.js");

  sliderTop();
  loadBlocks();
  menu();
  tabs();
  popupConsultation();
  popupDesign();
  popupGift();
  sendform();
  sliderBottom();
  calc();
  picSize();
  accordeon();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map