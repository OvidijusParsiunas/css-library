function bootstrapTooltip() {
  $(function () {
    $('[data-toggle="bootstrapTooltip"]').bootstrapTooltip()
  });
}

function bulmaAlert() {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;
    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
}

function bulmaAccordion() {
  // eslint-disable-next-line
  !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaAccordion=t():e.bulmaAccordion=t()}("undefined"!=typeof self?self:this,function(){return function(n){const r={};function i(e){if(r[e])return r[e].exports;const t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){const t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=function(){function r(e,t){for(const n=0;n<t.length;n++){const r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();const a=Symbol("onBulmaAccordionClick"),r=function(e){function r(e){1<arguments.length&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);const t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));if(t.element="string"==typeof e?document.querySelector(e):e,!t.element)throw new Error("An invalid selector or non-DOM node has been provided.");return t._clickEvents=["click"],t[a]=t[a].bind(t),t.init(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i["a"]),o(r,[{key:"init",value:function(){this.items=this.element.querySelectorAll(".accordion .toggle")||[],this._bindEvents()}},{key:"destroy",value:function(){const n=this;this.items.forEach(function(t){n._clickEvents.forEach(function(e){t.removeEventListener(e,n[a],!1)})})}},{key:"_bindEvents",value:function(){const n=this;this.items.forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n[a],!1)})})}},{key:a,value:function(e){e.preventDefault();const t=e.currentTarget.closest(".accordion")||e.currentTarget;if(t.classList.contains("is-active"))t.classList.remove("is-active");else{const n=this.element.querySelector(".accordion.is-active");n&&n.classList.remove("is-active"),t.classList.add("is-active")}}}],[{key:"attach",value:function(){const e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".accordions",t=new Array,n=document.querySelectorAll(e);return[].forEach.call(n,function(e){setTimeout(function(){t.push(new r(e))},100)}),t}}]),r}();t.default=r},function(e,t,n){"use strict";const r=function(){function r(e,t){for(const n=0;n<t.length;n++){const r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();const i=function(){function t(){const e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=new Map(e),this._middlewares=new Map}return r(t,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){const t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(e,t){const n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){const t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(e,t){const n=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{const i=(e=e.toString()).split(/,|, | /);1<i.length?i.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:r,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(n,r){const i=this,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n.toString();const a=this._listeners.get(n),l=null,s=0,c=o;if(Array.isArray(a))for(a.forEach(function(e,t){o||(l=i._middlewares.get(n),Array.isArray(l)?(l.forEach(function(e){e(r,function(){const e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(r=e),s++},n)}),s>=l.length&&(c=!0)):c=!0),c&&(e.once&&(a[t]=null),e.callback(r))});-1!==a.indexOf(null);)a.splice(a.indexOf(null),1)}}]),t}();t.a=i}]).default});
}

function bulmaModal() {
  $(".modal-button").click(function() {
    const target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
  });
  $(".bulma-close").click(function() {
    $("html").removeClass("is-clipped");
    $(this).parent().parent().parent().removeClass("is-active");
  });
  $(".modal-background").click(function() {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
  });
}

function bulmaTrigger() {
  bulmaAccordion.attach();
}

function foundationTrigger() {
  $(document).foundation();
}

function materializeAccordion() {
  const elems = document.querySelectorAll('.collapsible');
  if (elems.length > 0) {
    M.Collapsible.init(elems, {});
  }
}

function materializeButton() {
  Waves.displayEffect();
}

function materializeDropdown() {
  const elems = document.querySelectorAll('.dropdown-trigger');
  if (elems.length > 0) {
    M.Dropdown.init(elems, {});
  }
}

function materializeFormSelect() {
  const elems = document.querySelectorAll('.materialize-select');
  if (elems.length > 0) {
    M.FormSelect.init(elems, {});
  }
}

function materializeModal() {
  const elems = document.querySelectorAll('.modal');
  if (elems.length > 0) {
    M.Modal.init(elems, {});
  }
}

function materializeTooltip() {
  const elems = document.querySelectorAll('.tooltipped');
  if (elems.length > 0) {
    M.Tooltip.init(elems, {});
  }
}

function materializeUpdateTextFields() {
  M.updateTextFields();
}

