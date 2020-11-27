"use strict";document.addEventListener("DOMContentLoaded",function(){var t=function(e){var t=document.getElementById("main"),i=new DocumentFragment;e.results.forEach(function(e,t){var n=document.createElement("div");n.classList.add("pokebox"),n.id="pokebox";var r=(t+1).toString().padStart(3,"0"),o=e.name.charAt(0).toUpperCase()+e.name.slice(1);n.innerHTML='\n        <div class="pokebox__name">'.concat(o,'</div>\n        <div class="pokebox__info">\n          <div class="pokebox__number">#').concat(r,'</div>\n          <img src="assets/img/placeholder.png" data-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/').concat(t+1,'.png" alt="pokemon" class="pokebox__img lazy">\n          <img src="assets/img/pokeball.png" alt="pokeball" class="pokebox__icon">\n        </div>'),i.appendChild(n)}),t.appendChild(i)};fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(50,"&offset=0")).then(function(e){return e.json()}).then(function(e){t(e),isCardVisible(),lazy()}).catch(function(e){return console.log(e)})});var lazy=function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){var n=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),n.unobserve(t)}})});e.forEach(function(e){n.observe(e)})}};function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var isElementInViewport=function(e){var t=e.getBoundingClientRect();return 120<=t.top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)},isCardVisible=function(){var e,t=document.querySelectorAll("#pokebox"),n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;isElementInViewport(r)?r.classList.remove("isNotVisible"):r.classList.add("isNotVisible")}}catch(e){n.e(e)}finally{n.f()}},scrollOn=function(){var e=document.getElementById("gotop");300<window.pageYOffset?e.classList.add("scrollOn"):e.classList.remove("scrollOn")};window.addEventListener("scroll",scrollOn),window.addEventListener("scroll",isCardVisible),window.addEventListener("resize",isCardVisible);var inputValue=document.getElementById("search"),filterNames=function(){var t=inputValue.value.toUpperCase();document.querySelectorAll("#pokebox").forEach(function(e){-1<e.firstElementChild.innerHTML.toUpperCase().indexOf(t)?e.style.display="":e.style.display="none"})};function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}inputValue.addEventListener("keyup",filterNames),inputValue.addEventListener("keyup",isCardVisible);var buttonModal=document.getElementById("slider-button"),modal=document.getElementById("modal"),imageModal=document.getElementById("slider-img"),form=document.getElementById("radio-group"),displayModal=function(){modal.classList.toggle("isActive"),buttonModal.classList.toggle("isActive"),imageModal.classList.toggle("isActive")},optionChange=function(){var e,t=new FormData(form),n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){return e.value[1]}}catch(e){n.e(e)}finally{n.f()}},toNodeList=function(e){var t=new DocumentFragment;return e.forEach(function(e){return t.appendChild(e)}),t},sortOption=function(){var e=optionChange(),t=Array.from(document.querySelectorAll("#pokebox"));switch(e){case"number":sortByNumber(t);break;case"name":sortByName(t);break;case"favorites":console.log(favorites);break;default:console.log("Esta opción no existe: ".concat(e))}var n=document.getElementById("main"),r=toNodeList(t);n.appendChild(r),isCardVisible()};buttonModal.addEventListener("click",displayModal),form.addEventListener("change",sortOption);var sortByNumber=function(e){e.sort(function(e,t){return e.lastElementChild.firstElementChild.innerHTML>t.lastElementChild.firstElementChild.innerHTML?1:e.lastElementChild.firstElementChild.innerHTML<t.lastElementChild.firstElementChild.innerHTML?-1:0})},sortByName=function(e){e.sort(function(e,t){return e.firstElementChild.innerHTML>t.firstElementChild.innerHTML?1:e.firstElementChild.innerHTML<t.firstElementChild.innerHTML?-1:0})};