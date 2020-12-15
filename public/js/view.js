"use strict";var loadSpecies=function(e){fetch("".concat(e)).then(function(e){return e.json()}).then(function(e){document.getElementById("color").innerHTML=e.color.name;var t=document.createElement("p"),n=Math.floor(10*Math.random());t.innerHTML=e.flavor_text_entries[n].flavor_text,document.getElementById("flavor text").appendChild(t)}).catch(function(e){return console.log(e)})},loadAbout=function(e){var t,n,r=e.species,a=e.weight,o=e.height,i=e.abilities;document.getElementById("height").innerHTML=10*o+"cm",document.getElementById("weight").innerHTML=a/10+"kg",t=i,n=document.createElement("ul"),t.forEach(function(e){var t=document.createElement("li");t.innerHTML=e.ability.name,n.appendChild(t)}),document.getElementById("abilities").appendChild(n),loadSpecies(r.url)},arrow=document.getElementById("icon-arrow"),heart=document.getElementById("icon-heart"),tap=document.querySelectorAll(".tap-bar__label"),removeElement=function(e,t){var n=e.indexOf(t);-1<n&&e.splice(n,1)};arrow.addEventListener("click",function(){window.location="index.html"}),heart.addEventListener("click",function(e){var t=e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML,n=JSON.parse(localStorage.getItem("favorites"));e.target.classList.contains("isActive")?removeElement(n,t):n.push(t),localStorage.setItem("favorites",JSON.stringify(n)),e.target.classList.toggle("isActive")}),tap.forEach(function(e){return e.addEventListener("keypress",function(e){32==e.keyCode&&document.activeElement.click()})});var LightenDarkenColor=function(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var r=parseInt(e,16),a=(r>>16)+t;255<a?a=255:a<0&&(a=0);var o=(r>>8&255)+t;255<o?o=255:o<0&&(o=0);var i=(255&r)+t;return 255<i?i=255:i<0&&(i=0),(n?"#":"")+(i|o<<8|a<<16).toString(16)},renderColor=function(e){var t=getComputedStyle(document.documentElement).getPropertyValue("--".concat(e,"-color")).trim(),n=document.getElementById("basicinfo").querySelectorAll("span");document.body.style.backgroundColor=t,n.forEach(function(e){e.style.backgroundColor=LightenDarkenColor(t,80)})};function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var renderInfo=function(e){var t=sessionStorage.getItem("imgView"),n=JSON.parse(localStorage.getItem("favorites"));document.getElementById("pokename").innerHTML=e.name,document.getElementById("pokenumber").innerHTML="#"+e.id.toString().padStart(3,"0");var r,a=document.getElementById("basicinfo"),o=_createForOfIteratorHelper(e.types);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=document.createElement("span");c.innerHTML=i.type.name,a.appendChild(c)}}catch(e){o.e(e)}finally{o.f()}document.getElementById("pokedataimg").src="data:image/png;base64,"+t,-1!==n.indexOf(e.name)&&heart.classList.toggle("isActive")},labels=[["id","power","pp"],["target","type","accuracy"]],list=["effect","flavor"],loadMoves=function(e){var r=document.getElementById("moves-list");e.forEach(function(e){var t=document.createElement("li");t.innerHTML=e.move.name,t.classList.add("moves-list__item"),t.setAttribute("tabIndex",0),t.dataset.url=e.move.url,r.appendChild(t);var n=document.createElement("div");n.classList.add("moves-list__card"),r.appendChild(n)})},createCard=function(e,t){var i=[[t.id,t.power,t.pp],[t.target.name,t.type.name,t.accuracy]],a=[t.effect_entries[0].effect,t.flavor_text_entries[0].flavor_text],n=document.createElement("div");n.classList.add("moves-list__info"),labels.forEach(function(e,a){var o=document.createElement("ul");o.classList.add("moves-list__block"),n.appendChild(o),e.forEach(function(e,t){var n=document.createElement("li");n.classList.add("moves-list__".concat(e)),n.innerHTML="".concat(e,": ");var r=document.createElement("span");null===i[a][t]?r.innerHTML="-":r.innerHTML=i[a][t],n.appendChild(r),o.appendChild(n)})}),e.appendChild(n);var o=document.createElement("ul");o.classList.add("moves-list__text"),list.forEach(function(e,t){var n=document.createElement("li");n.classList.add("moves-list__".concat(e)),n.innerHTML="".concat(e,":");var r=document.createElement("p");r.innerHTML=a[t],n.appendChild(r),o.appendChild(n)}),e.appendChild(o)},moves=document.getElementById("moves-list");moves.addEventListener("click",function(t){t.target.classList.contains("moves-list__item")&&(t.target.classList.contains("created")?t.target.nextElementSibling.classList.toggle("isActive"):fetch("".concat(t.target.dataset.url)).then(function(e){return e.json()}).then(function(e){createCard(t.target.nextElementSibling,e),t.target.classList.add("created"),t.target.nextElementSibling.classList.add("isActive")}).catch(function(e){return console.log(e)}))}),moves.addEventListener("keypress",function(t){if("Enter"==t.key){if(!t.target.classList.contains("moves-list__item"))return;t.target.classList.contains("created")?t.target.nextElementSibling.classList.toggle("isActive"):fetch("".concat(t.target.dataset.url)).then(function(e){return e.json()}).then(function(e){createCard(t.target.nextElementSibling,e),t.target.classList.add("created"),t.target.nextElementSibling.classList.add("isActive")}).catch(function(e){return console.log(e)})}});var renderSections=function(e){loadAbout(e),loadStats(e.stats),loadMoves(e.moves)},loadStats=function(a){var o=0;["HP","Attack","Defense","Sp-Atk","Sp-Def","Speed"].forEach(function(e,t){var n=document.createElement("span");n.innerHTML=a[t].base_stat;var r=document.createElement("progress");r.id="".concat(e),r.setAttribute("max","100"),r.setAttribute("value","".concat(a[t].base_stat)),50<=a[t].base_stat?r.style.setProperty("--color-bar","#14a06f"):r.style.setProperty("--color-bar","#f42a28"),document.getElementById("".concat(e)).appendChild(n),document.getElementById("".concat(e)).appendChild(r),o+=a[t].base_stat});var e=document.createElement("span");e.innerHTML=o;var t=document.createElement("progress");t.id="Total",t.setAttribute("max","600"),t.setAttribute("value","".concat(o)),t.style.setProperty("--color-bar","#37a5c6"),document.getElementById("Total").appendChild(e),document.getElementById("Total").appendChild(t)};document.addEventListener("DOMContentLoaded",function(){var e=JSON.parse(sessionStorage.getItem("pokemonView"));renderInfo(e),renderColor(e.types[0].type.name),renderSections(e)});