function semanticAccordion() {
  $('.ui.accordion').accordion();
}

function semanticAlert() {
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
}

function semanticCheckbox() {
  $('.ui.checkbox').checkbox();
}

function semanticDropdown() {
  $('.ui.dropdown').dropdown();
}

function semanticModal() {
  $(function(){
    $("#semantic-create-modal-button").click(function(){
      $(".semantic-modal").modal('show');
    });
    $(".semantic-modal").modal({
      closable: true
    });
  });
}

function spectreModal() {
  $(document).delegate('.modal-toggle', 'click', function(e) {
    const modal = $(this).attr('data-modal');
    $(modal).addClass('active');
    e.preventDefault();
  });
  $(document).delegate('.spectre-modal-close', 'click', function(e) {
      $(this).closest('.modal').removeClass('active');
      e.preventDefault();
  });
  $(document).delegate('.modal-overlay', 'click', function(e) {
      $(this).closest('.modal').removeClass('active');
      e.preventDefault();
  });
}

pureDropdown = () => {
  // eslint-disable-next-line
  !function(e,t){"use strict";function n(n){const i=e.hasOwnProperty&&e.hasOwnProperty("ontouchstart")?"touchstart":"mousedown",r=this;this._state=1,this.show=function(){0!==this._state&&(this._dropdownParent.classList.add("pure-menu-active"),this._menu.setAttribute("aria-hidden",!1),this._state=0)},this.hide=function(){1!==this._state&&(this._dropdownParent.classList.remove("pure-menu-active"),this._menu.setAttribute("aria-hidden",!0),this._link.focus(),this._state=1)},this.toggle=function(){this[1===this._state?"show":"hide"]()},this.halt=function(e){e.stopPropagation(),e.preventDefault()},this._dropdownParent=n,this._link=this._dropdownParent.querySelector(".pure-menu-link"),this._menu=this._dropdownParent.querySelector(".pure-menu-children"),this._firstMenuLink=this._menu.querySelector(".pure-menu-link"),this._link.setAttribute("aria-haspopup","true"),this._menu.setAttribute("role","menu"),this._menu.setAttribute("aria-labelledby",this._link.getAttribute("id")),this._menu.setAttribute("aria-hidden","true"),[].forEach.call(this._menu.querySelectorAll("li"),function(e){e.setAttribute("role","presentation")}),[].forEach.call(this._menu.querySelectorAll("a"),function(e){e.setAttribute("role","menuitem")}),this._link.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault(),r.toggle()}),t.addEventListener("keydown",function(e){let t,n,i,u,s;if(0===r._state&&!r._menu.querySelector(".pure-menu-active"))if(t=r._menu.querySelector(":focus"),27===e.keyCode)r.halt(e),r.hide();else if(40===e.keyCode){for(r.halt(e),i=t?t.parentNode.nextSibling:null;i&&1!==i.nodeType;)i=i.nextSibling;s=i?i.querySelector(".pure-menu-link"):null,t?s&&s.focus():r._menu.querySelector(".pure-menu-link").focus()}else if(38===e.keyCode){for(r.halt(e),n=t?t.parentNode.previousSibling:null;n&&1!==n.nodeType;)n=n.previousSibling;u=n?n.querySelector(".pure-menu-link"):null,t?u&&u.focus():r._menu.querySelector(".pure-menu-item:last-child .pure-menu-link").focus()}}),t.addEventListener(i,function(e){const t=e.target;t===r._link||r._menu.contains(t)||(r.hide(),r._link.blur())})}!function(){for(const e=t.querySelectorAll(".pure-menu-has-children"),i=0;i<e.length;i++)new n(e[i])}()}(this,this.document);
}

window.cssFrameworksJsFunctionality = {
    bootstrapTooltip,
    bulmaAlert,
    bulmaAccordion,
    bulmaModal,
    bulmaTrigger,
    foundationTrigger,
    materializeAccordion,
    materializeButton,
    materializeDropdown,
    materializeFormSelect,
    materializeModal,
    materializeTooltip,
    materializeUpdateTextFields,
    semanticAccordion,
    semanticAlert,
    semanticCheckbox,
    semanticDropdown,
    semanticModal,
    spectreModal,
    pureDropdown,
}