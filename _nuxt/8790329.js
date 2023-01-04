(window.webpackJsonp=window.webpackJsonp||[]).push([[107,41,106],{1007:function(e,t,n){e.exports=n.p+"img/airbnb.df6842b.png"},1008:function(e,t,n){e.exports=n.p+"img/apple.8786ff2.png"},1009:function(e,t,n){e.exports=n.p+"img/google.a6c6fff.png"},1010:function(e,t,n){e.exports=n.p+"img/facebook.dfdbc84.png"},1011:function(e,t,n){e.exports=n.p+"img/cisco.bea90ea.png"},1060:function(e,t,n){"use strict";n.r(t),n.d(t,"companies",(function(){return r}));var r=[{logo:n(1007),name:"Airbnb Inc.",location:"San Francisco, California",revenue:"260 cr",employees:"3.1k"},{logo:n(1008),name:"Apple Inc.",location:"Cupertino, California",revenue:"22,923.4 cr",employees:"47k"},{logo:n(1009),name:"Google LLC",location:"Menlo Park, California",revenue:"110 bn",employees:"72k"},{logo:n(991),name:"Amazon Inc.",location:"Seattle, Washington",revenue:"17,786 cr",employees:"566k"},{logo:n(1010),name:"Facebook Inc.",location:"Cambridge, Massachusetts",revenue:"9.16 bn",employees:"25.1k"},{logo:n(1011),name:"Cisco Systems",location:"San Jose, California",revenue:"4,800.5 cr",employees:"73.4k"}]},1325:function(e,t,n){"use strict";n.r(t);n(22);var r=n(1060),o=n(858),l={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{companies:r.companies,title:"Companies",items:[{text:"abis.uz",href:"/"},{text:"Apps",href:"/"},{text:"Companies",active:!0}],showmodal:!1,submitted:!1,company:{name:"",location:""}}},validations:{company:{name:{required:o.required},location:{required:o.required}}},methods:{handleSubmit:function(e){if(this.submitted=!0,this.$v.$touch(),!this.$v.$invalid){var t=this.company.name,r=this.company.location;this.companies.push({logo:n(991),name:t,location:r}),this.showmodal=!1,this.submitted=!1,this.company={}}},hideModal:function(e){this.submitted=!1,this.showmodal=!1,this.company={}}},middleware:"auth"},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageHeader",{attrs:{title:e.title,items:e.items}}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"text-lg-right mt-3 mt-lg-0"},[e._m(1),e._v(" "),n("a",{staticClass:"btn text-white btn-danger",attrs:{href:"javascript: void(0);"},on:{click:function(t){e.showmodal=!0}}},[n("i",{staticClass:"mdi mdi-plus-circle mr-1"}),e._v(" Add New\n                ")])])])])])])])]),e._v(" "),n("div",{staticClass:"row"},e._l(e.companies,(function(t){return n("div",{key:t.name,staticClass:"col-xl-4 col-sm-6"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"media"},[n("div",{staticClass:"avatar-md mr-3"},[n("div",{staticClass:"avatar-title bg-light rounded-circle"},[n("img",{staticClass:"avatar-sm rounded-circle",attrs:{src:""+t.logo,alt:"logo"}})])]),e._v(" "),n("div",{staticClass:"media-body"},[n("h4",{staticClass:"my-1"},[n("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0);"}},[e._v(e._s(t.name))])]),e._v(" "),n("p",{staticClass:"text-muted text-truncate mb-0"},[n("i",{staticClass:"ri-map-pin-line align-bottom mr-1"}),e._v("\n                "+e._s(t.location)+"\n              ")])]),e._v(" "),n("b-dropdown",{attrs:{right:"","toggle-class":"text-body p-0",variant:"black"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"mdi mdi-dots-vertical font-20"})]},proxy:!0}],null,!0)},[e._v(" "),n("b-dropdown-item",[e._v("Action")]),e._v(" "),n("b-dropdown-item",[e._v("Another action")]),e._v(" "),n("b-dropdown-item",[e._v("Something else here")])],1)],1),e._v(" "),t.revenue?n("hr"):e._e(),e._v(" "),n("div",{staticClass:"text-muted"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",[n("p",{staticClass:"text-truncate mb-0"},[e._v("Revenue (USD)")]),e._v(" "),n("h5",{staticClass:"mb-sm-0"},[e._v(e._s(t.revenue))])])]),e._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("p",{staticClass:"text-truncate mb-0"},[e._v("Number of employees")]),e._v(" "),n("h5",{staticClass:"mb-sm-0"},[e._v(e._s(t.employees))])])])])])])])])})),0),e._v(" "),n("b-modal",{attrs:{id:"modal-1",title:"Add Companies","header-close-variant":"light","title-class":"font-18","hide-footer":""},model:{value:e.showmodal,callback:function(t){e.showmodal=t},expression:"showmodal"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.company.name,expression:"company.name"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.company.name.$error},attrs:{id:"name",type:"text",placeholder:"Enter name"},domProps:{value:e.company.name},on:{input:function(t){t.target.composing||e.$set(e.company,"name",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.company.name.required?n("div",{staticClass:"invalid-feedback"},[e._v("\n          Name is required.\n        ")]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"location"}},[e._v("Location")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.company.location,expression:"company.location"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.company.location.$error},attrs:{id:"location",type:"text",placeholder:"Enter location"},domProps:{value:e.company.location},on:{input:function(t){t.target.composing||e.$set(e.company,"location",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.company.location.required?n("div",{staticClass:"invalid-feedback"},[e._v("\n          Location is required.\n        ")]):e._e()]),e._v(" "),n("div",{staticClass:"text-right"},[n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Save")]),e._v(" "),n("b-button",{staticClass:"ml-1",attrs:{variant:"danger"},on:{click:e.hideModal}},[e._v("Cancel")])],1)])])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-8"},[n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only"},[e._v("Search")]),e._v(" "),n("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Search..."}})]),e._v(" "),n("div",{staticClass:"form-group mx-sm-3"},[n("label",{staticClass:"mr-2",attrs:{for:"status-select"}},[e._v("Sort By")]),e._v(" "),n("select",{staticClass:"custom-select",attrs:{id:"status-select"}},[n("option",[e._v("Select")]),e._v(" "),n("option",[e._v("Date")]),e._v(" "),n("option",{attrs:{selected:""}},[e._v("Name")]),e._v(" "),n("option",[e._v("Revenue")]),e._v(" "),n("option",[e._v("Employees")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn btn-success mr-1",attrs:{type:"button"}},[t("i",{staticClass:"mdi mdi-cog"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:n(837).default})},837:function(e,t,n){"use strict";n.r(t);var r=n(35),o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(r.c)(["layout"])},l=n(16),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==e.layout.layoutType&&"two-column"!==e.layout.layoutType}},[n("h4",{staticClass:"page-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"page-title-right"},[n("b-breadcrumb",{staticClass:"m-0",attrs:{items:e.items}})],1)])])])}),[],!1,null,null,null);t.default=component.exports},838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(860))&&r.__esModule?r:{default:r};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,n){return"function"==typeof e?e.call(t,n):n[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},858:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return w.default}});var o=D(n(859)),l=D(n(862)),c=D(n(863)),f=D(n(864)),d=D(n(865)),m=D(n(866)),v=D(n(867)),y=D(n(868)),_=D(n(869)),h=D(n(870)),x=D(n(871)),P=D(n(872)),C=D(n(873)),w=D(n(874)),j=D(n(875)),O=D(n(876)),M=D(n(877)),S=D(n(878)),$=D(n(879)),A=D(n(880)),k=D(n(881)),z=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=N(t);if(n&&n.has(e))return n.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var desc=l?Object.getOwnPropertyDescriptor(e,c):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,c,desc):o[c]=e[c]}o.default=e,n&&n.set(e,o);return o}(n(838));function N(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(N=function(e){return e?n:t})(e)}function D(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("alpha",/^[a-zA-Z]*$/);t.default=r},860:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===e.env.BUILD?n(861).withParams:n(532).withParams;t.default=r}).call(this,n(94))},861:function(e,t,n){"use strict";(function(e){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==e?e:{},o=r.vuelidate?r.vuelidate.withParams:function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,n(18))},862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},863:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("numeric",/^[0-9]*$/);t.default=r},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))}},865:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=r},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838),o=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},867:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var n="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},869:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838),o=(0,r.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=o},871:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,r.ref)(e,this,n)}))}},874:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=r},875:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,r)}),!1)}))}},876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,r)}),!0)}))}},877:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"not"},(function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)}))}},878:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(838);t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},880:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(838).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},991:function(e,t,n){e.exports=n.p+"img/amazon.65da48d.png"}}]);