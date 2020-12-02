"use strict";document.addEventListener("DOMContentLoaded",function(){var t=function(e){var t=document.getElementById("main"),a=new DocumentFragment;e.results.forEach(function(e,t){var n=document.createElement("div");n.classList.add("pokebox"),n.id="pokebox";var r=(t+1).toString().padStart(3,"0"),o=e.name.charAt(0).toUpperCase()+e.name.slice(1);n.innerHTML='\n      <div class="pokebox__number">#'.concat(r,'</div>\n      <img src="assets/img/placeholder.png" data-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/').concat(t+1,'.png" alt="pokemon" class="pokebox__img lazy" data-url="').concat(e.url,'" crossorigin="anonimus">\n      <img src="assets/img/pokeball.png" alt="pokeball" class="pokebox__icon">\n      <div class="pokebox__name">').concat(o,"</div>"),a.appendChild(n)}),t.appendChild(a)};fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(50,"&offset=0")).then(function(e){return e.json()}).then(function(e){t(e),isCardVisible(),lazy(),getLinks()}).catch(function(e){return console.log(e)})});var lazy=function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){var n=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),n.unobserve(t)}})});e.forEach(function(e){n.observe(e)})}};function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var isElementInViewport=function(e){var t=e.getBoundingClientRect();return 120<=t.top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)},isCardVisible=function(){var e,t=document.querySelectorAll("#pokebox"),n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;isElementInViewport(r)?r.classList.remove("isNotVisible"):r.classList.add("isNotVisible")}}catch(e){n.e(e)}finally{n.f()}},scrollOn=function(){var e=document.getElementById("gotop");300<window.pageYOffset?e.classList.add("scrollOn"):e.classList.remove("scrollOn"),isCardVisible()};window.addEventListener("scroll",scrollOn),window.addEventListener("resize",isCardVisible);var inputValue=document.getElementById("search"),mainContent=document.getElementById("main-content"),filterNames=function(){var r=inputValue.value.toUpperCase(),e=document.querySelectorAll("#pokebox");e.forEach(function(e){var t=e.lastElementChild.innerHTML,n=e.firstElementChild.innerHTML;-1<t.toUpperCase().indexOf(r)||-1<n.indexOf(r)?e.style.display="block":e.style.display="none"}),isCardVisible(),mainIsEmpty(e)},mainIsEmpty=function(e){var t=0;e.forEach(function(e){"isNotVisible"!=e.classList[1]&&t++}),0===t&&mainContent.classList.add("empty"),0<t&&mainContent.classList.remove("empty")};inputValue.addEventListener("keyup",filterNames);var buttonModal=document.getElementById("slider-button"),modal=document.getElementById("modal"),imageModal=document.getElementById("slider-img"),displayModal=function(){modal.classList.toggle("isActive"),buttonModal.classList.toggle("isActive"),imageModal.classList.toggle("isActive")};function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}buttonModal.addEventListener("click",displayModal);var form=document.getElementById("radio-group"),sortByNumber=function(e){e.sort(function(e,t){return e.firstElementChild.innerHTML>t.firstElementChild.innerHTML?1:e.firstElementChild.innerHTML<t.firstElementChild.innerHTML?-1:0})},sortByName=function(e){e.sort(function(e,t){return e.lastElementChild.innerHTML>t.lastElementChild.innerHTML?1:e.lastElementChild.innerHTML<t.lastElementChild.innerHTML?-1:0})},optionChange=function(){var e,t=new FormData(form),n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){return e.value[1]}}catch(e){n.e(e)}finally{n.f()}},toNodeList=function(e){var t=new DocumentFragment;return e.forEach(function(e){return t.appendChild(e)}),t},sortOption=function(){var e=optionChange(),t=Array.from(document.querySelectorAll("#pokebox"));switch(e){case"number":sortByNumber(t);break;case"name":sortByName(t);break;case"favorites":console.log(favorites);break;default:console.log("Esta opción no existe: ".concat(e))}var n=document.getElementById("main"),r=toNodeList(t);n.appendChild(r),isCardVisible()};form.addEventListener("change",sortOption);var getBase64Image=function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/,"")},loadImage=function(e){var t=getBase64Image(e);localStorage.setItem("imgData",t)},loadPokemon=function(e){fetch("".concat(e)).then(function(e){return e.json()}).then(function(e){localStorage.setItem("pokemon",JSON.stringify(e))}).then(function(){window.location="view.html"}).catch(function(e){return console.log(e)})},getLinks=function(){document.querySelectorAll(".pokebox__img").forEach(function(e){return e.addEventListener("click",function(e){loadPokemon(e.target.dataset.url),loadImage(e.target)})})};