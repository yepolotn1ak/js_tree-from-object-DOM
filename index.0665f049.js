function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}!function e(t,n){Object.entries(n).forEach(function(n){var a=function(r){if(Array.isArray(r))return r}(n)||function(r,e){var t,n,a=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=a){var o=[],l=!0,i=!1;try{for(a=a.call(r);!(l=(t=a.next()).done)&&(o.push(t.value),2!==o.length);l=!0);}catch(r){i=!0,n=r}finally{try{l||null==a.return||a.return()}finally{if(i)throw n}}return o}}(n,2)||function(e,t){if(e){if("string"==typeof e)return r(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=a[0],l=a[1],i=document.createElement("li");if(i.innerText=o,t.append(i),Object.values(l).length){var u=document.createElement("ul");i.append(u),e(u,l)}})}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.0665f049.js.map
