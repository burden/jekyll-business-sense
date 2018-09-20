!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaCarousel=t():e.bulmaCarousel=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(2),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s="carousel:ready",a="carousel:slide:before",l="carousel:slide:after",c=Symbol("onSwipeStart"),u=Symbol("onSwipeMove"),d=Symbol("onSwipeEnd"),h=!1;try{var f=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}catch(e){}var m=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(i.element="string"==typeof t?document.querySelector(t):t,!i.element)throw new Error("An invalid selector or non-DOM node has been provided.");return i._clickEvents=["click"],i.options=Object.assign({},o.a,n),i.element.dataset.autoplay&&(i.options.autoplay=i.element.dataset.autoplay),i.element.dataset.delay&&(i.options.delay=i.element.dataset.delay),i.element.dataset.size&&!i.element.classList.contains("carousel-animate-fade")&&(i.options.size=i.element.dataset.size),i.element.classList.contains("carousel-animate-fade")&&(i.options.size=1),i.forceHiddenNavigation=!1,i[c]=i[c].bind(i),i[u]=i[u].bind(i),i[d]=i[d].bind(i),i.init(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(e,i.a),r(e,[{key:"init",value:function(){this.container=this.element.querySelector(".carousel-container"),this.items=this.element.querySelectorAll(".carousel-item"),this.currentItem={element:this.element,node:this.element.querySelector(".carousel-item.is-active"),pos:-1},this.currentItem.pos=this.currentItem.node?Array.from(this.items).indexOf(this.currentItem.node):-1,this.currentItem.node||(this.currentItem.node=this.items[0],this.currentItem.node.classList.add("is-active"),this.currentItem.pos=0),this.forceHiddenNavigation=this.items.length<=1;var e=this.element.querySelectorAll("img");[].forEach.call(e,function(e){e.setAttribute("draggable",!1)}),this._resize(),this._setOrder(),this._initNavigation(),this._bindEvents(),this.options.autoplay&&this._autoPlay(this.options.delay),this.emit(s,this.currentItem)}},{key:"_resize",value:function(){var e=this,t=window.getComputedStyle(this.element),n=parseInt(t.getPropertyValue("width"),10);if(1<this.options.size&&(this.options.size>=Array.from(this.items).length?this.offset=0:this.offset=n/this.options.size,this.container.style.left=0-this.offset+"px",this.container.style.transform="translateX("+this.offset+"px)",[].forEach.call(this.items,function(t){t.style.flexBasis=e.offset+"px"})),this.element.classList.contains("carousel-animate-fade")&&this.items.length){var i=this.items[0].querySelector("img"),o=1;i.naturalWidth?(o=n/i.naturalWidth,this.container.style.height=i.naturalHeight*o+"px"):i.onload=function(){o=n/i.naturalWidth,e.container.style.height=i.naturalHeight*o+"px"}}}},{key:"_bindEvents",value:function(){var e=this;this.previousControl&&this._clickEvents.forEach(function(t){e.previousControl.addEventListener(t,function(t){h||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.optionsdelay)),e._slide("previous")},!!h&&{passive:!0})}),this.nextControl&&this._clickEvents.forEach(function(t){e.nextControl.addEventListener(t,function(t){h||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.options.delay)),e._slide("next")},!!h&&{passive:!0})}),this.element.addEventListener("touchstart",this[c],!!h&&{passive:!0}),this.element.addEventListener("mousedown",this[c],!!h&&{passive:!0}),this.element.addEventListener("touchmove",this[u],!!h&&{passive:!0}),this.element.addEventListener("mousemove",this[u],!!h&&{passive:!0}),this.element.addEventListener("touchend",this[d],!!h&&{passive:!0}),this.element.addEventListener("mouseup",this[d],!!h&&{passive:!0})}},{key:"destroy",value:function(){this.element.removeEventListener("touchstart",this[c],!!h&&{passive:!0}),this.element.removeEventListener("mousedown",this[c],!!h&&{passive:!0}),this.element.removeEventListener("touchmove",this[u],!!h&&{passive:!0}),this.element.removeEventListener("mousemove",this[u],!!h&&{passive:!0}),this.element.removeEventListener("touchend",this[d],!!h&&{passive:!0}),this.element.removeEventListener("mouseup",this[d],!!h&&{passive:!0})}},{key:c,value:function(e){h||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch={start:{time:(new Date).getTime(),x:e.pageX,y:e.pageY},dist:{x:0,y:0}}}},{key:u,value:function(e){h||e.preventDefault()}},{key:d,value:function(e){h||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch.dist={x:e.pageX-this._touch.start.x,y:e.pageY-this._touch.start.y},this._handleGesture()}},{key:"_handleGesture",value:function(){(new Date).getTime()-this._touch.start.time<=this.options.allowedTime&&Math.abs(this._touch.dist.x)>=this.options.threshold&&Math.abs(this._touch.dist.y)<=this.options.restraint&&(this._touch.dist.x<0?this._slide("next"):this._slide("previous"))}},{key:"_initNavigation",value:function(){this.previousControl=this.element.querySelector(".carousel-nav-left"),this.nextControl=this.element.querySelector(".carousel-nav-right"),(this.items.length<=1||this.forceHiddenNavigation)&&(this.container&&(this.container.style.left="0"),this.previousControl&&(this.previousControl.style.display="none"),this.nextControl&&(this.nextControl.style.display="none"))}},{key:"_setOrder",value:function(){this.currentItem.node.style.order="1",this.currentItem.node.style.zIndex="1";var e,t=this.currentItem.node,n=void 0,i=void 0;for(n=i=2,e=Array.from(this.items).length;2<=e?i<=e:e<=i;n=2<=e?++i:--i)(t=this._next(t)).style.order=""+n%Array.from(this.items).length,t.style.zIndex="0"}},{key:"_next",value:function(e){return e.nextElementSibling?e.nextElementSibling:this.items[0]}},{key:"_previous",value:function(e){return e.previousElementSibling?e.previousElementSibling:this.items[this.items.length-1]}},{key:"_slide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"next";this.items.length&&(this.oldItemNode=this.currentItem.node,this.emit(a,this.currentItem),"previous"===t?(this.currentItem.node=this._previous(this.currentItem.node),this.element.classList.contains("carousel-animate-fade")||(this.element.classList.add("is-reversing"),this.container.style.transform="translateX("+-Math.abs(this.offset)+"px)")):(this.currentItem.node=this._next(this.currentItem.node),this.element.classList.remove("is-reversing"),this.container.style.transform="translateX("+Math.abs(this.offset)+"px)"),this.currentItem.node.classList.add("is-active"),this.oldItemNode.classList.remove("is-active"),this.element.classList.remove("carousel-animated"),setTimeout(function(){e.element.classList.add("carousel-animated")},50),this._setOrder(),this.emit(l,this.currentItem))}},{key:"_autoPlay",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5e3;this._autoPlayInterval=setInterval(function(){e._slide("next")},t)}}],[{key:"attach",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".carousel, .hero-carousel",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=new Array,o=document.querySelectorAll(t);return[].forEach.call(o,function(t){setTimeout(function(){i.push(new e(t,n))},100)}),i}}]),e}();t["default"]=m},function(e,t){"use strict";var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=new Map(t),this._middlewares=new Map}return n(e,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeListeners(t,n)}):(this._listeners["delete"](t),n&&this.removeMiddleware(t)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeMiddleware(t)}):this._middlewares["delete"](t):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var o=(e=e.toString()).split(/,|, | /);1<o.length?o.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:i,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];e=e.toString();var o=this._listeners.get(e),r=null,s=0,a=i;if(Array.isArray(o))for(o.forEach(function(l,c){i||(r=n._middlewares.get(e),Array.isArray(r)?(r.forEach(function(n){n(t,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(t=e),s++},e)}),s>=r.length&&(a=!0)):a=!0),a&&(l.once&&(o[c]=null),l.callback(t))});-1!==o.indexOf(null);)o.splice(o.indexOf(null),1)}}]),e}();t.a=i},function(e,t){"use strict";t.a={size:1,autoplay:!1,delay:5e3,threshold:50,restraint:100,allowedTime:500}}])["default"]}),function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.gumshoe=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,i,o,r,s,a,l={},c=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},d=function(){return"querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_")},h=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;o<r;o++)t.call(n,e[o],o,e)},f=function(){var e={},t=!1,n=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(!0,e[i],n[i]):e[i]=n[i])};n<i;n++){o(arguments[n])}return e},m=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},p=function(e){var n=0;if(e.offsetParent){do{n+=e.offsetTop,e=e.offsetParent}while(e)}else n=e.offsetTop;return n=n-r-t.offset,n>=0?n:0},y=function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&n.right<=(e.innerWidth||document.documentElement.clientWidth)},g=function(){c.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};l.setDistances=function(){i=v(),r=o?m(o)+p(o):0,h(c,function(e){e.distance=p(e.target)}),g()};var b=function(){var e=document.querySelectorAll(t.selector);h(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&c.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})},E=function(){s&&(s.nav.classList.remove(t.activeClass),s.parent&&s.parent.classList.remove(t.activeClass))},w=function(e){E(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),s={nav:e.nav,parent:e.parent}};l.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=i&&y(c[0].target))return w(c[0]),c[0];for(var o=0,r=c.length;o<r;o++){var s=c[o];if(s.distance<=n)return w(s),s}E(),t.callback()};var L=function(){h(c,function(e){e.nav.classList.contains(t.activeClass)&&(s={nav:e.nav,parent:e.parent})})};l.destroy=function(){t&&(t.container.removeEventListener("resize",S,!1),t.container.removeEventListener("scroll",S,!1),c=[],t=null,n=null,i=null,o=null,r=null,s=null,a=null)};var _=function(){window.clearTimeout(n),n=setTimeout(function(){l.setDistances(),l.getCurrentNav()},66)},S=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&l.getCurrentNav(),"resize"===e.type&&(l.setDistances(),l.getCurrentNav())},66))};return l.init=function(e){d()&&(l.destroy(),t=f(u,e||{}),o=document.querySelector(t.selectorHeader),b(),0!==c.length&&(L(),l.setDistances(),l.getCurrentNav(),t.container.addEventListener("resize",S,!1),t.scrollDelay?t.container.addEventListener("scroll",_,!1):t.container.addEventListener("scroll",S,!1)))},l}),function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},i=function(){for(var e={},t=function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n=0;n<arguments.length;n++)t(arguments[n]);return e},o=function(){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},s=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),i=n.length,o=-1,r="",s=n.charCodeAt(0);++o<i;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===o&&t>=48&&t<=57||1===o&&t>=48&&t<=57&&45===s?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(o):"\\"+n.charAt(o)}var a;try{a=decodeURIComponent("#"+r)}catch(e){a="#"+r}return a},l=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},c=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},u=function(t,n,i,o){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-i,0),o&&(r=Math.min(r,c()-e.innerHeight)),r},d=function(e){return e?r(e)+e.offsetTop:0},h=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},f=function(t,n,i){0===t&&document.body.focus(),i||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},m=function(t,n,i,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:i,toggle:o}});document.dispatchEvent(r)}};return function(r,v){var p,y,g,b,E,w,L,_={};_.cancelScroll=function(e){cancelAnimationFrame(L),L=null,e||m("scrollCancel",p)},_.animateScroll=function(n,o,r){var s=i(p||t,r||{}),a="[object Number]"===Object.prototype.toString.call(n),v=a||!n.tagName?null:n;if(a||v){var y=e.pageYOffset;s.header&&!b&&(b=document.querySelector(s.header)),E||(E=d(b));var g,w,S,x=a?n:u(v,E,parseInt("function"==typeof s.offset?s.offset(n,o):s.offset,10),s.clip),I=x-y,O=c(),A=0,C=function(t,i){var r=e.pageYOffset;if(t==i||r==i||(y<i&&e.innerHeight+r)>=O)return _.cancelScroll(!0),f(n,i,a),m("scrollStop",s,n,o),g=null,L=null,!0},k=function(t){g||(g=t),A+=t-g,w=A/parseInt(s.speed,10),w=w>1?1:w,S=y+I*l(s,w),e.scrollTo(0,Math.floor(S)),C(S,x)||(L=e.requestAnimationFrame(k),g=t)};0===e.pageYOffset&&e.scrollTo(0,0),h(n,a,s),m("scrollStart",s,n,o),_.cancelScroll(!0),e.requestAnimationFrame(k)}};var S=function(t){if(!o(p)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(g=t.target.closest(r))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(p.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n=a(s(g.hash)),i=p.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);i=i||"#top"!==n?i:document.documentElement,i&&(t.preventDefault(),_.animateScroll(i,g))}},x=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(p)&&history.state.anchor){var e=document.querySelector(a(s(history.state.anchor)));e&&_.animateScroll(e,null,{updateURL:!1})}},I=function(){w||(w=setTimeout(function(){w=null,E=d(b)},66))};return _.destroy=function(){p&&(document.removeEventListener("click",S,!1),e.removeEventListener("resize",I,!1),e.removeEventListener("popstate",x,!1),_.cancelScroll(),p=null,y=null,g=null,b=null,E=null,w=null,L=null)},_.init=function(o){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";_.destroy(),p=i(t,o||{}),b=p.header?document.querySelector(p.header):null,E=d(b),document.addEventListener("click",S,!1),b&&e.addEventListener("resize",I,!1),p.updateURL&&p.popstate&&e.addEventListener("popstate",x,!1)},_.init(v),_}}),document.addEventListener("DOMContentLoaded",function(){function e(e,t){for(shift=t.length,link="",i=0;i<t.length;i++)-1==e.indexOf(t.charAt(i))?(ltr=t.charAt(i),link+=ltr):(ltr=(e.indexOf(t.charAt(i))-shift+e.length)%e.length,link+=e.charAt(ltr));return link}function t(e){var t=document.getElementById(e);c.classList.add("is-clipped"),t.classList.add("is-active")}function n(){c.classList.remove("is-clipped"),u.forEach(function(e){e.classList.remove("is-active")})}function o(e){return Array.prototype.slice.call(document.querySelectorAll(e),0)}new SmoothScroll('a[href*="#"]',{easing:"easeInOutQuint",updateURL:!1,speed:900});gumshoe.init({selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:window,offset:0,activeClass:"is-active",scrollDelay:!0});var r=(bulmaCarousel.attach(),o("meta[name=contact]")),s=r[0].getAttribute("data-key"),a=r[0].getAttribute("data-encoded"),l=o(".has-secret-email");l.forEach(function(t){t.setAttribute("href","mailto:"+e(s,a)),t.textContent=e(s,a)});var l=o(".has-secret-action");l.forEach(function(t){t.setAttribute("action","https://formspree.io/"+e(s,a))});var l=o(".has-secret-mailto");l.forEach(function(t){t.setAttribute("href","mailto:"+e(s,a))});var c=document.documentElement,u=o(".modal"),d=o(".lightbox-image"),h=o(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");d.length>0&&d.forEach(function(e){e.addEventListener("click",function(){t(e.dataset.target)})}),h.length>0&&h.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n()})}),document.addEventListener("keydown",function(e){27===(e||window.event).keyCode&&n()});var f=o(".navbar-burger");f.length>0&&f.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})});var m=o(".navbar-item");m.length>0&&m.forEach(function(e){e.addEventListener("click",function(){$burger=document.getElementById("navbarBurger"),$burger.classList.contains("is-active")&&($burger.classList.remove("is-active"),document.getElementById($burger.dataset.target).classList.remove("is-active"))})})});