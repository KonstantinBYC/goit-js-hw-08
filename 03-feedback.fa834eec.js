!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),s?p(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?b(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?p(e):(i=r=void 0,u)}function w(){var e=g(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),S=O.elements.email,T=O.elements.message,h=document.querySelector("button"),w=JSON.parse(localStorage.getItem("feedback-form-state"));w&&(S.value=w.email,T.value=w.message,h.disabled=!(S.value&&T.value));O.addEventListener("input",e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:S.value,message:T.value})),h.disabled=!(S.value&&T.value)}),500));O.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:S.value,message:T.value}),O.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),h.enabled=!0}))}();
//# sourceMappingURL=03-feedback.fa834eec.js.map
