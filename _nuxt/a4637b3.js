(window.webpackJsonp=window.webpackJsonp||[]).push([[273,41,42],{1418:function(t,e,l){"use strict";l.r(e);var o={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{title:"Portlets",items:[{text:"abis.uz",href:"/"},{text:"UI",href:"/"},{text:"Portlets",active:!0}],headerTitle:"Card title",portletclass:"text-white",cardColor:[{color:"primary"},{color:"success"},{color:"danger"},{color:"purple"},{color:"warning"},{color:"info"},{color:"dark"},{color:"pink"}]}},middleware:"auth"},r=l(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),l("div",{staticClass:"row"},t._l(t.cardColor,(function(e){return l("div",{key:e.color,staticClass:"col-lg-4"},[l("Portlet",{class:"bg-"+e.color+" text-white",attrs:{headertitle:t.headerTitle,portletclass:t.portletclass}},[l("div",{staticClass:"card-body pt-0"},[t._v("\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat\n          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n          single-origin coffee nulla assumenda shoreditch et.\n        ")])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(837).default,Portlet:l(967).default})},837:function(t,e,l){"use strict";l.r(e);var o=l(35),r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},c=l(16),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[l("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"page-title-right"},[l("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},967:function(t,e,l){"use strict";l.r(e);l(38);var o={props:{headertitle:{type:String,default:""},portletclass:{type:String,default:""}},data:function(){return{isVisible:!0,showCollapse:!0,isLoading:!1}},methods:{refreshContent:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),2e3)},remove:function(){this.isVisible=!1},collapse:function(){this.showCollapse=!this.showCollapse}}},r=l(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isVisible?l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"card-widgets"},[l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.refreshContent}},[l("i",{staticClass:"mdi mdi-refresh"})]),t._v(" "),l("a",{class:[t.showCollapse?"collapsed":null,t.showCollapse?"mdi mdi-minus":"mdi mdi-plus"],attrs:{"aria-expanded":t.showCollapse?"true":"false","aria-controls":"collapse-1"},on:{click:t.collapse}}),t._v(" "),l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.remove}},[l("i",{staticClass:"mdi mdi-close"})])]),t._v(" "),l("h4",{staticClass:"header-title mb-0",class:t.portletclass},[t._v(t._s(t.headertitle))])]),t._v(" "),l("b-collapse",{attrs:{id:"collapse-1"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t._t("default")],2),t._v(" "),t.isLoading?l("div",{staticClass:"card-disabled"},[t._m(0)]):t._e()],1):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-portlets-loader"},[e("div",{staticClass:"spinner-border text-primary m-2",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports}}]);