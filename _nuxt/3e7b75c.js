(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{967:function(t,e,l){"use strict";l.r(e);l(38);var o={props:{headertitle:{type:String,default:""},portletclass:{type:String,default:""}},data:function(){return{isVisible:!0,showCollapse:!0,isLoading:!1}},methods:{refreshContent:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),2e3)},remove:function(){this.isVisible=!1},collapse:function(){this.showCollapse=!this.showCollapse}}},r=l(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isVisible?l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"card-widgets"},[l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.refreshContent}},[l("i",{staticClass:"mdi mdi-refresh"})]),t._v(" "),l("a",{class:[t.showCollapse?"collapsed":null,t.showCollapse?"mdi mdi-minus":"mdi mdi-plus"],attrs:{"aria-expanded":t.showCollapse?"true":"false","aria-controls":"collapse-1"},on:{click:t.collapse}}),t._v(" "),l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.remove}},[l("i",{staticClass:"mdi mdi-close"})])]),t._v(" "),l("h4",{staticClass:"header-title mb-0",class:t.portletclass},[t._v(t._s(t.headertitle))])]),t._v(" "),l("b-collapse",{attrs:{id:"collapse-1"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t._t("default")],2),t._v(" "),t.isLoading?l("div",{staticClass:"card-disabled"},[t._m(0)]):t._e()],1):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-portlets-loader"},[e("div",{staticClass:"spinner-border text-primary m-2",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports}}]);